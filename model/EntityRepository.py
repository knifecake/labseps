import sqlite3

class EntityRepository:
    def __init__(self, connection_string):
        self.dbc = sqlite3.connect(connection_string)
        # self.dbc.set_trace_callback(print)
        self.c = self.dbc.cursor()

    def close_connection(self):
        self.dbc.close()

    def table_name(self):
        """Returns the name of the table this repository mirrors."""
        raise NotImplementedError

    def column_dict(self):
        """Returns a dictionary of column name-column type pairs."""
        raise NotImplementedError

    def primary_key(self):
        """Returns the name of the primary key in the table."""
        raise NotImplementedError

    def entity_factory(self, attrs):
        """Returns an entity objec. Optionally, it can be initailized with the given attributes."""
        raise NotImplementedError

    def generate_column_type_list(self):
        """Generates a comma-separated list of column names
        and column types, ready to plug into a SQL create
        query"""
        return ', '.join(['"%s" %s' %(f, self.column_dict()[f]) for f in self.column_dict().keys()])

    def generate_column_list(self):
        """Generates a comma-separated list of column names ready to be plugged into an SQL query"""
        return ', '.join(list(self.column_dict().keys()))

    def setup_table(self):
        """Creates the table in the database if it does not already exist."""
        query = 'CREATE TABLE IF NOT EXISTS %s ( %s )' % (self.table_name(), self.generate_column_type_list())
        self.dbc.execute(query)
        self.dbc.commit()

    def teardown_table(self):
        """Deletes the table in the database and all associated data."""
        self.dbc.execute('DROP TABLE IF EXISTS %s' % (self.table_name()))
        self.dbc.commit()

    def find(self, id):
        """Returns an Entity object representing the record with the
        given primary key. If no record is found it returns none."""

        result = self.find_dict(id)
        if result == None: return None

        return self.entity_factory(result)

    def find_by(self, query):
        """Returns an Entity object representing the record that matches the
        given hash of attributes. If no record is found it returns None."""
        condition_string = ', '.join(['"%s" = ?' % f for f in query.keys() if f in self.column_dict().keys()])
        sql = "SELECT %s FROM %s WHERE %s LIMIT 1" % (self.generate_column_list(), self.table_name(), condition_string)
        self.c.execute(sql, tuple(query.values()))
        result = self.c.fetchone()
        if result == None: return None

        return self.entity_factory(self.tuple_to_dict(result))

    def insert(self, ent):
        """Inserts a record into the database. Returns the primary key of the
        inserted record."""
        fields = ['"%s"' % f for f in self.column_dict().keys() if f != self.primary_key()]
        query = 'INSERT INTO %s (%s) VALUES (%s)' % (self.table_name(), ', '.join(fields), ', '.join(list('?' * len(fields))))
        self.c.execute(query, tuple([ent[f] for f in self.column_dict().keys() if f != self.primary_key()]))
        self.dbc.commit()
        return self.c.lastrowid

    def update(self, ent):
        """Updates the specified record. If the record is not found in the database it does nothing."""
        fields = [f for f in self.column_dict().keys() if f != self.primary_key()]
        assignments = ', '.join(["%s = ?" % f for f in fields])
        query = 'UPDATE %s SET %s WHERE %s = ?' % (self.table_name(), assignments, self.primary_key())
        self.c.execute(query, tuple([ent[f] for f in fields]) + (ent[self.primary_key()],))
        self.dbc.commit()

    def delete(self, ent):
        """Deletes a record from the database."""
        self.c.execute('DELETE FROM %s WHERE %s = ?' % (self.table_name(), self.primary_key()), str(ent[self.primary_key()]))
        self.dbc.commit()

    def remove_duplicates(self):
        """Removes duplicate rows from a table. Duplicate as in they have the
        same value for every column but the primary key."""
        query = 'DELETE FROM %s WHERE rowid NOT IN (SELECT MIN(rowid) FROM %s GROUP BY %s)' % (self.table_name(), self.table_name(), self.generate_column_list())
        self.c.execute(query)
        self.dbc.commit()


    # TODO: move inside the find method
    def find_dict(self, id):
        """Returns a dictionary of column name-value pairs with the attributes
        of the record with the given primary key. If no record is found it
        returns none."""

        self.c.execute('SELECT %s FROM %s WHERE %s = ? LIMIT 1' % (self.generate_column_list(), self.table_name(), self.primary_key()), str(id))
        result = self.c.fetchone()
        if result == None: return None

        return self.tuple_to_dict(result)

    def dict_to_tuple(self, d):
        """Converts a dictionary containing entity attributes into a tuple but
        only keeps the keys that are present in the column dictionary of the
        repository returned by self.column_dict()"""
        return tuple([d[f] for f in self.column_dict().keys()])

    def tuple_to_dict(self, tup):
        """Converts a tuple of values to a dictionary of column name-value
        pairs. Assumes the values in the tuple follow the same orden as the
        keys in the column dictionary returned by self.column_dict()"""

        if len(tup) != len(self.column_dict().keys()):
            raise AttributeError

        d = {}
        for i, f in enumerate(self.column_dict().keys()):
            d[f] = tup[i]

        return d
