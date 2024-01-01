---
layout: Page.mustache
title: Wander's Incomplete Messy Design Doc
tags: documentation
---

# Wander's Incomplete Messy Design Doc

Wander is a library for a variety of platforms that allows you to embed a functional scripting language (also called Wander) into your applications to help perform tasks.
This document exists for developers implementing Wander or users of Wander that want to know more about its inner workings.
It is also a living document of Wander's current design state, it might be behind or ahead of implementations at any given time (sorry, not sorry).
See [Docs](/docs) for end user documentation.

## Keywords

Wander tries to have a limited number of keywords below is the current list.

```
when
nothing
true
false
import
export
```

## Comments

Wander uses `--` to denote comments.
All comments continue from their start until the end of the line they appear on.

```
-- hello
5 -- the number five followed by a comment
```

## Expression Based

Wander is an expression based programming language.
When you run a Wander program you are evaluating one or more Expressions within an Environment.
All expressions return a value and they are separated by commas in Wander.
Trailing commas are optional.

## Simple Literals

### Int

A signed 64-bit integer, Java's long or Rust's i64.

### Bool

A boolean value that can be true or false.

### Strings

A UTF-8 String.

```
"Heeeelo"
```

#### Interpolation

Strings can support interpolation if you prefix the String with an `i`

```wander
person = { name = "Emmie" }
i"Hello, $(person.name)"
```

When interpolating a string use a `$` followed by `()` to include code.
There's no way to escape the `$` so if you need to interpolate and print a dollar use `Core.dollar`

```wander
dollars = 5
cents = 24
i"$(Core.dollar)$(dollars).${cents}"
```

### Bytes

A bytes literal takes the form

`0xDEADCAFE`

### nothing

The `nothing` keyword represents the lack of a value.

## Complex Literals

### Array

An array is simply an ordered list of elements.

```
[1, 2, 3],
[true, "hello", <24601>]
```

### Record

A record is a collection of values that are accessable by a name.

```wander
{oneMoreThanThirtyThree = 34, greeting = "Hello", id = \x -> x, website = <https://wander-lang.org>}
```

Records support a syntax shortcut if the field and variable name you are assigning to the field are the same.

```wander
x = 5,
Core.eq { x = x } { x }
```

## Lambdas

Lambdas are functions in Wander.
They begin with a `\`, are followed by the names of their parameters,
then a `->`, and finally comes the body of the lambda that must be a single expression (see Grouping below).

```
\x -> x,
\x y -> [x, y]
```

## Applications

To call a function in Wander write the name of the function followed by its arguments.
If a function takes more arguments than are provided it is partially applied.
To denote the end of an application use a comma.

```
x = Bool.and true false, -- x equals false
y = Bool.and true,       -- y a function that takes a boolean and returns the same value
y false                      -- returns false, no comma needed since it's the last line, but you can include it!
```

### Calling Records and Arrays

Both Records and Arrays can also be called in Wander.
Arrays can accept a single Int as an index.
Records can accept a single String as a field to access.

```wander
["hello", "world"] 1,                 -- "world"
{ name = "Emmie", number = 5 } "name" -- "Emmie"
```

It is usually better to access record fields with a dot but this can help with programmatic access.

## Grouping

You can use `()` to wrap multiple expressions into a single expression.

It can also be used to pass the result of an application as a value.

```
Bool.and true (Bool.not true)
```

## Assignment

```
x = 5,
z = \x -> x
```

## When Expressions

When expressions allow you to evaluate expressions conditionally.

```
when
  condition => expression,
  condition => expression,
  _ => expression,
end
```

I plan on adding another form of when expressions later that will perform pattern matching,
but initally just the simple conditional when exists.

## Importing and Exporting Names

Wander has a very simple module system.
A module has a name that can contain dots.

`Html.Shoelace`

How modules are defined is determined by the implementation.
They could be on the file system, in memory, in a database, retrieved from the web, etc.

Modules can export names using the `export` keyword.

`export x = 5`

Let's say that the previous code was in a module named Helper.
Here is how you can import that name.

```wander
Helper.x,      -- access directly
y = Helper.x,  -- alias, effectively import a single name
import Helper, -- pull all names into this space
x              -- 5
```

