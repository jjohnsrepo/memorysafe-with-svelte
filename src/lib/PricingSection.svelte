<script>
  import Reveal from '$lib/Reveal.svelte';

  const rates = [
    { label: 'VHS', price: '$20', unit: 'per tape' },
    { label: 'VHS-C', price: '$25', unit: 'per tape'},
    { label: 'Compact disk', price: '$10', unit: 'per CD'}

    /*Uncomment these as you support more mediums
    { label: '8mm / Super 8 film', price: '$30', unit: 'per reel' },
    { label: 'Hi8 / Video8', price: '$22', unit: 'per tape' },
    { label: 'Mini DV', price: '$18', unit: 'per tape' },
    { label: 'Photographs', price: '$0.45', unit: 'per print' },
    { label: '35mm slides', price: '$0.65', unit: 'per slide' },
    { label: 'Film negatives', price: '$0.50', unit: 'per frame' },
    { label: 'Audio cassettes', price: '$18', unit: 'per tape' },
    */
  ];

  const bundles = [
    { qty: '5-9 items', off: '10% off' },
    { qty: '10-19 items', off: '20% off' },
    { qty: '20+ items', off: 'Custom quote' },
  ];

  const addons = [
    { name: 'USB drive delivery', price: '$12' },
    { name: 'DVD delivery', price: '$3 per DVD'},
    { name: 'Home media system (only available to local residents)', price: 'Variable' },
  ];
</script>

<section id="pricing" class="section section--alt">
  <div class="wrapper">
    <Reveal>
      <p class="eyebrow">Pricing</p>
      <h2 class="section-title">Flat rates. No surprises.</h2>
      <p class="section-sub">
        One price per item. Originals returned at no extra charge.
      </p>
    </Reveal>

    <div class="layout">
      <Reveal>
        <article class="card rates-card">
          <header class="rates-head">
            <h3>Per-item rates</h3>
            <span class="badge">Most popular</span>
          </header>
          <ul class="rates">
            {#each rates as r}
              <li>
                <span class="label">{r.label}</span>
                <span class="price">
                  <strong>{r.price}</strong>
                  <em>{r.unit}</em>
                </span>
              </li>
            {/each}
          </ul>
        </article>
      </Reveal>

      <div class="side">
        <Reveal delay={80}>
          <article class="card side-card">
            <h3>Bundle discounts</h3>
            <ul class="bundle-list">
              {#each bundles as b}
                <li>
                  <span>{b.qty}</span>
                  <strong>{b.off}</strong>
                </li>
              {/each}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={140}>
          <article class="card side-card">
            <h3>Add-ons</h3>
            <ul class="bundle-list">
              {#each addons as a}
                <li>
                  <span>{a.name}</span>
                  <strong>{a.price}</strong>
                </li>
              {/each}
            </ul>
          </article>
        </Reveal>
      </div>
    </div>
  </div>
</section>

<style>
  .layout {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    gap: 1.75rem;
    align-items: start;
  }

  .side {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .card {
    background: var(--bg);
  }

  .rates-card {
    padding: 2rem 2.25rem;
  }

  .rates-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
    gap: 1rem;
  }

  .rates-head h3 {
    font-size: 1.5rem;
    margin: 0;
  }

  .badge {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.4em 0.85em;
    background: var(--accent-soft);
    color: var(--accent-hover);
    border-radius: 999px;
  }

  .rates {
    list-style: none;
    padding: 0;
    margin: 0;
    border-top: 1px solid var(--border);
  }

  .rates li {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    padding: 0.9rem 0;
    border-bottom: 1px solid var(--border);
  }

  .rates .label {
    font-size: 1rem;
    color: var(--ink);
  }

  .price {
    display: inline-flex;
    align-items: baseline;
    gap: 0.45rem;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  .price strong {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--ink);
  }

  .price em {
    font-style: normal;
    font-size: 0.82rem;
    color: var(--ink-mute);
  }

  .minor {
    margin: 1.2rem 0 0 0;
    font-size: 0.92rem;
    color: var(--ink-soft);
  }

  .side-card {
    padding: 1.5rem 1.75rem;
  }

  .side-card h3 {
    font-size: 1.2rem;
    margin: 0 0 1rem 0;
  }

  .bundle-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  .bundle-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    font-size: 0.98rem;
    color: var(--ink-soft);
  }

  .bundle-list li strong {
    color: var(--ink);
    font-family: var(--font-display);
    font-weight: 500;
  }

  .cta-card {
    padding: 1.75rem;
    background: linear-gradient(135deg, var(--accent-soft) 0%, #f6e3c8 100%);
    border-color: transparent;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .cta-card p {
    margin: 0;
    font-family: var(--font-display);
    font-size: 1.2rem;
    color: var(--ink);
    line-height: 1.35;
  }

  .cta-card .btn {
    align-self: flex-start;
  }

  @media (max-width: 880px) {
    .layout {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 520px) {
    .rates-card, .side-card {
      padding: 1.5rem 1.25rem;
    }
  }
</style>
