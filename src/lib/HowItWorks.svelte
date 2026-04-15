<script>
  import { fade } from 'svelte/transition';
  import { onMount, onDestroy } from 'svelte';
  import Reveal from '$lib/Reveal.svelte';

  const steps = [
    {
      num: '01',
      title: 'Ship us your media',
      body: "Pack up your tapes, reels, or photos and send them over. We email a confirmation within 24 hours of receipt and keep you updated along the way.",
      icon: '📦',
    },
    {
      num: '02',
      title: 'We do the work',
      body: 'Every item is inspected and processed individually on professional equipment — no batch jobs, no rushing. Your footage gets the careful attention it deserves.',
      icon: '🎞',
    },
    {
      num: '03',
      title: 'Download or delivery',
      body: "You'll receive a secure download link within 5–10 business days. Prefer physical? Add a USB drive to your order. Originals are always returned.",
      icon: '✨',
    },
  ];

  let active = 0;
  /** @type {ReturnType<typeof setInterval> | undefined} */
  let timer;
  const INTERVAL = 5000;

  /** @param {number} i */
  function go(i) {
    active = i;
  }

  function next() {
    go((active + 1) % steps.length);
  }

  /** @param {number} i */
  function jumpTo(i) {
    go(i);
    restart();
  }

  function restart() {
    clearInterval(timer);
    timer = setInterval(next, INTERVAL);
  }

  onMount(() => {
    timer = setInterval(next, INTERVAL);
  });

  onDestroy(() => clearInterval(timer));
</script>

<section id="how-it-works" class="section">
  <div class="wrapper">
    <Reveal>
      <p class="eyebrow">How it works</p>
      <h2 class="section-title">Simple, personal, end&#8209;to&#8209;end.</h2>
      <p class="section-sub">
        From your shelf to a crisp digital file — with one pair of hands on it the whole way.
      </p>
    </Reveal>

    <Reveal delay={100}>
      <div class="timeline" role="tablist" aria-label="Our process">
        <div class="track" aria-hidden="true"></div>
        <div
          class="progress"
          aria-hidden="true"
          style="width: {(active / (steps.length - 1)) * 100}%"
        ></div>

        {#each steps as step, i}
          <button
            class="node"
            class:active={i === active}
            class:done={i < active}
            role="tab"
            aria-selected={i === active}
            aria-controls="step-panel"
            on:click={() => jumpTo(i)}
          >
            <span class="circle">
              {#if i < active}
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                  <path
                    d="M5 12l4 4 10-10"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              {:else}
                <span class="num">{step.num}</span>
              {/if}
            </span>
            <span class="label">{step.title}</span>
          </button>
        {/each}
      </div>
    </Reveal>

    <div class="panel" id="step-panel" aria-live="polite">
      {#key active}
        <div class="panel-inner" in:fade={{ duration: 320 }}>
          <div class="icon" aria-hidden="true">{steps[active].icon}</div>
          <div>
            <div class="step-meta">Step {active + 1} of {steps.length}</div>
            <h3>{steps[active].title}</h3>
            <p>{steps[active].body}</p>
          </div>
        </div>
      {/key}
    </div>

    <div class="foot">
      <p>Average turnaround: <strong>7 business days.</strong> Rush available.</p>
    </div>
  </div>
</section>

<style>
  .timeline {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 2rem 0 3rem;
    padding: 0 0 0;
  }

  .track,
  .progress {
    position: absolute;
    top: 22px;
    height: 2px;
    left: 10%;
    right: 10%;
    border-radius: 2px;
  }

  .track {
    background: var(--border);
  }

  .progress {
    background: var(--accent);
    width: 0;
    max-width: 80%;
    transition: width var(--dur-slow) var(--ease);
    left: 10%;
    right: auto;
  }

  .node {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.9rem;
    background: transparent;
    border: none;
    padding: 0 0.5rem;
    cursor: pointer;
    font-family: inherit;
    color: var(--ink-soft);
    transition: color var(--dur-fast) var(--ease);
  }

  .circle {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: var(--bg);
    border: 2px solid var(--border-strong);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-display);
    font-weight: 600;
    color: var(--ink-soft);
    transition: all var(--dur) var(--ease);
  }

  .node.active .circle {
    background: var(--accent);
    border-color: var(--accent);
    color: #fff8ef;
    box-shadow: 0 0 0 6px rgba(184, 85, 56, 0.15);
    transform: scale(1.05);
  }

  .node.done .circle {
    background: var(--ink);
    border-color: var(--ink);
    color: var(--bg);
  }

  .num {
    font-size: 0.95rem;
  }

  .label {
    font-size: 0.92rem;
    font-weight: 500;
    text-align: center;
    max-width: 18ch;
  }

  .node.active {
    color: var(--ink);
  }

  /* Active panel */
  .panel {
    background: var(--bg-alt);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 2rem 2.25rem;
    min-height: 170px;
    position: relative;
    overflow: hidden;
  }

  .panel-inner {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.5rem;
    align-items: start;
  }

  .icon {
    font-size: 2.4rem;
    line-height: 1;
    width: 64px;
    height: 64px;
    border-radius: 16px;
    background: var(--bg);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .step-meta {
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 0.4rem;
  }

  .panel h3 {
    font-size: 1.6rem;
    margin: 0 0 0.5rem 0;
  }

  .panel p {
    margin: 0;
    color: var(--ink-soft);
    line-height: 1.7;
    font-size: 1.02rem;
  }

  .foot {
    margin-top: 2rem;
    text-align: center;
    color: var(--ink-soft);
    font-size: 0.97rem;
  }

  @media (max-width: 720px) {
    .timeline {
      grid-template-columns: 1fr;
      gap: 1.25rem;
      margin-bottom: 2rem;
    }
    .track, .progress {
      display: none;
    }
    .node {
      flex-direction: row;
      justify-content: flex-start;
      gap: 0.9rem;
      padding: 0.5rem 0.9rem;
      border-radius: var(--radius);
      text-align: left;
    }
    .node.active {
      background: var(--bg-alt);
    }
    .label {
      text-align: left;
      max-width: none;
    }
    .panel {
      padding: 1.5rem;
    }
    .panel-inner {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
</style>
