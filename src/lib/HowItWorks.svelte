<script>
  import { fly } from 'svelte/transition';
  import { onMount, onDestroy } from 'svelte';

  const steps = [
    {
      num: '01',
      title: 'Ship Us Your Media',
      body: "Pack your tapes, reels, or photos and send them to our studio. We'll email you a confirmation within 24 hours of receipt and keep you updated throughout the process.",
    },
    {
      num: '02',
      title: 'We Do the Work',
      body: 'Every item is processed individually on professional equipment — no batch jobs, no rushing. Your footage gets the careful, personal attention it deserves.',
    },
    {
      num: '03',
      title: 'Download or Delivery',
      body: "You'll receive a secure download link within 5–10 business days. Need a physical copy? Add a USB drive to your order. Originals are always returned.",
    },
  ];

  let active = 0;
  let dir = 1; // 1 = forward (slide left), -1 = backward (slide right)
  let timer;
  const INTERVAL = 4000;

  function go(i, d) {
    dir = d;
    active = i;
  }

  function next() {
    go((active + 1) % steps.length, 1);
  }

  function prev() {
    go((active - 1 + steps.length) % steps.length, -1);
  }

  function jumpTo(i) {
    if (i === active) return;
    go(i, i > active ? 1 : -1);
    restart();
  }

  function restart() {
    clearInterval(timer);
    timer = setInterval(next, INTERVAL);
  }

  onMount(() => {
    timer = setInterval(next, INTERVAL);
  });

  onDestroy(() => {
    clearInterval(timer);
  });
</script>

<section id="how-it-works">
  <div class="wrapper">

    <div class="header-row">
      <div>
        <h2>How It Works</h2>
        <p class="sub">Simple, personal, and end-to-end.</p>
      </div>
      <div class="nav-btns">
        <button class="arrow-btn" on:click={() => { prev(); restart(); }} aria-label="Previous step">←</button>
        <button class="arrow-btn" on:click={() => { next(); restart(); }} aria-label="Next step">→</button>
      </div>
    </div>

    <!-- Fixed-height container so slides don't cause layout shifts -->
    <div class="slider" aria-live="polite" aria-atomic="true">
      {#key active}
        <div
          class="slide"
          in:fly={{ x: dir * 90, duration: 380, opacity: 0 }}
          out:fly={{ x: dir * -90, duration: 380, opacity: 0 }}
        >
          <span class="num" aria-hidden="true">{steps[active].num}</span>
          <h3>{steps[active].title}</h3>
          <p>{steps[active].body}</p>
        </div>
      {/key}
    </div>

    <!-- Progress dots -->
    <div class="controls">
      {#each steps as step, i}
        <button
          class="dot"
          class:dot-active={i === active}
          on:click={() => jumpTo(i)}
          aria-label="Go to step {i + 1}: {step.title}"
          aria-current={i === active ? 'step' : undefined}
        ></button>
      {/each}
      <span class="step-label">{active + 1} / {steps.length}</span>
    </div>

    <p class="footer-note">
      Average turnaround: <strong>7 business days.</strong> Rush processing available.
    </p>
  </div>
</section>

<style>
  section {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
  }

  .wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding: 5rem 2rem;
  }

  /* ── Header row: title left, arrows right ── */
  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 3rem;
  }

  h2 {
    font-size: 2.75rem;
    margin: 0 0 0.3rem 0;
  }

  .sub {
    font-size: 1.05rem;
    margin: 0;
    opacity: 0.7;
  }

  .nav-btns {
    display: flex;
    gap: 0.5rem;
    flex-shrink: 0;
  }

  .arrow-btn {
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.3);
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
  }

  .arrow-btn:hover {
    border-color: black;
    background: rgba(0, 0, 0, 0.05);
  }

  /* ── Slide container — fixed height prevents layout shift ── */
  .slider {
    position: relative;
    overflow: hidden;
    height: 220px;
  }

  /* Both slides are absolute so they overlap cleanly during transition */
  .slide {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }

  .num {
    font-size: 4.5rem;
    font-weight: bold;
    line-height: 1;
    color: rgba(0, 0, 0, 0.08);
    letter-spacing: -0.05em;
    flex-shrink: 0;
  }

  .slide h3 {
    font-size: 1.4rem;
    margin: 0;
    flex-shrink: 0;
  }

  .slide p {
    font-size: 1rem;
    line-height: 1.75;
    margin: 0;
    opacity: 0.8;
  }

  /* ── Dot controls ── */
  .controls {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-top: 2rem;
  }

  .dot {
    width: 28px;
    height: 6px;
    border: none;
    background: rgba(0, 0, 0, 0.15);
    cursor: pointer;
    padding: 0;
    position: relative;
    overflow: hidden;
  }

  /* Fill bar animates from left to right over the interval duration */
  .dot-active {
    background: rgba(0, 0, 0, 0.15);
  }

  .dot-active::after {
    content: '';
    position: absolute;
    inset: 0;
    background: black;
    transform-origin: left;
    animation: fill 4s linear forwards;
  }

  @keyframes fill {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }

  .step-label {
    font-size: 0.85rem;
    opacity: 0.4;
    margin-left: 0.25rem;
  }

  /* ── Footer note ── */
  .footer-note {
    margin: 2.5rem 0 0 0;
    font-size: 1rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    opacity: 0.75;
  }

  /* ── Responsive ── */
  @media (max-width: 750px) {
    .slider {
      height: 260px; /* more vertical room on narrow screens */
    }

    .num {
      font-size: 3rem;
    }

    h2 { font-size: 2.1rem; }

    .header-row {
      align-items: flex-start;
      flex-direction: column;
      gap: 1rem;
    }
  }

  @media (max-width: 480px) {
    .slider {
      height: 300px;
    }
  }
</style>
