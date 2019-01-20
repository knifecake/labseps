from model.RoomRepository import RoomRepository
from model.LessonRepository import LessonRepository

conn_string = 'db.sqlite3'

lr = LessonRepository(conn_string)
lr.teardown_table()
rr = RoomRepository(conn_string)
rr.teardown_table()
rr.setup_table()
lr.setup_table()
