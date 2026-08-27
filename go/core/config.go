package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Opensanctum",
			"slug": "opensanctum",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://www.opensanctum.com/api",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"place": map[string]any{},
				"tradition": map[string]any{},
			},
		},
		"entity": map[string]any{
			"place": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"short": "Detailed description of the place",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the place",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "imageUrl",
						"short": "URL to an image of the place",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "location",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the place of worship",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "religion",
						"short": "Primary religion or faith tradition",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "significance",
						"short": "Historical or spiritual significance",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "Type of worship site",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "website",
						"short": "Official website URL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "yearEstablished",
						"short": "Year the place was established or built",
						"type": "`$INTEGER`",
					},
				},
				"name": "place",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "country",
											"orig": "country",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 20,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "religion",
											"orig": "religion",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/places",
								"parts": []any{
									"places",
								},
								"select": map[string]any{
									"exist": []any{
										"country",
										"limit",
										"offset",
										"religion",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tradition": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "culturalSignificance",
						"short": "Cultural and historical significance",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "Detailed description of the tradition",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the tradition",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the religious tradition or practice",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "observances",
						"short": "Regular observances or ceremonies",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "origin",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "practices",
						"short": "List of associated practices or rituals",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "religion",
						"short": "Associated religion",
						"type": "`$STRING`",
					},
				},
				"name": "tradition",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 20,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "region",
											"orig": "region",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "religion",
											"orig": "religion",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/traditions",
								"parts": []any{
									"traditions",
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"offset",
										"region",
										"religion",
										"search",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
