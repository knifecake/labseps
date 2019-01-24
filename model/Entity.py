class Entity:
    def __init__(self, attrs=None):
        # Prevent this: http://effbot.org/zone/default-values.htm
        if attrs is None:
            self.attrs = {}
        else: self.attrs = attrs

    def __getitem__(self, k):
        return self.attrs.get(k, None)

    def __setitem__(self, k, v):
        self.attrs[k] = v

    def __str__(self):
        return "<%s (%s): %s>" % (type(self).__name__, str(id(self)), str(self.attrs))
