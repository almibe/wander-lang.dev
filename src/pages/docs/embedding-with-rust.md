---
layout: ../../layouts/Docs.astro
title: Wander Documentation
tags: documentation
---

# Embedding with Rust

 * [Introduction](/docs/)
 * [Basic Types](/docs/basic-types/)
 * [Complex Types](/docs/complex-types/)
 * [Syntax and Control Flow](/docs/syntax-and-control-flow/)
 * [Lambdas and Functions](/docs/lambdas-and-functions/)
 * [Macros](/docs/macros/)
 * *Embedding with Rust*
 * [Embedding with JavaScript](/docs/embedding-with-js/)

TODO all this should be in the RustDocs for Wander.
This page should just link to offical Rust docs?

This document assumes some familiarity with Rust and its ecosystem.

To use Wander from Rust first add the wander crate as a dependency to your project.
This is the only dependency you have to add to use Wander.
Below is a simple example of using Wander from within Rust.

```rust
use wander::{NoHostType, WanderError, WanderValue, run, preludes::common};

fn main() {
    let script = r#""hello""#;
    let mut bindings = common::<NoHostType>();
    println!("{:?}", run(script, &mut bindings));
}
```

This will print `Ok(String("hello"))`.
The `Ok` is from the standard `Rusult` enum and the `String` is from the `wander::WanderValue` enum.

## Host Functions



## Host Values

