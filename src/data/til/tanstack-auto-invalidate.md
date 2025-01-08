---
title: 'Automatic Query Invalidation'
slug: tanstack-query-invalidation
subject: 'React'
description: Automatically invalidate query after a mutation via QueryClient config.
publishDate: 2025-01-02
tags:
  - react
  - tanstack
---

# **Overview**

This document explains how to automatically invalidate queries after a mutation using the Tanstack Query library.

## Configuration

To set up automatic query invalidation, you can configure the `QueryClient` as follows:

```javascript
const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onSuccess: (_data, _variables, _context, mutation) => {
      queryClient.invalidateQueries({
        queryKey: mutation.options.mutationKey
      });
    }
  })
});
```
> **_NOTE:_**   Query key and Mutation key must be the same.

