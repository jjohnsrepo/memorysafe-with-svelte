<script>
  import ServicesSection from '$lib/ServicesSection.svelte';
  import HowItWorks from '$lib/HowItWorks.svelte';
  import PricingSection from '$lib/PricingSection.svelte';
  import AboutSection from '$lib/AboutSection.svelte';
  import ContactSection from '$lib/ContactSection.svelte';
  import Reveal from '$lib/Reveal.svelte';
</script>

<svelte:head>
  <title>MemorySafe — Digitization That Cares</title>
  <meta
    name="description"
    content="The friendly, independent alternative to big box digitization. Unbeatable turnaround, service, and price."
  />
</svelte:head>

<section class="hero">
  <div class="hero-bg grain"></div>

  <div class="wrapper hero-inner">
    <div class="hero-copy">
      <Reveal>
        <p class="eyebrow">A one-person studio · Est. 2019</p>
      </Reveal>

      <Reveal delay={80}>
        <h1 class="headline">
          Your memories,
          <span class="accent-wrap">
            <span class="accent">carefully</span>
            <svg
              class="underline-swash"
              viewBox="0 0 220 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 9 C 60 2, 160 2, 218 9"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </span>
          kept.
        </h1>
      </Reveal>

      <Reveal delay={160}>
        <p class="lede">
          The friendly, independent alternative to big-box digitization. Every tape,
          reel, and photograph handled personally &mdash; no batch queues, no
          conveyor belts.
        </p>
      </Reveal>

      <Reveal delay={220}>
        <ul class="pitch">
          <li><span class="dot"></span> Unbeatable turnaround</li>
          <li><span class="dot"></span> Unbeatable service</li>
          <li><span class="dot"></span> Unbeatable price</li>
        </ul>
      </Reveal>

      <Reveal delay={280}>
        <div class="cta-row">
          <a href="#contact" class="btn btn-primary btn-lg">
            Start your project
            <span aria-hidden="true">→</span>
          </a>
          <a href="#pricing" class="btn btn-ghost btn-lg">See pricing</a>
        </div>
      </Reveal>
    </div>

    <Reveal delay={120} class="hero-media">
      <div class="polaroid">
        <div class="tape"></div>
        <img
          src="/memorysafe.gif"
          alt="A slideshow of digitized home movies and family photographs"
          class="hero-gif"
        />
        <p class="caption">Bring your memories to life</p>
      </div>
    </Reveal>
  </div>
</section>

<ServicesSection />
<HowItWorks />
<PricingSection />
<AboutSection />
<ContactSection />

<style>
  .hero {
    position: relative;
    overflow: hidden;
    padding: clamp(4rem, 9vw, 7rem) 0 clamp(4rem, 8vw, 6rem);
    background:
      radial-gradient(circle at 85% 10%, var(--accent-soft) 0%, transparent 45%),
      radial-gradient(circle at 5% 95%, #efe0c5 0%, transparent 50%),
      var(--bg);
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .hero-inner {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
    gap: clamp(2rem, 5vw, 4.5rem);
    align-items: center;
  }

  .hero-copy {
    max-width: 620px;
  }

  .headline {
    font-family: var(--font-display);
    font-size: clamp(2.6rem, 6vw, 4.75rem);
    font-weight: 500;
    line-height: 1.03;
    letter-spacing: -0.025em;
    margin: 0 0 1.5rem 0;
    color: var(--ink);
  }

  .accent-wrap {
    position: relative;
    display: inline-block;
    white-space: nowrap;
  }

  .accent {
    font-style: italic;
    color: var(--accent);
    font-weight: 500;
  }

  .underline-swash {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -0.12em;
    width: 100%;
    height: 0.3em;
    color: var(--accent);
    opacity: 0.75;
  }

  .lede {
    font-size: clamp(1.05rem, 1.4vw, 1.2rem);
    line-height: 1.65;
    color: var(--ink-soft);
    margin: 0 0 1.75rem 0;
    max-width: 54ch;
  }

  .pitch {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
    margin: 0 0 2.25rem 0;
    padding: 0;
    font-size: 1rem;
    color: var(--ink);
  }

  .pitch li {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 500;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent);
    flex-shrink: 0;
  }

  .cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.85rem;
  }

  /* Polaroid frame for hero media */
  :global(.hero-media) {
    display: flex;
    justify-content: center;
  }

  .polaroid {
    position: relative;
    background: #fff;
    padding: 16px 16px 56px;
    border-radius: 4px;
    box-shadow:
      0 1px 0 rgba(0, 0, 0, 0.05) inset,
      var(--shadow-lg);
    transform: rotate(1.8deg);
    max-width: 460px;
    width: 100%;
    transition: transform var(--dur) var(--ease);
  }

  .polaroid:hover {
    transform: rotate(0deg) translateY(-4px);
  }

  .tape {
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%) rotate(-3deg);
    width: 110px;
    height: 24px;
    background: rgba(200, 159, 60, 0.55);
    border: 1px solid rgba(200, 159, 60, 0.35);
    box-shadow: 0 2px 8px rgba(30, 26, 21, 0.12);
  }

  .hero-gif {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    background: var(--bg-alt);
    border-radius: 2px;
  }

  .caption {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 14px;
    text-align: center;
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.15rem;
    color: var(--ink);
    margin: 0;
  }

  @media (max-width: 960px) {
    .hero-inner {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    .hero-copy {
      max-width: none;
    }
    .polaroid {
      max-width: 380px;
      margin: 0 auto;
    }
  }

  @media (max-width: 560px) {
    .cta-row .btn {
      width: 100%;
      justify-content: center;
    }
  }
</style>
