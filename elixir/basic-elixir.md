# Basic Elixir

## Tooling

Use interactive shell with `iex`.

## Definitions

```elixir
# Simple values
a = 1

# Lists
a = [1,2,3]
```

## Pattern matching

### Destructoring

```elixir
# Defining a and setting b, c, d to the values in a respectively
a = [1,2,3]
[b,c,d] = a

# Values are now assigned to b, c, d
b = 1
c = 2
d = 3
```

### Head and tail

```elixir
a = [1,2,3]
[head|tail] = a
head = 1
tail = [2,3]
```

## Functions

```elixir
func = fn a,b -> a + b end

# Equivalent shorthand syntax
func = &(&1 + &2)

func.(1,2)
# Result is 3
```

## Modules

Pattern matching and guards:

```elixir
defmodule Play do

    def fib(0), do: 1
    def fib(1), do: 1
    def fib(n) when n >= 2, do: (n-2) + fib(n-1)

end

Play.fib 10
# Result is 89
```

Pattern matching and recursive calls:

```elixir
defmodule Play do

    def sum([]), do: 0
    def sum([head | tail]), do: head + sum(tail)

end

Play.sum [1,5]
# Result is 6
```
