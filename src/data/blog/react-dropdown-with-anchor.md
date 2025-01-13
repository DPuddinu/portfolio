---
title: 'React Dropdown with Anchor CSS'
slug: react-dropdown-with-anchor
description: How to create a dropdown component using Popover and Anchor CSS in React
publishDate: 2025-01-13
tags:
  - react
  - css
  - html
---

# **Dropdown component with Popover and Anchor CSS in React**


> **_NOTE:_**   this is not meant to be a production ready solution, the browser support is limited, please check the [Anchor support](https://caniuse.com/css-anchor-positioning) and [Popover support](https://caniuse.com/?search=popover) for more information, also, the component is not fully accessible.

In this example i used a combination of Compound Components Pattern and Context API, HTML Popover API and Anchor CSS to create a dropdown component.

The <span class="text-green-500">PROS</span> of a solution like this are:
- Flexible and declarative API
- Components are tightly coupled but maintain clear separation
- Good encapsulation of related components
- Avoids prop drilling
- Native browser functionality
- Better performance than JS-based solutions

The <span class="text-red-500">CONS</span> are:
- Components are tightly coupled
- Limited browser support




`Dropdown.tsx`
```tsx

import { ComponentPropsWithRef, createContext, PropsWithChildren, use } from 'react';
import styles from './Dropdown.module.css';

type DropdownContextType =
  | {
      id: string;
    }
  | undefined;
export const DropdownContext = createContext<DropdownContextType>(undefined);

function Dropdown({ children, id }: PropsWithChildren & { id: string }) {
  return <DropdownContext.Provider value={{ id: `--${id}` }}>{children}</DropdownContext.Provider>;
}

function DropdownTrigger({ ref, children, className, ...props }: ComponentPropsWithRef<'button'>) {
  const { id } = useDropdown();
  return (
    <button
      popoverTarget={id}
      {...props}
      ref={ref}
      style={{ ...props.style, ...{ anchorName: id } }}
      className={className}>
      {children}
    </button>
  );
}

function DropdownContent({ children, ref, style, className, ...props }: Omit<ComponentPropsWithRef<'div'>, 'id'>) {
  const { id } = useDropdown();
  return (
    <div
      {...props}
      id={id}
      popover="auto"
      ref={ref}
      className={`${styles.popoverContent} ${className}`}
      style={{ ...style, ...{ positionAnchor: id, positionArea: 'bottom center' } }}>
      {children}
    </div>
  );
}

function useDropdown() {
  const context = use(DropdownContext);
  if (!context) {
    throw new Error('useDropdown must be used within a Dropdown with an id');
  }
  if (!context.id) {
    throw new Error('invalid Dropdown id');
  }
  return context;
}
Dropdown.Trigger = DropdownTrigger;
Dropdown.Content = DropdownContent;

export default Dropdown;

```

`Dropdown.module.css`
```css
.popoverContent {
  --animation-duration: 0.2s;

  @apply m-0 mt-1 rounded-lg border-0 bg-base-300 p-2 text-base-content shadow;

  transition:
    opacity var(--animation-duration) ease-in-out,
    overlay var(--animation-duration) allow-discrete,
    display var(--animation-duration) allow-discrete;

  &[popover]:popover-open {
    opacity: 1;
  }
  &[popover] {
    opacity: 0;
  }

  @starting-style {
    &[popover]:popover-open {
      opacity: 0;
    }
  }
}

```
