---
layout: ../../layouts/Docs.astro
title: Wander Documentation
tags: documentation
---

## Status

Work on Wander is still in early days.
Expect drastic changes still and some differences between this document and implementations for the time being.
That said a working prototype is available for use.

## History

Wander began life named Stroll (I like the new name a lot better) and was developed as part of [Ligature](https://ligature.dev), a knowledge graph project.
The goal of Wander was to be a simple scripting language that focused on the domain of knowledge graphs.
One aspect of this goal was that Wander was not planning on supporting user defined types like many programming languages,
and instead build off of using graphs to represent data structures needed by programs.
While I still think that's a cool idea, going down that path lead to frustration with needing to constantly add new types at the language level.
Add to this the fact that I had a couple of other ideas for projects that could use an embedded scripting language and here we are.
Wander is now a separate project although Ligature is still a user of Wander.

## Keywords

Ligature tries to have a minimal number of keywords.
Keywords are names that users cannot use to define bindings.
This list is likely to change but here is the current list of keywords.

 * let
 * if
 * else
 * true
 * false
 * nothing
 * when
 * schema
 * enum

## Results

The main purpose of Wander is to produce a value as the result of a script.
This result can be as simple as a single value, but more likely it will involve building a table or graph of result values.
Wander uses it's internal Graph type to represent both table and graph results in the UI.













