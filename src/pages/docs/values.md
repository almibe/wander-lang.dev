---
layout: ../../layouts/Docs.astro
title: Values
tags: documentation
order: 1
---

## Values

Wander currently supports the following types of values

 - Int
 - Bool
 - String
 - Nothing
 - List
 - Tuple
 - Record
 - Lambda
 - HostValue

Values play a very important role in Wander.
In the following sections we'll breifly go over the basic literal types and go into more complex types throughout this documentation.

## Basic Literals

Wander supports several types of literals.
Literals are simply expressions that evaluate to themselves.
Below are some of the basic literals supported by Wander.
Collection and Lambda types also have literals, but we'll cover those separately.

### Integers

Integers in Wander are 64 bit signed intergers similar to Java's long or Rust's i64.

<wander-lang action="display">
1
0
-132980984
24242342
</wander-lang>

### Strings

Strings in Wander are encoded with UTF-8 and follow the syntax of JSON strings.

<wander-lang action="display">
"Hello"
"Hello\n\tWorld"
</wander-lang>

### Byte Arrays

<wander-lang action="display">
0xFF
0x12
0x48EF120A59
</wander-lang>

### Bool

<wander-lang action="display">
true
false
</wander-lang>

### Nothing

Nothing is Wander's version of None.

<wander-lang action="display">
nothing
</wander-lang>

## Arrays

Arrays are similar to lists or vectors in other languages.
They are an ordered list of items of the same type.

<wander-lang action="display">
[1 2 3]            -- A Sequence of Integers
[]                 -- An empty Sequence
[[1] [] [45 -23]]  -- A Sequence of Sequences of Integers
</wander-lang>

## Tuples

A tuple is an ordered collection of values.
They are wrapped in parentheses that is prefixed with a single quote.
They are hetrogenous, meaning that they can contain different types and each slot of a tuple is assigned a type.
This is different than sequences mentioned below which are homogenous, the entire seqeunce contains only one type.
(NOTE: The above isn't enforced yet, but is planned.)

<wander-lang action="display">
'() -- empty tuple
'(1 2 true "3") -- tuple of type (int int bool string)
'('(1) '(true)) -- a tuple containing two tuples, the first containing the integer `1` and the second `true`
'('("a") 4 '('(false '()))) -- more nested tuple schenanigans
</wander-lang>

## Records

Records are a data structure that holds key value pairs where the key is a string of characters defined by 

```regex
[a-zA-Z_][a-zA-Z0-9_]*
```

while the value can be any Wander value.
Each value in a record can be of a different type and this is represented in the type system.
The following code creates a record with 3 rows that contain Ints, a row called color that contains a byte array,
and a row named label that contains the string "You".

<wander-lang action="display">
let
  -- location has the type Record::{x::Int y::Int z::Int color::Bytes label::String}
  val location = { x: 1 y: 5 z: 10 color: 0xFFFFFF label: "You" }
in
  assertEq '(1 5 10) '(location.x location.y location.z)
end
</wander-lang>
