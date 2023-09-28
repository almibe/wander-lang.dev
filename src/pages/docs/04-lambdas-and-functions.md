## Lambdas

Lambdas are function literals.
They can be bound to names or treated like any other value.
The main different is that lambdas are able to be called.

```wander
let id = {x -> x}  -- define id to be a lambda that takes a single value and returns that value
id(5)              -- call the lambda with the value 5
```
## Lambdas

Wander supports Lambdas.
Lambdas are treated like a normal value and can be assigned to a variable, passed to a function, or returned from a function.
A very basic example is:

```wander
let five = { -> 5 } -- assign a closure with no arguments to the name five
five()              -- call the closure, results in 5
let double = { x -> mult(2 x) } -- define a closure with a single argument
let ten = double(five())
let immediatelyFive = { -> 5 }() -- define and immediately call a closure

immediatelyFive()  -- an error since immediatelyFive is the value 5, and not a closure

let middle = { first second third -> second } -- a closure with three arguments
```

## Namespaces

Functions and values can be namespaced.
Namespaces start with a capital letter by convention.

## Modules

(This hasn't been implemented yet)

## Forward Operator

The forward operator is expressed as `>>` and it allows the value on the left to be passed to the function on the right as the last value.

```wander
or(false not(not(true)))        -- true
true >> not >> not >> or(false) -- true
```

## Partial Application