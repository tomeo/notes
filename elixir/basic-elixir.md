# Basic Elixir

## Tooling

Use interactive shell with `iex`.

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

## Tuples

```elixir
my_stats = {175, 6.25, :Derek}
is_tuple(my_stats) # true

my_stats2 = Tuple.append(my_stats, 42)
elem(my_stats2, 3) # 42
tuple_size(my_stats2) # 4

my_stats3 = Tuple.delete_at(my_stats2, 0) # {6.25, :Derek, 42}

my_stats4 = Tuple.insert_at(my_stats3, 0, 1974) # {1974, 6.25, :Derek, 42}

many_zeroes = Tuple.duplicate(0, 5) # {0, 0, 0, 0, 0}

{weight, height} = {175, 6.25} # {175, 6.25}, weight = 175, height = 6.25
```

## Lists

```elixir
list1 = [1,2,3]
list2 = [4,5,6]

list3 = list1 ++ list2 # [1,2,3,4,5,6]
list4 = list3 -- list1 # [4,5,6]

[head | tail] = [1,2,3] # head = 1, tail = [2,3]
Enum.each tail, fn item ->
    IO.puts item
end

def display_list([]), do: nil
def display_list([head|tail]) do
    IO.puts head
    display_list(tail)
end

List.delete(list1, 2) # [1,3]
List.delete_at(list1, 2) # [1,2]
List.insert_at(list1, 3, 4) # [1,2,3,4]

List.first(list1) # 1
List.last(list1) # 3

my_stats = [name: "Derek", height: 6.25]
```

## Enumerables

```elixir
Enum.all?([1,2,3], fn(n) -> rem(n,2) === 0 end) # false
Enum.any?([1,2,3], fn(n) -> rem(n,2) === 0 end) # true

Enum.each([1,2,3], fn(n) -> IO.puts n end)
Enum.map([1,2,3], fn(n) -> n*2 end) # [2,4,6]
Enum.reduce([1,2,3], fn(n, sum) -> n + sum end) # 6

Enum.uniq([1,2,2]) # [1,2]
```

## List comprehensions

```elixir
for n <- [1,2,3], do: n * 2 # [2,4,6]
for n <- [1,2,3,4], rem(n,2) == 0, do: n # [2,4]
```

## Maps

```elixir
capitals = %{
    "Alabama" => "Montgomery,
    "Alaska" => "Juneau",
    "Arizona" => "Phoenix",
}

capitals["Alaska"] # "Juneau"

capitals2 = %{
    alabama: "Montgomery",
    alaska: "Juneau"
}
capitals2.alabama # "Montgomery"

capitals3 = Dict.put_new(capitals, "Arkansas", "Little Rock")
```

## Pattern matching

```elixir
[a,b,c] = [1,2,3] # a = 1, b = 2, c = 3


d = [1,2,3]
[e,f,g] = d # e = 1, c = f, g = 3

[_, [_, a]] = [20, [30, 40]] # a = 40
```

## Output

```elixir

IO.puts "Hi" # Hi (with newline)
IO.write "Hi" # Hi (without newline)

IO.inspect [97,98] # 'ab'
IO.inspect [97,98], charlists: :as_lists # [97,98]
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
get_sum = fn (x,y) -> x + y end
get_sum.(1,2) # 3

# Equivalent shorthand syntax
get_less = &(&1-&2)
get_less.(2,1) # 1

add_sum = fn
    {x,y} -> x+y
    {x,y,z} -> x+y+z
end
add_sum.({1,2}) # 3
add_sum.({1,2,3}) # 6

# Default paramater values
def do_it(x \\ 1, y \\ 1) do
    x + y
end
do_it.() # 2

# Recursion
def factorial(1), do: 1
def factorial(n) do
    result = n * factorial(num - 1)
    result
end
factorial.(4) # 24

def sum([]), do: 1
def sum([h|t]), do: h + sum(t)
sum.([1,2,3]) # 6

def loop(0, _), do: nil
def loop(max, min) do
    if max < min do
        loop(0, min)
    else
        IO.puts "Num: #{max}"
        loop(max - 1, min)
    end
end
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

## Exception handling

```elixir
err = try do
    5 / 0

rescue
    ArithmeticError -> "Can't divide by zero"
end
```

## Concurrency

```elixir
def do_stuff do
    spawn(fn() -> loop(50,1) end)
    spawn(fn() -> loop(100, 50) end)
end

send(self(), {:french, "Bob"})

receive do
    {:german, name} -> IO.puts "Guten tag #{name}"
    {:french, name} -> IO.puts "Bonjour #{name}"
    {:english, name} -> IO.puts "Hello #{name}"

after
    500 -> IO.puts "Time up"
    
end


```
