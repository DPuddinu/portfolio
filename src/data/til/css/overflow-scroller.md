---
title: 'Overflow scroller'
slug: overflow-scroller
subject: 'CSS'
description: How to create a very cool overflow scroller .
publishDate: 2026-04-29
tags:
  - css
  - html
---

# **Overflow Scroller by Kevin Powell**

Here is a very cool implementation of an overflow scrollery by Kevin Powell that uses a lot of nice css properties such as:

 - grid-auto-flow
 - grid-auto-columns
 - scroll-snap-type
 - scroll-snap-align
 - animation-timeline
 - corner-shape
 - container queries

https://codepen.io/editor/kevinpowell/pen/019dab2d-dfd3-7988-86c5-69986ea33e4c

```html
<main>                                     
  <section class="scroller">
    <div class="wrapper">
      <h2>Overflow scroller</h2>
      <p>Save yourself a bunch of JS with some scroll snapping!</p>
    </div>

    <div class="overflow-scroller">
      <div class="card">
        <div class="image-container">
          <img
            class="image"
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop&auto=format"
            alt="Wireless Headphones"
          />
          <div class="badge best-seller">Best Seller</div>
        </div>
        <div class="content">
          <h3 class="name">Wireless Headphones</h3>
          <div class="rating">
            <div class="stars">★★★★☆</div>
            <span class="rating-text">(4.5)</span>
          </div>
          <div class="footer">
            <div class="price">$99.99</div>
            <button class="button">Add to Cart</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="image-container">
          <img
            class="image"
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop&auto=format"
            alt="Smart Watch"
          />
          <div class="badge new">New</div>
        </div>
        <div class="content">
          <h3 class="name">Smart Watch</h3>
          <div class="rating">
            <div class="stars">★★★★☆</div>
            <span class="rating-text">(4.2)</span>
          </div>
          <div class="footer">
            <div class="price">$249.99</div>
            <button class="button">Add to Cart</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="image-container">
          <img
            class="image"
            src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=200&fit=crop&auto=format"
            alt="Bluetooth Speaker"
          />
          <div class="badge sale">Sale</div>
        </div>
        <div class="content">
          <h3 class="name">Bluetooth Speaker</h3>
          <div class="rating">
            <div class="stars">★★★★★</div>
            <span class="rating-text">(4.8)</span>
          </div>
          <div class="footer">
            <div class="price">$79.99</div>
            <button class="button">Add to Cart</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="image-container">
          <img
            class="image"
            src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=200&fit=crop&auto=format"
            alt="Phone Case"
          />
        </div>
        <div class="content">
          <h3 class="name">Phone Case</h3>
          <div class="rating">
            <div class="stars">★★★★☆</div>
            <span class="rating-text">(4.0)</span>
          </div>
          <div class="footer">
            <div class="price">$24.99</div>
            <button class="button">Add to Cart</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="image-container">
          <img
            class="image"
            src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=200&fit=crop&auto=format"
            alt="Laptop Stand"
          />
          <div class="badge best-seller">Best Seller</div>
        </div>
        <div class="content">
          <h3 class="name">Laptop Stand</h3>
          <div class="rating">
            <div class="stars">★★★★★</div>
            <span class="rating-text">(4.7)</span>
          </div>
          <div class="footer">
            <div class="price">$59.99</div>
            <button class="button">Add to Cart</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="image-container">
          <img
            class="image"
            src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop&auto=format"
            alt="USB-C Hub"
          />
          <div class="badge new">New</div>
        </div>
        <div class="content">
          <h3 class="name">USB-C Hub</h3>
          <div class="rating">
            <div class="stars">★★★★☆</div>
            <span class="rating-text">(4.3)</span>
          </div>
          <div class="footer">
            <div class="price">$89.99</div>
            <button class="button">Add to Cart</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="image-container">
          <img
            class="image"
            src="https://images.unsplash.com/photo-1621177555452-bedbe4c28879?w=300&h=200&fit=crop&auto=format"
            alt="Desk Lamp"
          />
          <div class="badge sale">Sale</div>
        </div>
        <div class="content">
          <h3 class="name">LED Desk Lamp</h3>
          <div class="rating">
            <div class="stars">★★★★☆</div>
            <span class="rating-text">(4.1)</span>
          </div>
          <div class="footer">
            <div class="price">$49.99</div>
            <button class="button">Add to Cart</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="image-container">
          <img
            class="image"
            src="https://images.unsplash.com/photo-1591290619618-904f6dd935e3?w=300&h=200&fit=crop&auto=format"
            alt="Wireless Charger"
          />
        </div>
        <div class="content">
          <h3 class="name">Wireless Charger</h3>
          <div class="rating">
            <div class="stars">★★★☆☆</div>
            <span class="rating-text">(3.8)</span>
          </div>
          <div class="footer">
            <div class="price">$34.99</div>
            <button class="button">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="auto-grid-section">
    <div class="wrapper">
      <h2>Auto grid</h2>
      <p>Intrinsic layouts with Grid, without worrying about overflow.</p>

      <div class="auto-grid">
        <div class="card">
          <div class="image-container">
            <img
              class="image"
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop&auto=format"
              alt="Wireless Headphones"
            />
            <div class="badge best-seller">Best Seller</div>
          </div>
          <div class="content">
            <h3 class="name">Wireless Headphones</h3>
            <div class="rating">
              <div class="stars">★★★★☆</div>
              <span class="rating-text">(4.5)</span>
            </div>
            <div class="footer">
              <div class="price">$99.99</div>
              <button class="button">Add to Cart</button>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image-container">
            <img
              class="image"
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop&auto=format"
              alt="Smart Watch"
            />
            <div class="badge new">New</div>
          </div>
          <div class="content">
            <h3 class="name">Smart Watch</h3>
            <div class="rating">
              <div class="stars">★★★★☆</div>
              <span class="rating-text">(4.2)</span>
            </div>
            <div class="footer">
              <div class="price">$249.99</div>
              <button class="button">Add to Cart</button>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image-container">
            <img
              class="image"
              src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=200&fit=crop&auto=format"
              alt="Bluetooth Speaker"
            />
            <div class="badge sale">Sale</div>
          </div>
          <div class="content">
            <h3 class="name">Bluetooth Speaker</h3>
            <div class="rating">
              <div class="stars">★★★★★</div>
              <span class="rating-text">(4.8)</span>
            </div>
            <div class="footer">
              <div class="price">$79.99</div>
              <button class="button">Add to Cart</button>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image-container">
            <img
              class="image"
              src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=200&fit=crop&auto=format"
              alt="Phone Case"
            />
          </div>
          <div class="content">
            <h3 class="name">Phone Case</h3>
            <div class="rating">
              <div class="stars">★★★★☆</div>
              <span class="rating-text">(4.0)</span>
            </div>
            <div class="footer">
              <div class="price">$24.99</div>
              <button class="button">Add to Cart</button>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image-container">
            <img
              class="image"
              src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=200&fit=crop&auto=format"
              alt="Laptop Stand"
            />
            <div class="badge best-seller">Best Seller</div>
          </div>
          <div class="content">
            <h3 class="name">Laptop Stand</h3>
            <div class="rating">
              <div class="stars">★★★★★</div>
              <span class="rating-text">(4.7)</span>
            </div>
            <div class="footer">
              <div class="price">$59.99</div>
              <button class="button">Add to Cart</button>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image-container">
            <img
              class="image"
              src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop&auto=format"
              alt="USB-C Hub"
            />
            <div class="badge new">New</div>
          </div>
          <div class="content">
            <h3 class="name">USB-C Hub</h3>
            <div class="rating">
              <div class="stars">★★★★☆</div>
              <span class="rating-text">(4.3)</span>
            </div>
            <div class="footer">
              <div class="price">$89.99</div>
              <button class="button">Add to Cart</button>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image-container">
            <img
              class="image"
              src="https://images.unsplash.com/photo-1621177555452-bedbe4c28879?w=300&h=200&fit=crop&auto=format"
              alt="Desk Lamp"
            />
            <div class="badge sale">Sale</div>
          </div>
          <div class="content">
            <h3 class="name">LED Desk Lamp</h3>
            <div class="rating">
              <div class="stars">★★★★☆</div>
              <span class="rating-text">(4.1)</span>
            </div>
            <div class="footer">
              <div class="price">$49.99</div>
              <button class="button">Add to Cart</button>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image-container">
            <img
              class="image"
              src="https://images.unsplash.com/photo-1591290619618-904f6dd935e3?w=300&h=200&fit=crop&auto=format"
              alt="Wireless Charger"
            />
          </div>
          <div class="content">
            <h3 class="name">Wireless Charger</h3>
            <div class="rating">
              <div class="stars">★★★☆☆</div>
              <span class="rating-text">(3.8)</span>
            </div>
            <div class="footer">
              <div class="price">$34.99</div>
              <button class="button">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="adaptive">
    <div class="wrapper">
      <h2>Adaptive layouts</h2>
      <p>
        Container queries let us adapt layouts to the space available, rather
        than the viewport.
      </p>

      <div class="sidebar-content">
        <aside>
          <div class="sidebar-section">
            <h2>Active Promotions</h2>
            <ul class="promo-list">
              <li>
                <span class="badge">FREESHIP50</span>
                Free shipping over $50
              </li>
              <li>
                <span class="badge">SAVE10</span>
                10% off wearables
              </li>
              <li>
                <span class="badge">BUNDLE</span>
                Buy 2, get 1 free
              </li>
            </ul>
          </div>
        </aside>
        <div class="auto-grid">
          <div class="card">
            <div class="image-container">
              <img
                class="image"
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop&auto=format"
                alt="Wireless Headphones"
              />
              <div class="badge best-seller">Best Seller</div>
            </div>
            <div class="content">
              <h3 class="name">Wireless Headphones</h3>
              <div class="rating">
                <div class="stars">★★★★☆</div>
                <span class="rating-text">(4.5)</span>
              </div>
              <div class="footer">
                <div class="price">$99.99</div>
                <button class="button">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image-container">
              <img
                class="image"
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop&auto=format"
                alt="Smart Watch"
              />
              <div class="badge new">New</div>
            </div>
            <div class="content">
              <h3 class="name">Smart Watch</h3>
              <div class="rating">
                <div class="stars">★★★★☆</div>
                <span class="rating-text">(4.2)</span>
              </div>
              <div class="footer">
                <div class="price">$249.99</div>
                <button class="button">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image-container">
              <img
                class="image"
                src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=200&fit=crop&auto=format"
                alt="Bluetooth Speaker"
              />
              <div class="badge sale">Sale</div>
            </div>
            <div class="content">
              <h3 class="name">Bluetooth Speaker</h3>
              <div class="rating">
                <div class="stars">★★★★★</div>
                <span class="rating-text">(4.8)</span>
              </div>
              <div class="footer">
                <div class="price">$79.99</div>
                <button class="button">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image-container">
              <img
                class="image"
                src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=200&fit=crop&auto=format"
                alt="Phone Case"
              />
            </div>
            <div class="content">
              <h3 class="name">Phone Case</h3>
              <div class="rating">
                <div class="stars">★★★★☆</div>
                <span class="rating-text">(4.0)</span>
              </div>
              <div class="footer">
                <div class="price">$24.99</div>
                <button class="button">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image-container">
              <img
                class="image"
                src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=200&fit=crop&auto=format"
                alt="Laptop Stand"
              />
              <div class="badge best-seller">Best Seller</div>
            </div>
            <div class="content">
              <h3 class="name">Laptop Stand</h3>
              <div class="rating">
                <div class="stars">★★★★★</div>
                <span class="rating-text">(4.7)</span>
              </div>
              <div class="footer">
                <div class="price">$59.99</div>
                <button class="button">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image-container">
              <img
                class="image"
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop&auto=format"
                alt="USB-C Hub"
              />
              <div class="badge new">New</div>
            </div>
            <div class="content">
              <h3 class="name">USB-C Hub</h3>
              <div class="rating">
                <div class="stars">★★★★☆</div>
                <span class="rating-text">(4.3)</span>
              </div>
              <div class="footer">
                <div class="price">$89.99</div>
                <button class="button">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image-container">
              <img
                class="image"
                src="https://images.unsplash.com/photo-1621177555452-bedbe4c28879?w=300&h=200&fit=crop&auto=format"
                alt="Desk Lamp"
              />
              <div class="badge sale">Sale</div>
            </div>
            <div class="content">
              <h3 class="name">LED Desk Lamp</h3>
              <div class="rating">
                <div class="stars">★★★★☆</div>
                <span class="rating-text">(4.1)</span>
              </div>
              <div class="footer">
                <div class="price">$49.99</div>
                <button class="button">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="image-container">
              <img
                class="image"
                src="https://images.unsplash.com/photo-1591290619618-904f6dd935e3?w=300&h=200&fit=crop&auto=format"
                alt="Wireless Charger"
              />
            </div>
            <div class="content">
              <h3 class="name">Wireless Charger</h3>
              <div class="rating">
                <div class="stars">★★★☆☆</div>
                <span class="rating-text">(3.8)</span>
              </div>
              <div class="footer">
                <div class="price">$34.99</div>
                <button class="button">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
```
```css
  .overflow-scroller {
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
  grid-auto-columns: 300px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  /* select the children */
  & > * {
    scroll-snap-align: center;
    animation: scroller linear both;
    animation-timeline: view(x);
  }
}

@keyframes scroller {
  0%,
  100% {
    opacity: 0.25;
    scale: 0.5;
  }

  35%,
  65% {
    opacity: 1;
    scale: 1;
  }
}

.auto-grid {
  --min-col-size: 200px;

  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(var(--min-col-size), 100%), 1fr)
  );
}

.sidebar-section {
  container-type: inline-size;
}

.promo-list {
  display: grid;
  gap: 1rem;

  @container (width > 500px) {
    grid-template-columns: repeat(3, 1fr);
  }

  & > li {
    border-radius: 8px;
    border-color: white;
    corner-shape: scoop;
  }
}
```
