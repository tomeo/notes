# Basic Kotlin

## Variables

### Mutable variables

```kotlin
var name: String = "Tommy"
```

### Immutable variables

```kotlin
val name: String = "Tommy"
```

### Type inference

```kotlin
val name = "Tommy"
```

### Top level variables

```kotlin
val name = "Tommy"

fun main() {
    println(name)
}
```

## Types

### Nullable and non-nullable types

Types in Kotlin are non-nullable by default. This means that not even Strings can be null unless they are explicitly set as nullable strings.

```kotlin
// Not valid
val name: String = null

// Valid
val name: String? = null
```

## Control flow

### If

```kotlin
fun main() {
    val name: String? = "Tommy"

    if (name != null) {
        println(name)
    } else {
        println("No name to print")
    }
}
```

#### One line if

```kotlin
val a: String? = null
val b = if (a != null) a else "Hi" 
```


### When

```kotlin
fun main() {
    val name: String? = "Tommy"

    when (name) {
        null -> println("Hi")
        else -> println(name)
    }
}
```
