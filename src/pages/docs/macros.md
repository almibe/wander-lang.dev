---
layout: ../../layouts/Docs.astro
title: Wander Documentation
tags: documentation
---

# Macros

## TOC

 * [Introduction](/docs/)
 * [Basic Types](/docs/basic-types/)
 * [Complex Types](/docs/complex-types/)
 * [Syntax and Control Flow](/docs/syntax-and-control-flow/)
 * [Lambdas and Functions](/docs/lambdas-and-functions/)
 * Macros
 * [Embedding with Rust](/docs/embedding-with-rust/)
 * [Embedding with JavaScript](/docs/embedding-with-js/)

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

```wander
let g = graph`{

}`
```

Behind the scenes a Token Transform calls a registered function after tokenizing input.

```wander
let g = graph([
  []
])
```
