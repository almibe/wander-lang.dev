---
layout: Docs.mustache
title: Macros
tags: documentation
order: 4
---

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

## Token Transforms

Token Transforms allow an easy way to create data structures in Wander.

<wander-code>
let g = graph`{

}`
</wander-code>

Behind the scenes a Token Transform calls a registered function after tokenizing input.

<wander-code>
let g = graph([
  []
])
</wander-code>
