---
title: 'Try/Catch Alternative'
slug: try-catch-alternative
subject: 'Typescript'
description: How to avoid try/catch in Javascript using a wrapper function.
publishDate: 2025-01-03
tags:
  - typescript
  - javascript
---

## Overview

This document explains how to avoid try/catch in Typescript using a wrapper function that returns a tuple with the error and the data of type T.

```typescript
function catchError<T>(promise: Promise<T>): Promise<[undefined, T] | [Error]> {
return promise
  .then(data => {
    return [undefined, data] as [undefined, T]
  })
  .catch(error => {
    return [error]
  })
}

// Usage Example
const [error, users] = await catchError(getUsers())
```

