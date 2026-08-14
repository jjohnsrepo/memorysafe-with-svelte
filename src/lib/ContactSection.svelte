<script>
  import Reveal from '$lib/Reveal.svelte';

  export let heading = 'Get in touch';
  export let sub = 'I respond within one business day — usually much faster.';

  let sending = false;
  let sent = false;
  /** @type {string | null} */
  let error = null;

  /** @param {SubmitEvent & { currentTarget: HTMLFormElement }} e */
  async function handleSubmit(e) {
    const form = e.currentTarget;
    sending = true;
    error = null;

    try {
      const res = await fetch('https://formspree.io/f/xeevkowy', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      const body = await res.json();
      if (res.ok) {
        sent = true;
        form.reset();
      } else {
        error = body.errors?.[0]?.message ?? 'Something went wrong. Please try again.';
      }
    } catch {
      error = 'Connection error. Please try again or email me directly.';
    } finally {
      sending = false;
    }
  }
</script>

<section id="contact" class="section">
  <div class="wrapper">
    <Reveal>
      <p class="eyebrow">Contact</p>
      <h2 class="section-title">{heading}</h2>
      <p class="section-sub">{sub}</p>
    </Reveal>

    <div class="layout">
      <Reveal>
        <div class="form-card card">
          {#if sent}
            <div class="success">
              <div class="check" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="36" height="36">
                  <path
                    d="M5 12.5l4.5 4.5L19 7"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h3>Message received.</h3>
              <p>Thanks — I'll be in touch soon.</p>
              <button class="btn btn-ghost" on:click={() => (sent = false)}>
                Send another
              </button>
            </div>
          {:else}
            <form class="form" on:submit|preventDefault={handleSubmit} novalidate>
              <div class="row-two">
                <div class="field">
                  <input id="name" name="name" type="text" required autocomplete="name" placeholder=" " />
                  <label for="name">Name</label>
                </div>
                <div class="field">
                  <input id="email" name="email" type="email" required autocomplete="email" placeholder=" " />
                  <label for="email">Email</label>
                </div>
              </div>

              <div class="row-two">
                <div class="field">
                  <input id="phone" name="phone" type="tel" autocomplete="tel" placeholder=" " />
                  <label for="phone">Phone <span class="opt">(optional)</span></label>
                </div>
                <div class="field">
                  <input id="format" name="format" type="text" placeholder=" " />
                  <label for="format">What do you have?</label>
                </div>
              </div>

              <div class="field">
                <textarea id="message" name="message" rows="5" required placeholder=" "></textarea>
                <label for="message">Message</label>
              </div>

              {#if error}
                <p class="error">{error}</p>
              {/if}

              <button type="submit" class="btn btn-primary btn-lg" disabled={sending}>
                {sending ? 'Sending…' : 'Send it'}
                {#if !sending}<span aria-hidden="true">↗</span>{/if}
              </button>
            </form>
          {/if}
        </div>
      </Reveal>

      <Reveal delay={100}>
        <aside class="aside card">
          <h3>Quick facts</h3>
          <dl>
            <div>
              <dt><span class="i">✉</span> Email</dt>
              <dd><a href="mailto:johnsonjustin983@gmail.com">johnsonjustin983@gmail.com</a></dd>
            </div>
            <div>
              <dt><span class="i">⏱</span> Turnaround</dt>
              <dd>5-10 business days<br /></dd>
            </div>
            <div>
              <dt><span class="i">📍</span> Location</dt>
              <dd>Buena Vista, VA<br />Local drop-off welcome</dd>
            </div>
          </dl>
        </aside>
      </Reveal>
    </div>
  </div>
</section>

<style>
  .layout {
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
    gap: 1.75rem;
    align-items: start;
  }

  .form-card {
    padding: 2.25rem 2.25rem 2rem;
    background: var(--bg);
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .row-two {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .field {
    position: relative;
  }

  .field input,
  .field textarea {
    width: 100%;
    background: var(--bg-alt);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.25rem 0.95rem 0.55rem;
    font-size: 1rem;
    font-family: inherit;
    color: var(--ink);
    outline: none;
    transition: border-color var(--dur-fast) var(--ease),
      box-shadow var(--dur-fast) var(--ease),
      background var(--dur-fast) var(--ease);
    resize: vertical;
  }

  .field textarea {
    padding-top: 1.5rem;
    min-height: 140px;
    line-height: 1.55;
  }

  .field label {
    position: absolute;
    left: 1rem;
    top: 1rem;
    font-size: 0.95rem;
    color: var(--ink-mute);
    pointer-events: none;
    transform-origin: left top;
    transition: transform var(--dur-fast) var(--ease),
      color var(--dur-fast) var(--ease);
  }

  .field input:focus,
  .field textarea:focus {
    border-color: var(--accent);
    background: var(--bg);
    box-shadow: 0 0 0 4px rgba(184, 85, 56, 0.12);
  }

  .field input:focus + label,
  .field input:not(:placeholder-shown) + label,
  .field textarea:focus + label,
  .field textarea:not(:placeholder-shown) + label {
    transform: translateY(-0.75rem) scale(0.78);
    color: var(--accent);
  }

  .opt {
    font-size: 0.85em;
    color: var(--ink-mute);
  }

  .error {
    margin: 0;
    padding: 0.75rem 1rem;
    border-radius: var(--radius);
    background: #fbe7e0;
    color: #7a2d1a;
    font-size: 0.92rem;
  }

  .btn[type='submit'] {
    align-self: flex-start;
  }

  /* Success */
  .success {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.9rem;
    padding: 1rem 0;
  }
  .check {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: var(--accent-soft);
    color: var(--accent-hover);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .success h3 {
    font-size: 1.6rem;
    margin: 0;
  }
  .success p {
    margin: 0;
    color: var(--ink-soft);
  }

  /* Aside */
  .aside {
    padding: 1.75rem;
    background: var(--bg);
  }

  .aside h3 {
    font-size: 1rem;
    font-family: var(--font-body);
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-mute);
    margin: 0 0 1.25rem;
  }

  .aside dl {
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
    margin: 0;
  }

  .aside dt {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 0.3rem;
  }

  .aside dt .i {
    font-size: 0.95rem;
    line-height: 1;
  }

  .aside dd {
    margin: 0;
    font-size: 0.98rem;
    line-height: 1.55;
    color: var(--ink);
  }

  .aside dd a {
    color: var(--ink);
    text-decoration: none;
    border-bottom: 1px solid var(--border-strong);
  }
  .aside dd a:hover {
    color: var(--accent);
    border-color: var(--accent);
    text-decoration: none;
  }

  @media (max-width: 880px) {
    .layout {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 520px) {
    .form-card {
      padding: 1.5rem 1.25rem;
    }
    .row-two {
      grid-template-columns: 1fr;
    }
  }
</style>
