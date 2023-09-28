## Sequences

Sequences are similar to lists or vectors in other languages.
They are an ordered list of items of the same type.

```wander
[1 2 3]            -- A Sequence of Integers
[<a> <b> <c>]      -- A Sequence of Identifiers
[]                 -- An empty Sequence
[[1] [] [45 -23]]  -- A Sequence of Sequences of Integers
```

## Array

```wander
let threeNumbers = [1 2 3]
```
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

## Tuples

```wander
let triple = (23 false "hello")
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

## Records

```wander
let author = (lastName: 'Vonnegut' birthYear: 1922)
assertEq(author.lastName 'Vonnegut')
```
