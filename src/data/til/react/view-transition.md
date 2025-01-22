---
title: 'React View Transition'
slug: react-view-transition
subject: 'React'
description: How to use the View Transition API in React.
publishDate: 2025-01-22
tags:
  - react
  - view transition
  - progressive-enhancement
---

# **React View Transition**

This hook shows how to use the View Transition API in React with progressive enhancement.

```javascript
import { flushSync } from 'react-dom';

export function useViewTransition() {
  return {
    startViewTransition: (callback: () => void) => {
      if (!document.startViewTransition) {
        callback();
        return;
      }

      document.startViewTransition(() => {
        flushSync(() => {
          callback();
        });
      });
    }
  };
}

```
