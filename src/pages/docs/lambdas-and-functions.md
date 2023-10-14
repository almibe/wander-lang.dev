---
layout: ../../layouts/Docs.astro
title: Wander Documentation
tags: documentation
---

# Lambdas and Functions

 * [Introduction](/docs/)
 * [Basic Types](/docs/basic-types/)
 * [Complex Types](/docs/complex-types/)
 * [Syntax and Control Flow](/docs/syntax-and-control-flow/)
 * *Lambdas and Functions*
 * [Macros](/docs/macros/)
 * [Embedding with Rust](/docs/embedding-with-rust/)
 * [Embedding with JavaScript](/docs/embedding-with-js/)

## Lambdas

Lambdas are function literals.
Lambdas are treated like a normal value and can be assigned to a variable, passed to a function, or returned from a function.
The main different is that lambdas are able to be called.
A very basic example is:

<wander-lang action="display">
  let 
    val id = \x -> x -- define id to be a lambda that takes a single value and returns that value
  in
    id 5             -- call the lambda with the value 5
  end
</wander-lang>

## Namespaces

Functions and values can be namespaced.
Namespaces start with a capital letter by convention.

<wander-lang action="display">
Bool.not
</wander-lang>

## Modules

(This hasn't been implemented yet)

## Forward Operator

The forward operator is expressed as `>>` and it allows the value on the left to be passed to the function on the right as the last value.

Not this is likely to change.

<wander-lang action="display">
or(false not(not(true)))        -- true
true >> not >> not >> or(false) -- true
</wander-lang>
