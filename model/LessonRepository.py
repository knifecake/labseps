from model.EntityRepository import EntityRepository
from model.Lesson import Lesson

class LessonRepository(EntityRepository):
    def __init__(self, connection_string):
        super(LessonRepository, self).__init__(connection_string)

    def table_name(self):
        return 'lessons'

    def column_dict(self):
        return {
            'id': 'INTEGER PRIMARY KEY',
            'code': 'TEXT',
            'starts_at': 'TEXT',
            'ends_at': 'TEXT',
            'day_of_week': 'INTEGER',
            'short_name': 'TEXT',
            'group': 'TEXT',
            'professors': 'TEXT',
            'room_id': 'INTEGER'
        }

    def primary_key(self):
        return 'id'

    def entity_factory(self, attrs):
        return Lesson(attrs)
