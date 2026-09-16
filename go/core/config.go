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
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
						"format": "uri",
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
						"format": "uri",
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
				"id": map[string]any{
					"field": "id",
					"name": "id",
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
								"segments": []any{
									map[string]any{
										"lit": "places",
									},
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
								"parts": []any{
									"places",
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
				"id": map[string]any{
					"field": "id",
					"name": "id",
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
								"segments": []any{
									map[string]any{
										"lit": "traditions",
									},
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
								"parts": []any{
									"traditions",
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
