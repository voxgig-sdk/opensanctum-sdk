# Opensanctum SDK

Look up places of worship and religious traditions from around the world

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About OpenSanctum API

[OpenSanctum](https://www.opensanctum.com) is a public API that catalogues places of worship and religious traditions worldwide, intended for projects that explore sacred sites and the diversity of faith communities.

The service exposes two HTTP endpoints under the `/v1/` prefix:

- `GET /v1/religion/id/{id}` — fetch a religion or tradition by identifier.
- `GET /v1/churches/id/{id}` — fetch a place of worship by identifier.

The API server is `https://www.opensanctum.com/api`. CORS is not enabled on the documented endpoints, so browser-side calls from another origin may be blocked; server-side or proxied access is recommended. The upstream service has been reported as intermittently unavailable, so production callers should expect to handle network errors.

## Try it

**TypeScript**
```bash
npm install opensanctum
```

**Python**
```bash
pip install opensanctum-sdk
```

**PHP**
```bash
composer require voxgig/opensanctum-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/opensanctum-sdk/go
```

**Ruby**
```bash
gem install opensanctum-sdk
```

**Lua**
```bash
luarocks install opensanctum-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { OpensanctumSDK } from 'opensanctum'

const client = new OpensanctumSDK({})

// List all places
const places = await client.Place().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o opensanctum-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "opensanctum": {
      "command": "/abs/path/to/opensanctum-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Place** | A place of worship (such as a church, temple, mosque, or shrine), fetched by identifier via `GET /v1/churches/id/{id}`. | `/places` |
| **Tradition** | A religion or religious tradition record, fetched by identifier via `GET /v1/religion/id/{id}`. | `/traditions` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from opensanctum_sdk import OpensanctumSDK

client = OpensanctumSDK({})

# List all places
places, err = client.Place(None).list(None, None)
```

### PHP

```php
<?php
require_once 'opensanctum_sdk.php';

$client = new OpensanctumSDK([]);

// List all places
[$places, $err] = $client->Place(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/opensanctum-sdk/go"

client := sdk.NewOpensanctumSDK(map[string]any{})

// List all places
places, err := client.Place(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Opensanctum_sdk"

client = OpensanctumSDK.new({})

# List all places
places, err = client.Place(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("opensanctum_sdk")

local client = sdk.new({})

-- List all places
local places, err = client:Place(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = OpensanctumSDK.test()
const result = await client.Place().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = OpensanctumSDK.test(None, None)
result, err = client.Place(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = OpensanctumSDK::test(null, null);
[$result, $err] = $client->Place(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Place(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = OpensanctumSDK.test(nil, nil)
result, err = client.Place(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Place(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the OpenSanctum API

- Upstream: [https://www.opensanctum.com](https://www.opensanctum.com)
- API docs: [https://www.opensanctum.com/api](https://www.opensanctum.com/api)

---

Generated from the OpenSanctum API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
