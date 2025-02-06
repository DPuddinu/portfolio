---
title: 'Modern Accordion Component'
slug: modern-accordion
description: How to build a modern accordion component with HTML and CSS only
publishDate: 2025-02-06
tags:
  - css
  - html
---

# **How to build a modern accordion with HTML and CSS only**

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="NPKJVBR" data-pen-title="Accordion with interpolate-size" data-user="Dario-Puddinu" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Dario-Puddinu/pen/NPKJVBR">
  Accordion with interpolate-size</a> by Dario Puddinu (<a href="https://codepen.io/Dario-Puddinu">@Dario-Puddinu</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

This lightweight solution leverages native browser functionality for optimal performance through a pure CSS implementation.

It features smooth height transitions using `interpolate-size: allow-keywords`, a semantic HTML structure with ARIA roles, and a design strategy that ensures cross-browser compatibility.

**Browser support**

Full animation is available in Chromium 122+ ([CanIUse reference](https://caniuse.com/mdn-css_properties_interpolate-size_allow-keywords)), while other modern browsers deliver basic functionality with an instant toggle fallback in legacy environments.

**Best practices implemented**

The approach emphasizes semantic markup via `<details>` and `<summary>`, accessibility through appropriate ARIA roles and attributes, the use of CSS logical properties like `padding-inline`, deployment of a modern color space (`oklch`), and precision timing functions.
