# Getting Started

## Introduction

**Phoneix LiveView** is a library written in the **Elixir** language that plugs into the **Phoenix** framework.  The **Phoenix LiveView** framework uses **live views** that are comprised of **routes**, **modules** and **templates**.

## Install Phoenix and LiveView

### Install Phoenix

Install **Phoenix** using the [documentation](https://hexdocs.pm/phoenix/installation.html).

### Create Phoenix LiveView project

1. ```mix phx.new project_name```
2. Configure database in `config/dev.exs` and run `mix ecto.create`
3. Start server with `mix phx.server`

If you want to run your app inside IEx you can run:

```bash
iex -S mix phx.server
```

[[Mix]] will install the libraries for **LiveView** as **Mix depedencies**.