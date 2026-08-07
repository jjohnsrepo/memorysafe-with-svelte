<footer class="site-footer">
  <div class="wrapper footer-inner">
    <div class="brand">
      <div>
        <p class="wordmark">MemorySafe</p>
        <p class="tag">Digitization That Cares.</p>
      </div>
    </div>

    <nav class="foot-nav" aria-label="Footer">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/#services">Services</a>
      <a href="/#pricing">Pricing</a>
      <a href="/contact">Contact</a>
    </nav>

    <p class="copy">&copy; {new Date().getFullYear()} MemorySafe. All rights reserved.</p>
  </div>
</footer>

<style>
  .site-footer {
    background: var(--ink);
    color: #e7d9c3;
    padding: 3.5rem 0 2rem;
    margin-top: auto;
  }

  .footer-inner {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 2rem 3rem;
    align-items: center;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 0.9rem;
  }

  .brand img {
    width: 46px;
    height: 46px;
    filter: brightness(0) invert(0.85);
  }

  .wordmark {
    font-family: Courier, "Courier New", var(--font-mono);
    font-size: 1.3rem;
    font-weight: 700;
    margin: 0;
    color: #fbf6ec;
    letter-spacing: -0.005em;
  }

  .tag {
    margin: 0.15rem 0 0 0;
    font-size: 0.85rem;
    color: #c9b89a;
  }

  .foot-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 1.4rem;
    font-size: 0.95rem;
  }

  .foot-nav a {
    color: #d7c6a8;
    text-decoration: none;
    transition: color var(--dur-fast) var(--ease);
  }

  .foot-nav a:hover {
    color: var(--accent-soft);
    text-decoration: none;
  }

  .copy {
    grid-column: 1 / -1;
    margin: 1.5rem 0 0 0;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    font-size: 0.8rem;
    color: #9b8a6f;
  }

  @media (max-width: 720px) {
    .footer-inner {
      grid-template-columns: 1fr;
    }
  }
</style>
