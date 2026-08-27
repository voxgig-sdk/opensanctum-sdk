# Opensanctum SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Opensanctum",
            "slug": "opensanctum",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://www.opensanctum.com/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "place": {},
                "tradition": {},
            },
        },
        "entity": {
      "place": {
        "fields": [
          {
            "name": "description",
            "short": "Detailed description of the place",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the place",
            "type": "`$STRING`",
          },
          {
            "name": "imageUrl",
            "short": "URL to an image of the place",
            "type": "`$STRING`",
          },
          {
            "name": "location",
            "type": "`$OBJECT`",
          },
          {
            "name": "name",
            "short": "Name of the place of worship",
            "type": "`$STRING`",
          },
          {
            "name": "religion",
            "short": "Primary religion or faith tradition",
            "type": "`$STRING`",
          },
          {
            "name": "significance",
            "short": "Historical or spiritual significance",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "short": "Type of worship site",
            "type": "`$STRING`",
          },
          {
            "name": "website",
            "short": "Official website URL",
            "type": "`$STRING`",
          },
          {
            "name": "yearEstablished",
            "short": "Year the place was established or built",
            "type": "`$INTEGER`",
          },
        ],
        "name": "place",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "country",
                      "orig": "country",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 20,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "religion",
                      "orig": "religion",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/places",
                "parts": [
                  "places",
                ],
                "select": {
                  "exist": [
                    "country",
                    "limit",
                    "offset",
                    "religion",
                    "type",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "tradition": {
        "fields": [
          {
            "name": "culturalSignificance",
            "short": "Cultural and historical significance",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "short": "Detailed description of the tradition",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the tradition",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "short": "Name of the religious tradition or practice",
            "type": "`$STRING`",
          },
          {
            "name": "observances",
            "short": "Regular observances or ceremonies",
            "type": "`$ARRAY`",
          },
          {
            "name": "origin",
            "type": "`$OBJECT`",
          },
          {
            "name": "practices",
            "short": "List of associated practices or rituals",
            "type": "`$ARRAY`",
          },
          {
            "name": "religion",
            "short": "Associated religion",
            "type": "`$STRING`",
          },
        ],
        "name": "tradition",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": 20,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "region",
                      "orig": "region",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "religion",
                      "orig": "religion",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "search",
                      "orig": "search",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/traditions",
                "parts": [
                  "traditions",
                ],
                "select": {
                  "exist": [
                    "limit",
                    "offset",
                    "region",
                    "religion",
                    "search",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
