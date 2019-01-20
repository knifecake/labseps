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
