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
          Digitize your old analog media into crisp digital files you can
          watch, share, and keep forever. Every item handled personally, no batch
          queues, no conveyor belts.
        </p>
      </Reveal>

      <Reveal delay={220}>
        <ul class="pitch">
          <li><span class="dot"></span> Unbeatable care</li>
          <li><span class="dot"></span> Unbeatable price</li>
          <li><span class="dot"></span> Unlimited memories</li>
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
      <div class="polaroid-stack">
        <div class="polaroid">
          <div class="tape"></div>
          <video
            src="/memorysafe.mp4"
            autoplay
            loop
            muted
            playsinline
            class="hero-gif"
          ></video>
          <p class="caption">Relive every moment</p>
        </div>
        <div class="polaroid polaroid-2">
          <div class="tape"></div>
          <video
            src="/Second_gif_compressed.mp4"
            autoplay
            loop
            muted
            playsinline
            class="hero-gif"
          ></video>
          <p class="caption">Preserved forever</p>
        </div>
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

  .polaroid-stack {
    position: relative;
    max-width: 900px;
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .polaroid {
    position: absolute;
    top:190px;
    background: #fff;
    padding: 16px 16px 56px;
    border-radius: 4px;
    box-shadow:
      0 1px 0 rgba(0, 0, 0, 0.05) inset,
      var(--shadow-lg);
    transform: rotate(1.8deg);
    width: 480px;
    transition: transform var(--dur) var(--ease);
  }

  .polaroid-2 {
    transform: rotate(-2.4deg) translateX(290px) translateY(-200px);
    z-index: 1;
  }

  .polaroid:hover {
    transform: rotate(0deg) translateY(-4px);
  }

  .polaroid-2:hover {
    transform: rotate(0deg) translateX(290px) translateY(-204px);
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
    text-align: center;
    font-family: Handodle;
    font-style: italic;
    font-size: 2rem;
    color: var(--ink);
    margin: 0;
  }

  @media (max-width: 1667px) {
    .polaroid-stack {
      max-width: 850px;
      height: 380px;
    }
    .polaroid {
      width: 350px;
      top: 140px;
    }
    .polaroid-2 {
      transform: rotate(-2.4deg) translateX(180px) translateY(-120px);
    }
    .polaroid-2:hover {
      transform: rotate(0deg) translateX(180px) translateY(-124px);
    }
  }

  @media (max-width: 1320px) {
    .polaroid-stack {
      max-width: 700px;
      height: 340px;
    }
    .polaroid {
      width: 300px;
      top: 120px;
    }
    .polaroid-2 {
      transform: rotate(-2.4deg) translateX(150px) translateY(-100px);
    }
    .polaroid-2:hover {
      transform: rotate(0deg) translateX(150px) translateY(-104px);
    }
  }

  @media (max-width: 960px) {
    .hero-inner {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    .hero-copy {
      max-width: none;
    }
    .polaroid-stack {
      max-width: 500px;
      height: 280px;
    }
    .polaroid {
      width: 220px;
      top: 87px;
    }
    .polaroid-2 {
      transform: rotate(-2.4deg) translateX(133px) translateY(-92px);
    }
    .polaroid-2:hover {
      transform: rotate(0deg) translateX(133px) translateY(-96px);
    }
    .caption{
      font-size:1rem
    }
  }

  @media (max-width: 560px) {
    .polaroid-stack {
      max-width: 300px;
      height: 160px;
    }
    .polaroid {
      width: 230px;
      top: -10px;
    }
    .polaroid-2 {
      display: none;
    }
    .cta-row .btn {
      width: 100%;
      justify-content: center;
    }
  }
</style>
