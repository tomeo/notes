# phx.gen.live

Generates LiveView, templates, and context for a resource.

```elixir
mix phx.gen.live Accounts User users name:string age:integer
```

The first argument is the context module. The context is an Elixir module that serves as an API boundary for the given resource. A context often holds many related resources. Therefore, if the context already exists, it will be augmented with functions for the given resource.

The second argument is the schema module. The schema is responsible for mapping the database fields into an Elixir struct.

The remaining arguments are the schema module plural name (used as the schema table name), and an optional list of attributes as their respective names and types. See mix help phx.gen.schema for more information on attributes.

When this command is run for the first time, a ModalComponent and LiveHelpers module will be created, along with the resource level LiveViews and components, including UserLive.Index, UserLive.Show, and UserLive.FormComponent modules for the new resource.

> Note: A resource may also be split over distinct contexts (such as Accounts.User and Payments.User).

[mix phx.gen.live](https://hexdocs.pm/phoenix/Mix.Tasks.Phx.Gen.Live.html)
