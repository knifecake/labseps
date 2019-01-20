class Entity:
    def __init__(self, attrs={}):
        self.attrs = attrs
        pass

    def __getitem__(self, k):
        return self.attrs.get(k, None)

    def __setitem__(self, k, v):
        self.attrs[k] = v
