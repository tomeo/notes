# phx.gen.context

```elixir
mix phx.gen.context Accounts User users name:string age:integer
```

The first argument is the context module followed by the schema module and its plural name (used as the schema table name).

The context is an Elixir module that serves as an API boundary for the given resource. A context often holds many related resources. Therefore, if the context already exists, it will be augmented with functions for the given resource.

> Note: A resource may also be split over distinct contexts (such as Accounts.User and Payments.User).

The schema is responsible for mapping the database fields into an Elixir struct.

Overall, this generator will add the following files to lib/your_app:

* a context module in accounts.ex, serving as the API boundary
* a schema in accounts/user.ex, with a users table

A migration file for the repository and test files for the context will also be generated.

Read more at [mix phx.gen.context](https://hexdocs.pm/phoenix/Mix.Tasks.Phx.Gen.Context.html).
