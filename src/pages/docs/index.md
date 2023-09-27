---
layout: ../../layouts/Docs.astro
title: Wander Documentation
tags: documentation
---

## Status

Work on Wander is still in early days.
Expect drastic changes still and some differences between this document and implementations for the time being.
That said a working prototype is available for use.

## History

Wander began life named Stroll (I like the new name a lot better) and was developed as part of [Ligature](https://ligature.dev), a knowledge graph project.
The goal of Wander was to be a simple scripting language that focused on the domain of knowledge graphs.
One aspect of this goal was that Wander was not planning on supporting user defined types like many programming languages,
and instead build off of using graphs to represent data structures needed by programs.
While I still think that's a cool idea, going down that path lead to frustration with needing to constantly add new types at the language level.
Add to this the fact that I had a couple of other ideas for projects that could use an embedded scripting language and here we are.
Wander is now a separate project although Ligature is still a user of Wander and when I'm writing this still in the same repository.

## Core Concepts

Values, names, expressions, let bindings, lambdas, partial application, 
Namespaces, open, scopes, conditionals, pattern matcing, records,
token transformers

## Values

Wander currently supports the following value types

 - Int
 - Bool
 - String
 - Nothing
 - List
 - Tuple
 - Record
 - Lambda
 - HostFunction
 - HostValue
 - PartialApplication

Values play a very important role in Wander.
Below we'll breifly go over each type.

## Basic Literals

Wander supports several types of literals.
Literals are simply expressions that evaluate to themselves.
Below are some of the basic literals supported by Wander.
Collection and Lambda types also have literals, but we'll cover those separately.

### Integers

Integers in Wander are 64 bit signed intergers similar to Java's long or Rust's i64.

```wander
1
0
-132980984
24242342
```

### Strings

Strings in Wander are encoded with UTF-8 and follow the syntax of JSON strings.

```
"Hello"
"Hello\n\tWorld"
```

### Byte Arrays

```
0xFF
0x12
0x48EF120A59
```

### Bool

```
true
false
```

### Nothing

Nothing is Wander's version of None.

```
nothing
```

## Comments

Comments in Wander are demarked by `--` and always continue until the end of the line.

```
--this is a comment
-------------------------------
true -- this is the value true
24 -- this is the number 24
```

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

```
let five = 5      -- five refers to the Int 5
let six = 6
let five = "five" -- five refers to the String "five"
let five = six    -- five refers to the Int 6
```

## Lambdas

Lambdas are function literals.
They can be bound to names or treated like any other value.
The main different is that lambdas are able to be called.

```
let id = {x -> x}  -- define id to be a lambda that takes a single value and returns that value
id(5)              -- call the lambda with the value 5
```

## Array

```
let threeNumbers = [1 2 3]
```

## Tuples

```
let triple = (23 false "hello")
```

## Records

```
let author = (lastName: 'Vonnegut' birthYear: 1922)
assertEq(author.lastName 'Vonnegut')
```

## Enums

Enums are WIP

```
enum Pet = Dog | Cat | Ferret | Turtle
```

## Keywords

Ligature tries to have a minimal number of keywords.
Keywords are names that users cannot use to define bindings.
This list is likely to change but here is the current list of keywords.

 * let
 * if
 * else
 * true
 * false
 * nothing
 * when
 * schema
 * enum

## Results

The main purpose of Wander is to produce a value as the result of a script.
This result can be as simple as a single value, but more likely it will involve building a table or graph of result values.
Wander uses it's internal Graph type to represent both table and graph results in the UI.

## Tuples

A tuple is an ordered collection of values.
They are wrapped in parentheses.
Tuples are an ordered list of values.
They are wrapped in parenthesises.
They are hetrogenous, meaning that they can contain different types and each slot of a tuple is assigned a type.
This is different than sequences mentioned below which are homogenous, the entire seqeunce contains only one type.
(NOTE: The above isn't enforced yet, but is planned.)

```wander
() -- empty tuple
(1 2 true "3") -- tuple of type (int int bool string)
((1) (true)) -- a tuple containing two tuples, the first containing the integer `1` and the second `true`
(("a") 4 ((false ()))) -- more nested tuple schenanigans
```

## Sequences

Sequences are similar to lists or vectors in other languages.
They are an ordered list of items of the same type.

```wander
[1 2 3]            -- A Sequence of Integers
[<a> <b> <c>]      -- A Sequence of Identifiers
[]                 -- An empty Sequence
[[1] [] [45 -23]]  -- A Sequence of Sequences of Integers
```

## Records

Records are a data structure that holds key value pairs where the key is a string of characters defined by 

```regex
[a-zA-Z_][a-zA-Z0-9_]*
```

while the value can be any Wander value.
Each value in a record can be of a different type and this is represented in the type system.
The following code creates a record with 3 rows that contain Ints, a row called color that contains a byte array,
and a row named label that contains the string "You".

```wander
let location = ( x: 1 y: 5 z: 10 color: 0xFFFFFF label: "You" )
-- location has the type Record(x::Int y::Int z::Int color::Bytes label::String)
```

## Comments

Comments in Wander are marked by `--` and continue until the end of a line.

`24601 -- what does this even mean?`

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

## Lambdas

Wander supports Lambdas.
Lambdas are treated like a normal value and can be assigned to a variable, passed to a function, or returned from a function.
A very basic example is:

```
let five = { -> 5 } -- assign a closure with no arguments to the name five
five()              -- call the closure, results in 5
let double = { x -> mult(2 x) } -- define a closure with a single argument
let ten = double(five())
let immediatelyFive = { -> 5 }() -- define and immediately call a closure

immediatelyFive()  -- an error since immediatelyFive is the value 5, and not a closure

let middle = { first second third -> second } -- a closure with three arguments
```

## A Note on Functions

Wander doesn't currently support "normal" function declarations.
Right now only Lambdas are supported.
I'm currently going to see how far only supporting Lambdas get us, and if they are too limited functions will be added.
The main thing that functions will add will be overloading, but there are also other ways to potentially handle that.

## A Note on Operators

Currently, Wander doesn't really support operators.
It's basically just the = used in let statements and the forward operator >>.
This might change but for now I'm trying to avoid them.
This means that everywhere in a normal C-style language you'd use an operator in Wander you call a function.

`1 + 2`

`add(1 2)`

or

`1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9`

`add(1 2 3 4 5 6 7 8 9)`

But the idea is that you normally won't do this but pass functions to other functions.

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

## Namespaces

Functions and values can be namespaced.
Namespaces start with a capital letter by convention.

## Modules

(This hasn't been implemented yet)

## Forward Operator

The forward operator is expressed as `>>` and it allows the value on the left to be passed to the function on the right as the last value.

```
or(false not(not(true)))        -- true
true >> not >> not >> or(false) -- true
```

## Token Transforms

Token Transforms allow an easy way to create data structures in Wander.

```
let g = graph`{

}`
```

Behind the scenes a Token Transform calls a registered function after tokenizing input.

```
let g = graph([
  []
])
```

## Standard Library

### Boolean Functions

| Name | Signature         | Example         | Result |
| ---- | ----------------- | --------------- | ------ |
| not  | bool -> bool      | not(true)       | false  |
| and  | bool bool -> bool | and(true false) | false  |
| or   | bool bool -> bool | or(true false)  | true   |

### Integer Functions

| Name | Signature         | Example         | Result |
| ---- | ----------------- | --------------- | ------ |
| add  | int int -> int    | add(1 2)        | 3      |
| sub  | int int -> int    | sub(1 2)        | 3      |
| mul  | int int -> int    | mul(1 2)        | 3      |
| div  | int int -> int    | div(1 2)        | 3      |
| gt   | int int -> bool   | gt(1 2)         | false  |
| lt   | int int -> bool   | lt(1 2)         | true   |

### String Functions

eq

cat

substring

matches

beginsWith

endsWith

### Sequence Functions

#### at

#### each

Performs a give task on each element in a Seq.

```wander
each([1 2 3] { x -> log(x) })
```

#### filter

