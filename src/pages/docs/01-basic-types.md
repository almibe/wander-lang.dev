## Values

Wander currently supports the following value types

 - Int
 - Bool
 - String
 - Nothing
 - List
 - Tuple
 - Record
 - Lambda
 - HostFunction
 - HostValue
 - PartialApplication

Values play a very important role in Wander.
Below we'll breifly go over each type.

## Basic Literals

Wander supports several types of literals.
Literals are simply expressions that evaluate to themselves.
Below are some of the basic literals supported by Wander.
Collection and Lambda types also have literals, but we'll cover those separately.

### Integers

Integers in Wander are 64 bit signed intergers similar to Java's long or Rust's i64.

```wander
1
0
-132980984
24242342
```

### Strings

Strings in Wander are encoded with UTF-8 and follow the syntax of JSON strings.

```wander
"Hello"
"Hello\n\tWorld"
```

### Byte Arrays

```wander
0xFF
0x12
0x48EF120A59
```

### Bool

```wander
true
false
```

### Nothing

Nothing is Wander's version of None.

```wander
nothing
```

