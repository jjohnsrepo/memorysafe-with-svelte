<script>
  import SiteNav from '$lib/SiteNav.svelte';

  let sending = false;
  let sent    = false;
  let error   = null;

  async function handleSubmit(e) {
    const form = e.currentTarget;
    sending = true;
    error   = null;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: new FormData(form),
      });

      const body = await res.json();

      if (res.ok && body.success) {
        sent = true;
        form.reset();
      } else {
        error = body.error ?? 'Something went wrong. Please try again.';
      }
    } catch {
      error = 'Connection error. Please try again or email us directly.';
    } finally {
      sending = false;
    }
  }
</script>

<svelte:head>
  <title>Contact — MemorySafe</title>
  <meta name="description" content="Get in touch with MemorySafe to start your digitization project." />
</svelte:head>

<SiteNav />

<div class="page">
  <div class="hero-band">
    <div class="wrapper">
      <h1>Get in Touch</h1>
      <p class="hero-sub">We respond within one business day, usually much faster.</p>
    </div>
  </div>

  <div class="wrapper main-content">
    <div class="layout">
      {#if sent}
        <div class="success-msg">
          <p class="success-head">Message received.</p>
          <p>Thanks, we'll be in touch soon. Check your inbox for a confirmation.</p>
          <button class="pill-btn" on:click={() => sent = false}>Send another</button>
        </div>
      {:else}
        <form class="form" on:submit|preventDefault={handleSubmit} novalidate>
          <div class="row-two">
            <div class="field">
              <label for="name">Name</label>
              <input id="name" name="name" type="text" required autocomplete="name" />
            </div>
            <div class="field">
              <label for="email">Email</label>
              <input id="email" name="email" type="email" required autocomplete="email" />
            </div>
          </div>

          <div class="row-two">
            <div class="field">
              <label for="phone">Phone <span class="optional">(optional)</span></label>
              <input id="phone" name="phone" type="tel" autocomplete="tel" />
            </div>
            <div class="field">
              <label for="format">What do you have?</label>
              <input
                id="format"
                name="format"
                type="text"
                placeholder="e.g. 12 VHS tapes, a box of photos…"
              />
            </div>
          </div>

          <div class="field">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>

          {#if error}
            <p class="error-msg">{error}</p>
          {/if}

          <button type="submit" class="pill-btn" disabled={sending}>
            {sending ? 'Sending…' : 'Send it ↗'}
          </button>
        </form>
      {/if}

      <aside class="aside">
        <dl>
          <div class="aside-item">
            <dt>Email</dt>
            <dd>hello@memorysafe.com</dd>
          </div>
          <div class="aside-item">
            <dt>Turnaround</dt>
            <dd>5–10 business days<br />Rush available</dd>
          </div>
          <div class="aside-item">
            <dt>Location</dt>
            <dd>[City, State]<br />Local drop-off welcome</dd>
          </div>
          <div class="aside-item">
            <dt>Shipping</dt>
            <dd>
              Nationwide. Ship your media to us and we'll send return instructions after
              receipt.
            </dd>
          </div>
        </dl>
      </aside>
    </div>
  </div>
</div>

<footer class="site-footer">
  <p>&copy; {new Date().getFullYear()} MemorySafe. All rights reserved.</p>
</footer>

<style>
  .page {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .hero-band {
    background: blanchedalmond;
    padding: 4rem 0 3rem;
  }

  .wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  h1 {
    font-size: 3.5rem;
    margin: 0 0 0.5rem 0;
  }

  .hero-sub {
    font-size: 1.1rem;
    margin: 0;
    opacity: 0.7;
  }

  .main-content {
    padding-top: 4rem;
    padding-bottom: 6rem;
  }

  .layout {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 4rem;
    align-items: start;
  }

  /* ── Success state ── */
  .success-msg {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .success-head {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
  }

  .success-msg p:not(.success-head) {
    margin: 0;
    opacity: 0.75;
  }

  /* ── Form ── */
  .form {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  }

  .row-two {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.75rem;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  label {
    font-size: 0.85rem;
    opacity: 0.65;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .optional {
    font-size: 0.8em;
    opacity: 0.7;
    text-transform: none;
    letter-spacing: 0;
  }

  input,
  textarea {
    background: transparent;
    border: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.35);
    padding: 0.4rem 0;
    font-size: 1rem;
    width: 100%;
    outline: none;
    color: black;
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    opacity: 0.4;
  }

  input:focus,
  textarea:focus {
    border-bottom-color: black;
  }

  textarea {
    border: 2px solid rgba(0, 0, 0, 0.2);
    padding: 0.6rem;
  }

  textarea:focus {
    border-color: black;
  }

  .error-msg {
    margin: 0;
    font-size: 0.95rem;
    border-left: 3px solid black;
    padding-left: 0.75rem;
    opacity: 0.85;
  }

  .pill-btn {
    align-self: flex-start;
    font-size: 1.25rem;
    background: blanchedalmond;
    border: 2px solid black;
    border-radius: 999px;
    padding: 0.45em 1.75em;
    cursor: pointer;
    color: black;
  }

  .pill-btn:hover:not(:disabled) {
    background: #f0d898;
  }

  .pill-btn:disabled {
    opacity: 0.5;
    cursor: default;
  }

  /* ── Aside ── */
  .aside {
    border-left: 1px solid rgba(0, 0, 0, 0.15);
    padding-left: 2.5rem;
  }

  dl {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
    margin: 0;
    padding: 0;
  }

  .aside-item dt {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    opacity: 0.55;
    margin-bottom: 0.3rem;
  }

  .aside-item dd {
    margin: 0;
    font-size: 1rem;
    line-height: 1.65;
  }

  /* ── Footer ── */
  .site-footer {
    background: rgb(255, 222, 171);
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    text-align: center;
    padding: 1.5rem;
    font-size: 0.85rem;
    opacity: 0.65;
  }

  .site-footer p {
    margin: 0;
  }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .layout {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .aside {
      border-left: none;
      border-top: 1px solid rgba(0, 0, 0, 0.15);
      padding-left: 0;
      padding-top: 2rem;
    }

    dl {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    h1 { font-size: 2.5rem; }
  }

  @media (max-width: 560px) {
    .row-two {
      grid-template-columns: 1fr;
    }

    dl {
      grid-template-columns: 1fr;
    }

    .pill-btn {
      align-self: stretch;
      text-align: center;
    }

    h1 { font-size: 2rem; }
  }
</style>
