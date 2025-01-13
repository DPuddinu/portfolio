---
title: 'Remove duplicates from an array'
slug: js-set
subject: 'Javascript'
description: How to remove duplicates from an array using Javascript Set.
publishDate: 2025-01-13
tags:
  - javascript
---

# **Remove duplicates from an array**

With the `Set` object, you can easily remove duplicates from an array without using a loop.

```javascript
const array = [1, 1, 2, 3, 4, 5, 5];
const uniqueArray = Array.from(new Set(array));

// uniqueArray is [1, 2, 3, 4, 5]
```
<br/>
<br/>

### **Performance breakdown**

#### Creating a Set from an Array

- **Operation**: `new Set(array)`
- **Time Complexity**: O(n)
  - Each element needs to be processed and hashed to be stored in the Set.
  - The Set uses a hash table internally for storage.

#### Converting Set Back to an Array

- **Operation**: `Array.from(set)`
- **Time Complexity**: O(n)
  - Needs to iterate through all unique elements.

#### Total Time Complexity

- **Total**: O(n)
