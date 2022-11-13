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
