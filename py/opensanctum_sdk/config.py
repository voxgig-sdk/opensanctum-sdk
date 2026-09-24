# Opensanctum SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


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
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
            "title": "Description",
            "type": "`$STRING`",
            "short": "Detailed description of the place",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "short": "Unique identifier for the place",
          },
          {
            "name": "imageUrl",
            "title": "Image Url",
            "type": "`$STRING`",
            "short": "URL to an image of the place",
            "format": "uri",
          },
          {
            "name": "location",
            "title": "Location",
            "type": "`$OBJECT`",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "Name of the place of worship",
          },
          {
            "name": "religion",
            "title": "Religion",
            "type": "`$STRING`",
            "short": "Primary religion or faith tradition",
          },
          {
            "name": "significance",
            "title": "Significance",
            "type": "`$STRING`",
            "short": "Historical or spiritual significance",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
            "short": "Type of worship site",
          },
          {
            "name": "website",
            "title": "Website",
            "type": "`$STRING`",
            "short": "Official website URL",
            "format": "uri",
          },
          {
            "name": "yearEstablished",
            "title": "Year Established",
            "type": "`$INTEGER`",
            "short": "Year the place was established or built",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "place",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/places",
                "segments": [
                  {
                    "lit": "places",
                  },
                ],
                "parts": [
                  "places",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "country",
                      "orig": "country",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 20,
                    },
                    {
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 0,
                    },
                    {
                      "name": "religion",
                      "orig": "religion",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "country",
                    "limit",
                    "offset",
                    "religion",
                    "type",
                  ],
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
            "title": "Cultural Significance",
            "type": "`$STRING`",
            "short": "Cultural and historical significance",
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "short": "Detailed description of the tradition",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "short": "Unique identifier for the tradition",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "Name of the religious tradition or practice",
          },
          {
            "name": "observances",
            "title": "Observances",
            "type": "`$ARRAY`",
            "short": "Regular observances or ceremonies",
          },
          {
            "name": "origin",
            "title": "Origin",
            "type": "`$OBJECT`",
          },
          {
            "name": "practices",
            "title": "Practices",
            "type": "`$ARRAY`",
            "short": "List of associated practices or rituals",
          },
          {
            "name": "religion",
            "title": "Religion",
            "type": "`$STRING`",
            "short": "Associated religion",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "tradition",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/traditions",
                "segments": [
                  {
                    "lit": "traditions",
                  },
                ],
                "parts": [
                  "traditions",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 20,
                    },
                    {
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 0,
                    },
                    {
                      "name": "region",
                      "orig": "region",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "religion",
                      "orig": "religion",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "search",
                      "orig": "search",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "offset",
                    "region",
                    "religion",
                    "search",
                  ],
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
