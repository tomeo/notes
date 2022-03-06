# Basic Elixir

## Tooling

Use interactive shell with `iex`.

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

## Data types

### Integers

There is no maximum integer size.

```elixir
my_int = 123
is_integer(my_int)
=> true
```

### Floats

```elixir
my_float = 3.14159
is_float(my_float)
=> true
```

### Ranges

```elixir
one_to_3 = 1..3
=> [1, 2, 3]
```

### Atoms

An atoms name is the same as its value.

```elixir
is_atom(:Pittsburgh)
=> true

# Spaces in atoms
:"New York"
```

### Strings

```elixir
my_str = "My Sentence"

# String length
String.length(my_str) # 11

# String interpolation
"Length is #{String.length(my_str)}" # "Length is 11"

# String concatenation
longer_str = my_str <> " " <> "is longer" # "My Sentence is longer"

# String equality
"Egg" === "egg" # false

"Egg" === "Egg" # true

# String contains
String.contains?(my_str, "My") # true

# String first
String.first(my_str) # "M"

# String at
String.at(my_str, 4) # "e"

# String slice
String.slice(my_str, 3, 8) # "Sentence"

# String split
String.split(longer_str, " ") # ["My", "Sentence", "is", "longer"]

# String reverse
String.reverse(longer_str) # "regnol si ecnetneS yM"

# Uppercase string
String.upcase(longer_str) # "MY SENTENCE IS LONGER"

# Lowercase string
String.downcase(longer_str) # "my sentence is longer"

# Capitalize string
String.capitalize(longer_str) # "My sentence is longer"
```

## Math

All four basic methods use their regular sign; `2 + 1`, `2 - 1`, `2 * 1` and `1 % 2`.

### Integer division

```elixir
div(3,4) # 0
```

### Remainder/Modulo

```elixir
rem(3,4) # 3
```

### Mathematical functions

Almost any mathematical function is available using `:math`.

```elixir
:math.sqrt(9) # 3.0
```

## Comparisons

Two equal signs compare values, three equal signs compare value and type.

```elixir
4 == 4.0 # true
4 === 4.0 # false
```

## Logical operators

```elixir
a = 1
b = 2

a === 1 and b === 2 # true
a === 1 or b === 1 # true
not (b === 1) # true
```

## Conditionals

```elixir
age = 16

if age >= 18 do
    IO.puts "Can vote"
else
    IO.puts "Can't vote"
end

unless age === 18 do
    IO.puts "You're not 18"
else
    IO.puts "You are 18"
end

cond do
    age >= 18 -> IO.puts "You can vote"
    age >= 16 -> IO.puts "You can drive"
    age >= 14 -> IO.puts "You can wait"
    true -> IO.puts "Default"
end

case 2 do
    1 -> IO.puts "Entered 1"
    2 -> IO.puts "Entered 2"
    _ -> IO.puts "Default"
end

if age > 18, do: "Can Vote", else: "Can't vote"
```

## Pipes

```elixir
"my sentence with no caps"
    |> String.split
    |> Enum.map(fn i -> String.capitalize(i) end)
    |> Enum.join(" ")
# "My Sentence With No Caps"
```

## Functions

```elixir
func = fn a,b -> a + b end

# Equivalent shorthand syntax
func = &(&1 + &2)

func.(1,2) # 3
```

## Modules

```elixir
defmodule Hello do
    def say() do
        IO.puts "Hello world"
    end
end
```

Shorthand do-block:

```elixir
defmodule Hello do
    def say(), do: IO.puts "Hello world"
end
```

Pattern matching and guards:

```elixir
defmodule Play do
    def fib(0), do: 1
    def fib(1), do: 1
    def fib(n) when n >= 2, do: (n-2) + fib(n-1)
end

Play.fib 10 # 89
```

Pattern matching and recursive calls:

```elixir
defmodule Play do
    def sum([]), do: 0
    def sum([head | tail]), do: head + sum(tail)
end

Play.sum [1,5] # 6
```
