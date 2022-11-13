# Mix

The Mix tool is included in every Elixir installation and is a build automation tool. It provides functionality for creating, compiling, and testing Elixir source code.

> Note: Mix is an Elixir executable. This means that in order to run `mix`, you need to have both `mix` and `elixir` executables in your PATH. That’s what happens when you install Elixir.

## Mix tasks

Mix provides tasks to create, clean, build, compile, and test Elixir applications. Run `mix help` to list all tasks.

## Mix projects

By convention the Elixir script file named `mix.exs` will contain project information, such as dependencies.

To install dependencies run:

```bash
mix deps.get
```

The source code for the dependencies is kept in the folder `deps` in the project root.

## Sources

* [Mix (build tool)](https://en.wikipedia.org/wiki/Mix_(build_tool))