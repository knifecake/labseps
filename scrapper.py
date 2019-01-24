from urllib.request import urlopen
import urllib
from bs4 import BeautifulSoup
import re
from model.Lesson import Lesson
from model.LessonRepository import LessonRepository
from model.RoomRepository import RoomRepository
from model.Room import Room
import time

class ScheduleScrapper:
    DAYS_OF_WEEK = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']
    SEMESTERS = ['Anual', 'Primer Cuatrimestre', 'Segundo Cuatrimestre']

    def __init__(self, pages):
        self.schedule_page_processing_queue = pages
        self.slot_detail_processing_queue = []
        self.db_queue = []
        self.lr = LessonRepository('db.sqlite3')
        self.rr = RoomRepository('db.sqlite3')


    def run(self):
        """Runs the scrapping process."""
        self.process_schedule_pages()
        self.process_slot_details()

        for lesson in self.db_queue: self.lr.insert(lesson)


    def process_schedule_pages(self):
        for p in self.schedule_page_processing_queue:
            self.parse_schedule_page(self.url_fetch(p))

    def process_slot_details(self):
        for lesson in self.slot_detail_processing_queue:
            print("Processing slot detail for %s" % lesson)
            slot_detail = self.url_fetch(self.generate_slot_detail_url(lesson))
            self.parse_slot_detail(lesson, slot_detail)
            self.process_rooms(lesson)


    def parse_schedule_page(self, schedule_page):
        """Given the text of a schedule page it parses all schedule tables
        there. Then it creates one lesson object per table cell and nequeues
        them to be further processed down the pipeline."""

        soup = BeautifulSoup(schedule_page, 'html.parser')
        tables = soup.select('div.tabla_horario')

        for t in tables:
            semester = self.convert_semester(t.select_one('h1').text)
            for link in t.select('table.tabladatos tbody tr td a'):
                lesson = Lesson()
                lesson['short_name'] = link.text
                lesson['semester'] = semester

                # parse onclick attribute
                self.parse_onclick_attribute(lesson, link['onclick'])

                # enqueue lesson to be further processed
                self.slot_detail_processing_queue.append(lesson)
                print("Enqueued lesson %s" % lesson)

    def parse_onclick_attribute(self, lesson, onclick_text):
        """Given the text of an onclick attribute, parses the information
        available there and fills a lesson object with the values it found. Per
        the readme, this method gathers information on the following
        attributes: code, starts_at, ends_at and day_of_week."""

        # get text inside paretheses
        m = re.search(r'\(.*\)', onclick_text)
        if m.group() and len(m.group()[1:-1].split(', ')) == 4:
            lesson['code'], lesson['starts_at'], lesson['ends_at'], lesson['raw_day_of_week'] = map(lambda x: x[1:-1], m.group()[1:-1].split(', '))
            lesson['day_of_week'] = self.convert_day_of_week(lesson['raw_day_of_week'])

    def parse_slot_detail(self, lesson, slot_detail):
        """Given a slot_detail webpage it parses the information available
        there and fills in a lesson object with the values it found. Per the
        README, the following attributes are acquired: course_name, group,
        professors, room name. The room name is saved in the lesson object and
        is then converted to a room id when the corresponding room record is
        created in the database."""

        soup = BeautifulSoup(slot_detail, 'html.parser')
        data = soup.select('.tabladatos td')
        if len(data) == 6:
            lesson.attrs['course_name'] = data[0].text
            lesson.attrs['group']       = data[1].text
            lesson.attrs['professors']  = data[2].text
            lesson.attrs['room_names']  = data[5].get_text('\n').split('\n')

    def url_fetch(self, url):
        time.sleep(0.4)
        # a trick from https://docs.djangoproject.com/en/dev/_modules/django/utils/encoding/#iri_to_uri
        url = urllib.parse.quote(url, safe="/#%[]=:;$&()+,!?*@'~")
        print("Fetching %s..." % url)
        return urlopen(url)

    def process_rooms(self, lesson):
        for room_name in lesson['room_names']:
            room = self.rr.find_by({'name': room_name})
            if room != None:
                lesson['room_id'] = room['id']
            else:
                rid = self.rr.insert(Room({'name': room_name}))
                lesson['room_id'] = rid

            self.db_queue.append(Lesson(lesson.attrs))

    def generate_slot_detail_url(self, lesson):
        return 'https://intranet.eps.uam.es/Publico/Estudios/DetallesDocencia?idDocencia=%s&inicio=%s&final=%s&codigoDia=%s' %(lesson['code'], lesson['starts_at'], lesson['ends_at'], urllib.parse.quote(lesson['raw_day_of_week']))

    # TODO: this shouldn't be an instance method
    def convert_semester(self, semester):
        return self.SEMESTERS.index(semester)

    def convert_day_of_week(self, weekday):
        return self.DAYS_OF_WEEK.index(weekday)

if __name__ == '__main__':
    f = open('source_urls.txt', 'r')
    scrapper = ScheduleScrapper(f.readlines())
    scrapper.run()
