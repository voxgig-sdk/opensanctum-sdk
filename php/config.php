<?php
declare(strict_types=1);

// Opensanctum SDK configuration

class OpensanctumConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Opensanctum",
                "slug" => "opensanctum",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://www.opensanctum.com/api",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "place" => [],
                    "tradition" => [],
                ],
            ],
            "entity" => [
        'place' => [
          'fields' => [
            [
              'name' => 'description',
              'short' => 'Detailed description of the place',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the place',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'imageUrl',
              'short' => 'URL to an image of the place',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'location',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'name',
              'short' => 'Name of the place of worship',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'religion',
              'short' => 'Primary religion or faith tradition',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'significance',
              'short' => 'Historical or spiritual significance',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'short' => 'Type of worship site',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'website',
              'short' => 'Official website URL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'yearEstablished',
              'short' => 'Year the place was established or built',
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'place',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'country',
                        'orig' => 'country',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 20,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'religion',
                        'orig' => 'religion',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/places',
                  'parts' => [
                    'places',
                  ],
                  'select' => [
                    'exist' => [
                      'country',
                      'limit',
                      'offset',
                      'religion',
                      'type',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'tradition' => [
          'fields' => [
            [
              'name' => 'culturalSignificance',
              'short' => 'Cultural and historical significance',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'short' => 'Detailed description of the tradition',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the tradition',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'short' => 'Name of the religious tradition or practice',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'observances',
              'short' => 'Regular observances or ceremonies',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'origin',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'practices',
              'short' => 'List of associated practices or rituals',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'religion',
              'short' => 'Associated religion',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'tradition',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 20,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'region',
                        'orig' => 'region',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'religion',
                        'orig' => 'religion',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'search',
                        'orig' => 'search',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/traditions',
                  'parts' => [
                    'traditions',
                  ],
                  'select' => [
                    'exist' => [
                      'limit',
                      'offset',
                      'region',
                      'religion',
                      'search',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return OpensanctumFeatures::make_feature($name);
    }
}
