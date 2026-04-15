<script>
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

<section id="contact">
  <div class="wrapper">
    <h2>Get in Touch</h2>
    <p class="sub">We respond within one business day, usually much faster.</p>

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
</section>

<style>
  section {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
  }

  .wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding: 5rem 2rem 6rem;
  }

  h2 {
    font-size: 2.75rem;
    margin: 0 0 0.4rem 0;
  }

  .sub {
    font-size: 1.05rem;
    margin: 0 0 3rem 0;
    opacity: 0.7;
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

  /* ── Error message ── */
  .error-msg {
    margin: 0;
    font-size: 0.95rem;
    border-left: 3px solid black;
    padding-left: 0.75rem;
    opacity: 0.85;
  }

  /* ── Submit button ── */
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

    h2 { font-size: 2.1rem; }
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
  }
</style>
