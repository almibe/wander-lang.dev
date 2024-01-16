---
layout: Page.mustache
title: WMDN Design Doc
tags: documentation
---

# Wander Module Data Notation Design Doc

The Wander Module Data Notation (WMDN or wmdn) is a data format similar to [JSON](https://www.json.org/) or [EDN](https://github.com/edn-format/edn) in that it is a subset of a general purpose programming language.
However it is richer than those languages in that it has some constructs from programming languages.
(I don't know much about Dhall but I suspect wmdn is less featureful that Dhall.)
This includes bindings, comments, functions (don't get excited), and conditionals.
In practice it's Wander with no modules bound.
This means that things like checking equality or iterating aren't possible since functions like Core.eq aren't provided.

```
x = 5,
zool = true,
reverse first second = [second first],
gamma = {
    beep = "boop",
    y = x,
    z = {
        goat = false,
        rev = reverse "what?" "okay!",
    }
},
when
  zool => gamma,
  false => {}
end
```

results in

```
{
    beep = "boop",
    y = 5,
    z = {
        goat = false,
        rev = ["okay!", "what?"]
    }
}
```
