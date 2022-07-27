# Phoenix LiveView

## Create Phoenix LiveView project

1. ```mix phx.new project_name```
2. Configure database in `config/dev.exs` and run `mix ecto.create`
3. Start server with `mix phx.server`

## Configure project

* `mix.exs` acs as the `package.json` of a nodejs project.
* `config/dev.exs`, `config/test.exs`, and `config/prod.exs`, configures databases, SSL, logging and so on for each environment.
* `config/config.exs` lets you specify cross environment configuration.
* `config/runtime.exs` is typically used to load production configuration and secrets from environment variables or elsewhere.

## The LiveView Lifecycle

LiveView manages state in structs that are called sockets. The module `Phoenix.LiveView.Socket` creates these structs.

### Initial request

1. Receive HTTP-request
2. The `mount/3` callback is invoked which assigns initial state to the socket.
3. The `render/1` callback is then invoked with the state that `mount/3` assigned to the socket.
4. A full HTML-page is sent back to the client as a regular HTTP-response.

### Subsequent requests

1. When the initial page loaded it also loaded `assets/js/app.js` which opens a persistant websocket connection to the server.
2. A stateful LiveView process is spawned. `mount/3` will then be invoked again and initalises the state of the process assigning values to the socket.
3. `render/1` will then be invoked once more to render a new view for the state. However this time it will only send the parts that need updating.

Read more at [Phoenix.LiveView behaviour
](https://pragmaticstudio.com/tutorials/the-life-cycle-of-a-phoenix-liveview).

### Lifecycle

1. Receive event
2. Change state
3. Render state

## CRC: Constructors, Reducers, and Converters

In Elixir modules are often associated with a _core type_. The `String` module deals with stings, the `Enum` module deals with enumerables. Developers will strive to make a module's public functions relate to its core type.

* Constructors create the core type
* Reducers transform a the core type to a different type
* Converters convert the core type to a different type

## Debug data transfer

1. Open Chrome and dev tools
2. Filter WS
3. Click on the socket with the longest URL and then messages

## Setup authentication

```elixir
mix phx.gen.auth Accounts User users
mix deps.get
mix ecto.migrate
```

### Add account

In project dir:

```elixir
iex -S mix
alias Urval.Accounts # to list functions run exports Accounts
params = %{email:"user@example.com", password:"password"}
Accounts.register_user(params)
```

## Create resource

```elixir
mix phx.gen.live Catalog Product products name:string description:string unit_price:float sku:integer:unique
mix exto.migrate
```

## Live session?

TBC
