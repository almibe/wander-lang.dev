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
 - Array
 - Record
 - Lambda

Values play a very important role in Wander.
In the following sections we'll breifly go over the basic literal types and go into more complex types throughout this documentation.

## Basic Literals

Wander supports several types of literals.
Literals are simply expressions that evaluate to themselves.
Below are some of the basic literals supported by Wander.
Collection and Lambda types also have literals, but we'll cover those separately.

### Integers

Integers in Wander are 64 bit signed intergers similar to Java's long or Rust's i64.

<wander-code>
1
0
-132980984
24242342
</wander-code>

### Strings

Strings in Wander are encoded with UTF-8 and follow the syntax of JSON strings.

<wander-code>
"Hello"
"Hello\n\tWorld"
</wander-code>

### Byte Arrays

<wander-code>
0xFF
0x12
0x48EF120A59
</wander-code>

### Bool

<wander-code>
true
false
</wander-code>

### Nothing

Nothing is Wander's version of None.

<wander-code>
nothing
</wander-code>

## Arrays

Arrays are similar to lists or vectors in other languages.
They are an ordered list of items of the same type.

<wander-code>
[1 2 3]            -- A Sequence of Integers
[]                 -- An empty Sequence
[[1] [] [45 -23]]  -- A Sequence of Sequences of Integers
</wander-code>

## Records

Records are a data structure that holds key value pairs where the key is a string of characters defined by 

```
[a-zA-Z_][a-zA-Z0-9_]*
```

while the value can be any Wander value.
Each value in a record can be of a different type and this is represented in the type system.
The following code creates a record with 3 rows that contain Ints, a row called color that contains a byte array,
and a row named label that contains the string "You".

<wander-code>
let
  -- location has the type Record::{x::Int y::Int z::Int color::Bytes label::String}
  val location = { x: 1 y: 5 z: 10 color: 0xFFFFFF label: "You" }
in
  assertEq '(1 5 10) '(location.x location.y location.z)
end
</wander-code>
