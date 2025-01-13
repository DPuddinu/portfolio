---
title: 'Select nested elements with Tailwind CSS'
slug: tailwind-nested-select
subject: 'Tailwind CSS'
description: How to select nested elements with Tailwind CSS.
publishDate: 2025-01-13
tags:
  - javascript
---

# **Select nested elements with Tailwind CSS**

## Maintainability concern

One of the biggest maintainability concern when using a utility-first approach is managing commonly repeated utility combinations.

As Tailwind documentation says, this is easily solved by extracting components and partials, and using editor and language features like multi-cursor editing and simple loops.

Sometimes, however, you don't need to extract components and partials, a simpler solution is to use classic CSS selectors like `& > *`.

```css
<div class='[&>p]:text-red-500'>
  <p>Hello</p>
  <p>World</p>
</div>

//more nested
<main class='[&>div>p]:text-red-500'>
  <div>
    <p>Hello</p>
    <p>World</p>
  </div>
</main>
```
In this way, all the `<p>` tags inside the `<div>` will have the text-red-500 class applied.

I found this to be particularly useful when working with ``@tailwindcss/typography`` Prose components.


``Prose.astro``
```astro
---
type Props = {
  class?: string;
};
const { class: className } = Astro.props;
---
<div
  class:list={[className]}
  class={`space-y-4 prose-h1:text-4xl`}>
  <slot />
</div>
```

If we want to override the default styles of the ``h1`` tag, we can do it like this:
```astro
<Prose class='[&>h1]:text-blue-200/80'>
  <Content />
</Prose>
```