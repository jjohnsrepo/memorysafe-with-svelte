<script>
  import Reveal from '$lib/Reveal.svelte';
  import { SITE_URL } from '$lib/site.js';

  const features = [
    {
      icon: '▶',
      title: 'Watch on anything',
      body: 'Stream to smart TVs, phones, tablets, and laptops from one shared library. No special apps required beyond a free player.'
    },
    {
      icon: '♡',
      title: 'Yours to keep',
      body: 'You own the hardware and every file on it. No subscriptions, no cloud storage fees, nothing held hostage.'
    },
    {
      icon: '⇌',
      title: 'Works offline',
      body: 'Everything lives on your home network, so your library keeps playing even if the internet goes down.'
    },
    {
      icon: '+',
      title: 'Grows with you',
      body: 'Add more tapes, discs, or home videos anytime. The library can be expanded as your collection does.'
    }
  ];

  const steps = [
    {
      num: '01',
      title: 'Digitize',
      body: 'Start with any of the standard digitization services. Your tapes and discs become crisp digital files.'
    },
    {
      num: '02',
      title: 'Build & set up',
      body: 'I build the server and set it all up — hardware, software, and storage — before your library is loaded.'
    },
    {
      num: '03',
      title: 'Load & watch',
      body: 'Your finished library is loaded onto the server, it arrives ready to go, and your memories are on the big screen the same day.'
    }
  ];

  const included = [
    'Server hardware, built and set up for you',
    'Storage drive with your full digital library loaded',
    'Setup, organization, and a guided walkthrough',
    'Simple instructions for adding media in the future',
    'Ongoing support for as long as you have the server'
  ];
</script>

<svelte:head>
  <title>Home Media Servers — MemorySafe</title>
  <meta
    name="description"
    content="A home media server puts all your digitized memories on every screen in the house. Setup and hardware included with MemorySafe."
  />
  <link rel="canonical" href="{SITE_URL}/media-server" />
  <meta property="og:title" content="Home Media Servers — MemorySafe" />
  <meta
    property="og:description"
    content="A home media server puts all your digitized memories on every screen in the house. Setup and hardware included with MemorySafe."
  />
  <meta property="og:url" content="{SITE_URL}/media-server" />
  <meta name="twitter:title" content="Home Media Servers — MemorySafe" />
  <meta
    name="twitter:description"
    content="A home media server puts all your digitized memories on every screen in the house. Setup and hardware included with MemorySafe."
  />
</svelte:head>

<section class="hero section">
  <div class="wrapper">
    <Reveal>
      <p class="eyebrow">Add-on</p>
      <h1 class="title">Your memories, in every room.</h1>
      <p class="sub">
        A home media server turns your digitized tapes and discs into a library you can watch on any
        TV, phone, or tablet in the house — no players, no hunting for the HDMI cable.
      </p>
      <p class="availability">
        <sup class="fn-mark">*</sup> Currently available only to local-area Buena Vista customers.
      </p>
      <div class="cta-row">
        <a href="/contact" class="btn btn-primary">Get a quote →</a>
      </div>
    </Reveal>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <Reveal>
      <p class="eyebrow">What it is</p>
      <h2 class="section-title">A library for your whole home.</h2>
      <p class="section-sub">
        After your media is digitized, a small server stores the files and streams them to the
        screens on your home network. The hardware is yours to keep, everything runs on your own network,
        and there are no monthly fees.
      </p>
    </Reveal>

    <div class="grid">
      {#each features as f, i}
        <Reveal delay={i * 70}>
          <article class="feature card">
            <div class="feature-icon" aria-hidden="true">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </article>
        </Reveal>
      {/each}
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="wrapper">
    <Reveal>
      <p class="eyebrow">How it works</p>
      <h2 class="section-title">From closet to couch.</h2>
    </Reveal>

    <div class="steps">
      {#each steps as s, i}
        <Reveal delay={i * 80}>
          <div class="step">
            <span class="step-num">{s.num}</span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          </div>
        </Reveal>
      {/each}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrapper">
    <Reveal>
      <p class="eyebrow">What's included</p>
      <h2 class="section-title">Everything, handled.</h2>
    </Reveal>

    <div class="include-list">
      {#each included as item}
        <Reveal>
          <div class="include-item">
            <span class="check" aria-hidden="true">✓</span>
            <span>{item}</span>
          </div>
        </Reveal>
      {/each}
    </div>

    <Reveal delay={120}>
      <p class="note">
        Not sure if a media server is right for you? <a href="/contact">Reach out</a> with a few details and get a straight
        answer — no pressure, no upselling.
      </p>
    </Reveal>
  </div>
</section>

<style>
  .hero {
    padding-top: clamp(4rem, 10vw, 7rem);
    padding-bottom: clamp(3rem, 7vw, 5rem);
    background: radial-gradient(circle at 80% 20%, var(--accent-soft) 0%, transparent 50%),
      var(--bg);
  }

  .title {
    font-size: clamp(2.2rem, 5vw, 3.75rem);
    line-height: 1.05;
    letter-spacing: -0.02em;
    margin: 0 0 1rem 0;
    color: var(--ink);
  }

  .sub {
    font-size: clamp(1.05rem, 1.4vw, 1.2rem);
    color: var(--ink-soft);
    max-width: 58ch;
    margin: 0 0 0.5rem 0;
  }

  .fn-mark {
    font-size: 0.6em;
    vertical-align: super;
    color: var(--accent);
    line-height: 0;
  }

  .availability {
    font-size: 0.95rem;
    color: var(--ink-soft);
    max-width: 58ch;
    margin: 0 0 2rem 0;
  }

  .availability .fn-mark {
    margin-right: 0.25em;
  }

  .cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.85rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .feature {
    padding: 1.75rem;
    height: 100%;
  }

  .feature-icon {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: var(--accent-soft);
    color: var(--accent-hover);
    font-size: 1.15rem;
    margin-bottom: 1rem;
  }

  .feature h3 {
    font-size: 1.3rem;
    margin: 0 0 0.5rem 0;
  }

  .feature p {
    font-size: 0.98rem;
    line-height: 1.65;
    color: var(--ink-soft);
    margin: 0;
  }

  .steps {
    display: grid;
    gap: 1.25rem;
    max-width: 720px;
  }

  .step {
    display: grid;
    grid-template-columns: 46px 1fr;
    gap: 1.5rem;
    align-items: start;
    padding: 1.25rem 0;
    border-bottom: 1px solid var(--border);
  }

  .step:last-child {
    border-bottom: 0;
  }

  .step-num {
    font-family: var(--font-display);
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--accent);
  }

  .step h3 {
    font-size: 1.35rem;
    margin: 0 0 0.35rem 0;
  }

  .step p {
    font-size: 1rem;
    line-height: 1.65;
    color: var(--ink-soft);
    margin: 0;
    max-width: 58ch;
  }

  .include-list {
    display: grid;
    gap: 0.85rem;
    max-width: 640px;
  }

  .include-item {
    display: flex;
    align-items: flex-start;
    gap: 0.9rem;
    font-size: 1.05rem;
    color: var(--ink);
  }

  .check {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--accent);
    color: #fff8ef;
    font-size: 0.8rem;
    margin-top: 0.15rem;
  }

  .note {
    margin-top: 2.25rem;
    font-size: 0.95rem;
    color: var(--ink-soft);
    max-width: 58ch;
  }

  @media (max-width: 720px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
