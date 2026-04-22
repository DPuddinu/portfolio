---
title: "Borgo dei Centenari"
slug: "borgo-dei-centenari-project"
description: How a weekend trip to Orgosolo turned into a custom booking platform
publishDate: 2026-04-22
tags: ["Astro", "Convex", "React", "Sardinia", "B&B", "life"]
image: "/src/assets/logo.svg"
---

# Borgo dei Centenari

This project started in the most unexpected way. A few months ago, I was in Orgosolo to spend a night at this beautiful B&B with my girlfriend at the time. The next morning, while we were checking out, the owner, Michela, kept us for a long, friendly chat—the kind of authentic hospitality you only find in the heart of Barbagia.

During our conversation, she opened up about the challenges of running a small business, specifically how big platforms like Booking.com take a significant portion of her revenue through commissions. She wanted a way to gradually become more independent. Right then and there, I proposed building her a custom platform to manage her bookings directly. She was thrilled, and the project took off.

Here is the result: [Borgo dei centenari](https://borgodeicentenari.com)

## The Solution

The goal was to create a professional, fast, and easy-to-use system that could compete with the user experience of major booking sites while keeping costs and complexity low for the owner.

### 🛠️ The Backoffice
I built a dedicated backoffice area where the owner has full control over her business in real-time. She can:
- View all current and upcoming bookings.
- Update room prices and details on the fly.
- Close rooms for specific dates (e.g., for maintenance or personal use).
- Manage multilingual content for her international guests.

### ⚡ Performance & Architecture
To ensure the best possible experience for potential guests, speed was the top priority. I chose an architecture that balances performance with ease of management:

- **Static-First Approach**: The customer-facing site is mostly static for lightning-fast load times.
- **Build-Time Updates**: Room prices and availability are pulled and updated during the build process.
- **Webhook Integration**: Whenever the owner makes a change in the backoffice—whether it's a price adjustment or closing a room—a webhook triggers a new build of the site.
- **Fast Iteration**: Since the builds are extremely efficient (taking about 1 minute), the slight delay in updates is a perfect trade-off for the superior performance of a static site. Instant updates weren't a requirement, but speed for the guest was.

## Tech Stack

- **Framework**: [Astro](https://astro.build/) for the static-first frontend.
- **Backend**: [Convex](https://www.convex.dev/) for real-time data management in the backoffice.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (using `size-*` utilities for better consistency).
- **Deployment**: [Vercel](https://vercel.com/) for hosting and build automation.
- **Email**: [Resend](https://resend.com/) for booking confirmations.


