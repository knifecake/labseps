from model.EntityRepository import EntityRepository
from model.Room import Room

class RoomRepository(EntityRepository):
    def __init__(self, connection_string):
        super(RoomRepository, self).__init__(connection_string)

    def table_name(self):
        return 'rooms'

    def column_dict(self):
        return {'id': 'INTEGER PRIMARY KEY', 'name': 'TEXT'}

    def primary_key(self):
        return 'id'

    def entity_factory(self, attrs):
        return Room(attrs)

    def get_free_rooms_between(self, semester, day_of_week, start_time, end_time):
        """Returns free rooms between the specified times."""
        sql = 'SELECT * FROM %s WHERE id NOT IN (SELECT room_id FROM lessons WHERE starts_at < ? AND ends_at > ? AND day_of_week = ? AND semester = ?)' % self.table_name()
        results = self.c.execute(sql, (end_time, start_time, day_of_week, semester))

        return list(map(self.entity_factory, map(self.tuple_to_dict, results)))

    def get_free_labs_between(self, semester, day_of_week, start_time, end_time):
        """Returns free labs between the specified times."""
        sql = "SELECT * FROM %s WHERE name LIKE %s AND name NOT LIKE %s AND id NOT IN (SELECT room_id FROM lessons WHERE starts_at < ? AND ends_at > ? AND day_of_week = ? AND semester = ?)" % (self.table_name(), "'Laboratorio %'", "'Laboratorio C%'")
        results = self.c.execute(sql, (end_time, start_time, day_of_week, semester))

        return list(map(self.entity_factory, map(self.tuple_to_dict, results)))
