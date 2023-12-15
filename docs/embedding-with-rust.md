---
layout: Docs.mustache
title: Embedding with Rust
tags: documentation
order: 5
---

This document assumes some familiarity with Rust and its ecosystem including cargo.

To use Wander from Rust first add the latest version of the [`wander`](https://crates.io/crates/wander) crate as a dependency to your project.

```bash
cargo add wander
```

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

If this prints `Ok(String("hello"))` things are working.
See https://docs.rs/wander/latest/wander/ for the RustDocs that go into greater detail on using this project.
