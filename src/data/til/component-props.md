---
title: 'Component Props Type'
slug: component-props
subject: 'React'
description: Very useful types for creating reusable React components.
publishDate: 2025-01-03
tags:
  - typescript
  - react
---

# **Overview**

This component accepts all the props of the input component.

```typescript
import { ComponentProps } from 'react';

type InputProps = ComponentProps<'input'>

const Input = (props: InputProps) => {

  return (
    <input {...props} />
  )
};

export default Input;

// Usage
<Input type="text" placeholder="Enter your name" />
```

<br />
If we need to pass a ref to the component, we can use the `ComponentPropsWithRef` type.
<br />

```typescript
import { ComponentPropsWithRef } from 'react';

type InputProps = ComponentPropsWithRef<'input'>

const Input = ({ref, ...props}: InputProps) => {

  return (
    <input {...props} ref={ref} />
  )
};

export default Input;
```
