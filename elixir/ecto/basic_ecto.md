# Basic Ecto

## Create migration

```elixir
mix ecto.gen.migration
```

## Recreate database and seed

First close all connections to database.

```elixir
mix ecto.drop
mix ecto.create
mix ecto.migrate
mix run priv/repo/seeds.exs
```
