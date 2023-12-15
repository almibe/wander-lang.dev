---
layout: Docs.mustache
title: Lambdas and Functions
tags: documentation
order: 3
---

## Lambdas

Lambdas are function literals.
Lambdas are treated like a normal value and can be assigned to a variable, passed to a function, or returned from a function.
The main different is that lambdas are able to be called.
A very basic example is:

<wander-code>
  let 
    val id = \x -> x -- define id to be a lambda that takes a single value and returns that value
  in
    id 5             -- call the lambda with the value 5
  end
</wander-code>

## Namespaces

Functions and values can be namespaced.
Namespaces start with a capital letter by convention.

<wander-code>
Bool.not
</wander-code>

## Modules

(This hasn't been implemented yet)

## Forward Operator

The forward operator is expressed as `>>` and it allows the value on the left to be passed to the function on the right as the last value.

Not this is likely to change.

<wander-code>
or(false not(not(true)))        -- true
true >> not >> not >> or(false) -- true
</wander-code>
