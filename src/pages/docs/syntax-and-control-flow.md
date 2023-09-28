---
layout: ../../layouts/Docs.astro
title: Wander Documentation
tags: documentation
---

# Syntax and Control Flow

## TOC

 * [Introduction](/docs/)
 * [Basic Types](/docs/basic-types/)
 * [Complex Types](/docs/complex-types/)
 * Syntax and Control Flow
 * [Lambdas and Functions](/docs/lambdas-and-functions/)
 * [Macros](/docs/macros/)
 * [Embedding with Rust](/docs/embedding-with-rust/)
 * [Embedding with JavaScript](/docs/embedding-with-js/)

## Comments

Comments in Wander are demarked by `--` and always continue until the end of the line.

```wander
--this is a comment
-------------------------------
true -- this is the value true
24 -- this is the number 24
```
## Comments

Comments in Wander are marked by `--` and continue until the end of a line.

`24601 -- what does this even mean?`

## Names & Let Bindings

## Names

Names in Wander are used for variable names in scripts.
Variable names in Wander are used for local variables, top level variables, parameters, and function names.
A valid identifier starts with a-z, A-Z, or _ and then includes zero of more characters from the same set or numbers.

```regex
[a-zA-Z_][a-zA-Z0-9_]*
```

Names in Wander reference values.
Wander uses the let keyword to bind a value to a variable name.
All bindings are immutable but the same name can be shadowed in the same scope with another let binding.

```wander
let five = 5      -- five refers to the Int 5
let six = 6
let five = "five" -- five refers to the String "five"
let five = six    -- five refers to the Int 6
```

## Let Expressions

Let expressions allow a user to bind a value to a name within the current scope.

`let prisonerNumber = 24601 -- ohh`

## Expressions

Everything in Wander can be viewed as an expression.
By expression I mean they result in a value.

## Scopes

In Wander a scope is wrapped in `{}` and acts as an expression that is evaluated.
Scopes are also used for scoping variables.
See a small example below.

```wander
let x = 5 -- x is now 5 at the top scope

let y = {   -- create a new scope
  let x = 6 -- in this scope x is 6
  x         -- return 6
}           -- end scope

y           -- this will return 6
```

A Ligature script is made up of several scopes.
The first two are created for the user and all others are created by the user.
Scope 0 contains "native functions" these are functions that the user didn't define.
Scope 1 contains the main script.
Scopes 2 and up are all defined by the user.

## Conditionals

### If Expressions

If expressions represent a choice between various blocks of code to run.
In Wander all if expressions are required to have both an `if` and `else` branch.
Optionally zero or more `else if` branches can exist between them.
`if` and `else if` cases accept a condition expression that must result in a boolean value.

```wander
let five = if true 5 else 6
if eq(five 5) 5 else if eq(five 6) 6 else 7
if eq(five 5) {
  5
} else if eq(five 6) {
  6
} else {
  let result = 7
  result
}
```

### Match Expressions

Match Expressions are being considered.
