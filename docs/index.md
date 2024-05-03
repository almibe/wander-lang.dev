---
layout: Docs.mustache
title: Wander Documentation
tags: documentation
order: -1
---

<section class="alert">
    <h3>Status</h3>
    <p>
        Work on Wander is still in early days.
        Expect drastic changes still and some differences between this document and implementations for the time being.
        That said a working prototype is available for use.
    </p>
</section>

# Language Reference

This page is a work in progress to document Wander.
I'm mostly going to breadth over depth at the moment, so don't expect a lot of details yet.

## Expectations

Wander isn't like most programming languages.
It sits inbetween a domain specific language and a general purpose one.
It lacks a lot of things other programming languages have, but provides alternatives.
Eventually I'll expand on that idea more, but for now just keep that in mind.

## Expressions

Wander is an expression based language.
A Wander script is simply a list of expressions.
When you run a script, all of the expressions are evaluated and the last result is returned to the user.
Wander uses commas to separate expressions.

## Control Flow

Wander doesn't approach control flow like most languages.
Wander doesn't directly support conditionals or loops.
Wander instead has different primitives based on values.
I start to explain this in the Slots and Pattern section later in this document.
That said I still haven't full designed or documented these features.

## Primitives

Primitives in Wander can be broken down into two categories, those from Ligature and those added for Wander since Wander extends Ligature's data types.

### From Ligature

#### Int

Ints are similar to what most languages call BigInts.
They are positive, zero, or negative integers of any length.

```wander
-12293490
0
23459384503859038
2
```

#### String

Strings in Wander follow the same defintion as Strings from JSON.

```wander
"Hello, world."
"Hello\nNew world."
```

#### Identifier

Identifiers are names that evaluate to themselves unlike variables which are names that evaluate to another value.
Identifiers are wrapped in backticks and can contain most characters but not whitespace.

```
`hello`
`123`
`?@$?@$?@%?$?%#%@%$525424`
```

#### Bytes

Bytes are arrays of Bytes.
They can be written as hex literals

```
0x00
0xAA
0xDEADCAFE
```

#### Statements and Datasets

A Statement in Ligature is a triple made up of an Entity, an Attribute, and a Value.
The types allowed in each position are as follows.

| Entity     | Attribute  | Value      |
| ---------- | ---------- | ---------- |
| Identifier | Identifier | Identifier |
|            |            | Int        |
|            |            | String     |
|            |            | Bytes      |

A Dataset is made up of a collection of Statements.
In Wander Datasets are expressed using Dataset literals.

```wander
{`entity` `attribute` `value`}
```

#### Slots and Patterns

Slots are similar to Identifiers in that they are a type of name, but Slots are used to represent variables in Patterns.
Slots are written as names that start with `$`.
Patterns are like Datasets in that they are a collection of Statements, but a Pattern can contain Slots that can be used in to extract values or as templates.

```
$aSlot
{$a $pattern $example}
{`also` $a "Pattern"}
```

### Additional Wander Primitives

As I noted the previous primitives I've listed are from Ligature.
The follow are in Wander but don't exist in Ligature.

#### Namespaces

Namespaces in Wander provide a way to map a name to a value.
If you are used to programming languages like Java or C#,
you can think of Maps in Wander as having the type Map<Identifier, WanderValue>.

```wander
{ w => 4, x => `5`, y => "6", z => 0x07, id => \x -> x }
```

#### Lambdas

Lambdas allow you define functions in Wander.
Functions in Wander take a set number of parameters and are refered to by name.
Here is a simple lambda that takes two arguments and returns them wrapped in an Array.

```
\a b -> [a, b]
```

### Comments

Wander uses `--` to denote comments.
All comments continue from their start until the end of the line they appear on.

```wander
-- hello
5 -- the number five followed by a comment
```

### Variable Names



### Assignments

You can assign a value to a 

### Calling Functions

### Grouping

### Piping
