from model.RoomRepository import RoomRepository
import json

CONNECTION_STRING = 'db.sqlite3'

rr = RoomRepository(CONNECTION_STRING)

jd = {'days':{}, 'rooms':{}}

# days are encoded from 0 = monday to 4 = friday
for day in range(5):
    jd['days'][day] = {}
    for hour in range(9, 20):
        start_time = "%02d:00:00" % hour
        end_time = "%02d:00:00" % (hour + 1)

        results = rr.get_free_labs_between(day, start_time, end_time)

        # save room details
        for r in results:
            jd['rooms'][r['id']] = r['name']

        # save free room ids
        jd['days'][day][hour] = list(map(lambda r: r['id'], results))


print(json.dumps(jd))

