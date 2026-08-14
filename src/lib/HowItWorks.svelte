<script>
  import { onMount, onDestroy } from 'svelte';
  import Reveal from '$lib/Reveal.svelte';

  const steps = [
    {
      num: '01',
      title: 'Ship your media',
      body: "Pack up your tapes or discs and send them over. I'll email a confirmation within 24 hours of receipt and keep you updated along the way.",
    },
    {
      num: '02',
      title: 'Careful conversion',
      body: 'Every item is inspected and processed individually on professional equipment. Your footage gets the careful attention it deserves.',
    },
    {
      num: '03',
      title: 'Get everything back',
      body: "All of your original media is safely returned to you, accompanied by your high-quality digital files on a flash drive or customer-provided drive.",
    },
  ];

  /** @type {HTMLElement} */
  let containerEl;
  /** @type {HTMLElement} */
  let stepsEl;
  /** @type {HTMLElement[]} */
  let nodeEls = [];
  let progress = 0;
  let railTop = 23;
  let railBottom = 23;
  let thresholds = steps.map((_, i) => i / (steps.length - 1));
  let raf = 0;

  function measureRail() {
    if (!stepsEl || !nodeEls[0] || !nodeEls[nodeEls.length - 1]) return;
    const s = stepsEl.getBoundingClientRect();
    const first = nodeEls[0].getBoundingClientRect();
    const last = nodeEls[nodeEls.length - 1].getBoundingClientRect();
    railTop = first.top - s.top + first.height;
    railBottom = s.height - (last.top - s.top);

    const railLen = s.height - railTop - railBottom;
    thresholds = nodeEls.map((n) => {
      if (!n || railLen <= 0) return 0;
      const r = n.getBoundingClientRect();
      const topY = r.top - s.top - railTop;
      return Math.max(0, Math.min(1, topY / railLen));
    });
  }

  function update() {
    raf = 0;
    if (!containerEl) return;
    const rect = containerEl.getBoundingClientRect();
    const vh = window.innerHeight;
    const total = rect.height - vh;
    if (total <= 0) {
      progress = 0;
      return;
    }
    progress = Math.min(1, Math.max(0, -rect.top / total));
  }

  function onScroll() {
    if (!raf) raf = requestAnimationFrame(update);
  }

  function onResize() {
    onScroll();
    measureRail();
  }

  onMount(() => {
    update();
    measureRail();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    }
    if (raf) cancelAnimationFrame(raf);
  });

  $: eased = (() => {
    const IN = 0.12;
    const OUT = 0.88;
    if (progress <= IN) return 0;
    if (progress >= OUT) return 1;
    return (progress - IN) / (OUT - IN);
  })();

  $: activeIndex = (() => {
    let last = -1;
    for (let i = 0; i < thresholds.length; i++) {
      if (eased >= thresholds[i]) last = i;
      else break;
    }
    return last;
  })();
</script>

<section id="how-it-works" class="scroll-container" bind:this={containerEl}>
  <div class="pinned">
    <div class="wrapper pin-inner">
      <Reveal>
        <div class="intro">
          <p class="eyebrow">How it works</p>
          <h2 class="section-title">Simple, personal, end&#8209;to&#8209;end.</h2>
          <p class="section-sub">
            From your shelf to a crisp digital file.
          </p>
        </div>
      </Reveal>

      <div class="steps" bind:this={stepsEl}>
        <div
          class="rail"
          aria-hidden="true"
          style="top: {railTop}px; bottom: {railBottom}px;"
        >
          <span class="rail-track"></span>
          <span class="rail-fill" style="height: {eased * 100}%"></span>
        </div>

        <ol class="step-list">
          {#each steps as step, i}
            <li
              class="step"
              class:active={i === activeIndex}
              class:done={i < activeIndex}
            >
              <div class="node" bind:this={nodeEls[i]}>
                {#if i < activeIndex}
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
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
              </div>
              <div class="content">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          {/each}
        </ol>
      </div>

      <div class="foot">
        <p>Average turnaround: <strong>7 business days.</strong></p>
        <p class="footnote">
          <sup class="fn-mark">*</sup>While every effort is made to ensure no
          media is damaged or lost, accidents happen &mdash; a risk inherent to
          working with old media. In the event of an accident, I&rsquo;ll
          communicate with you and we can discuss an appropriate response.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .scroll-container {
    position: relative;
    height: 300vh;
    background: var(--bg);
  }

  .pinned {
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .pin-inner {
    display: grid;
    gap: 2.25rem;
    width: 100%;
  }

  .intro {
    max-width: 720px;
  }

  .steps {
    position: relative;
    max-width: 720px;
  }

  .rail {
    position: absolute;
    left: 22px;
    width: 2px;
  }

  .rail-track,
  .rail-fill {
    position: absolute;
    left: 0;
    width: 100%;
    border-radius: 2px;
  }

  .rail-track {
    top: 0;
    bottom: 0;
    background: var(--border);
  }

  .rail-fill {
    top: 0;
    background: var(--accent);
    height: 0;
  }

  .step-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 2.25rem;
  }

  .step {
    position: relative;
    display: grid;
    grid-template-columns: 46px 1fr;
    gap: 1.75rem;
    align-items: start;
    opacity: 0.4;
    transition: opacity 350ms var(--ease);
  }

  .step.active,
  .step.done {
    opacity: 1;
  }

  .node {
    position: relative;
    z-index: 1;
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
    font-size: 0.95rem;
    color: var(--ink-soft);
    transition:
      background var(--dur) var(--ease),
      border-color var(--dur) var(--ease),
      color var(--dur) var(--ease),
      box-shadow var(--dur) var(--ease);
  }

  .fn-mark {
    font-size: 0.6em;
    vertical-align: super;
    color: var(--accent);
    line-height: 0
  }

  .foot {
    color: var(--ink-soft);
    font-size: 0.95rem;
    display: grid;
    gap: 0.75rem;
    max-width: 58ch;
  }

  .foot > p {
    margin: 0;
  }

  .footnote {
    font-size: 0.72rem;
    line-height: 1.55;
    color: var(--ink-mute);
    font-weight: 400;
    margin: 0;
    padding-top: 0.75rem;
    border-top: 1px solid var(--border);
  }

  .footnote .fn-mark {
    margin-right: 0.2em;
  }

  .step.active .node {
    background: var(--accent);
    border-color: var(--accent);
    color: #fff8ef;
    box-shadow: 0 0 0 6px rgba(184, 85, 56, 0.15);
  }

  .step.done .node {
    background: var(--ink);
    border-color: var(--ink);
    color: var(--bg);
    box-shadow: none;
  }

  .content h3 {
    font-size: 1.5rem;
    line-height: 1.2;
    margin: 0 0 0.45rem 0;
    color: var(--ink);
  }

  .content p {
    margin: 0;
    color: var(--ink-soft);
    line-height: 1.65;
    font-size: 1rem;
    max-width: 58ch;
  }

  @media (max-height: 780px) {
    .pin-inner {
      gap: 1.5rem;
    }
    .step-list {
      gap: 1.5rem;
    }
    .content h3 {
      font-size: 1.3rem;
    }
    .content p {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 720px), (prefers-reduced-motion: reduce) {
    .scroll-container {
      height: auto;
      padding: var(--section-pad-y) 0;
    }
    .pinned {
      position: static;
      height: auto;
      display: block;
      overflow: visible;
    }
    .pin-inner {
      gap: 2rem;
    }
    .step-list {
      gap: 2.25rem;
    }
    .step {
      opacity: 1;
      transition: none;
    }
    .rail-fill {
      height: 100% !important;
    }
  }
</style>
