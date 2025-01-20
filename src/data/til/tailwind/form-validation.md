---
title: 'Form Validation'
slug: form-validation
subject: 'Tailwind CSS'
description: How to validate form inputs using HTML and CSS only.
publishDate: 2025-01-20
tags:
  - CSS
  - Tailwind
  - HTML
---

# **Form Validation Without JavaScript**

This small snippet shows how to validate form inputs using HTML and Tailwindcss.

```javascript
/* add this to your global.css file */
@layer base {
  /* when the input is invalid, and the input is not empty, the input will be outlined in red */
  input:invalid:not(:placeholder-shown) {
    @apply outline-red-500;
  }

  /* when the input is invalid, the error message will be shown. */
  input:invalid:not(:placeholder-shown) ~ .error {
    @apply visible h-auto text-red-500;
  }

  /* when the input is valid, the error message will be hidden. */
  .error {
    @apply invisible h-0 max-w-xs text-xs;
  }
}

/* usage */
<form class="flex flex-col gap-2">
  <input required type="text" placeholder="Enter your name" />
  <p class="error">Please enter your name</p>
</form>
```

## **Key point**

In order to show the error message, we need to use the `~` operator and place the error message **IMMEDIATELY** after the input.
