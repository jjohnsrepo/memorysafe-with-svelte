<script>
  import Reveal from '$lib/Reveal.svelte';
  import { SITE_URL } from '$lib/site.js';
</script>

<svelte:head>
  <title>About — MemorySafe</title>
  <meta name="description" content="The story behind MemorySafe and the person who runs it." />
  <link rel="canonical" href="{SITE_URL}/about" />
  <meta property="og:title" content="About — MemorySafe" />
  <meta
    property="og:description"
    content="The story behind MemorySafe and the person who runs it."
  />
  <meta property="og:url" content="{SITE_URL}/about" />
  <meta name="twitter:title" content="About — MemorySafe" />
  <meta
    name="twitter:description"
    content="The story behind MemorySafe and the person who runs it."
  />
</svelte:head>

<section class="hero section">
  <div class="wrapper">
    <Reveal>
      <p class="eyebrow">About</p>
      <h1 class="title">The person behind your tapes.</h1>
      <p class="sub">
        A little history on MemorySafe — how it started, how every job gets done, and the gear that
        makes it possible.
      </p>
    </Reveal>
  </div>
</section>

<section class="section section--alt">
  <div class="wrapper">
    <div class="grid">
      <Reveal>
        <article class="article">
          <h2>How it started</h2>
          <p class="drop">
            <span class="dropcap">M</span>emorySafe began as a personal curiosity. I found a box of
            my parents' old camcorder tapes and began watching them. I noticed significant wear on
            some of them and realized they did not have much longer before they were gone forever.
          </p>
          <p>
            So I started learning how to digitize them. It was a slow process at first, but I picked
            it up fast. As I discovered more media formats buried at the bottom of the closet, I did
            those too. I soon had hours of footage that would have been lost if I had not rescued
            them.
          </p>

          <h2>How I work</h2>
          <p>
            Every job is processed by hand. No batch queues, no outsourcing. When your tapes arrive,
            I inspect each one before transfer — checking for mold, splices, and playback issues
            that could damage the tape or the equipment.<sup class="fn-mark">*</sup> If something needs
            attention, I'll let you know before I proceed.
          </p>

          <p>
            Transfers happen in real time: I'm present for every hour of footage. I care about
            output quality the same way I'd care about my own family's memories — because that's
            what these are.
          </p>

          <p class="footnote">
            <sup class="fn-mark">*</sup>While every effort is made to ensure no media is damaged or
            lost, accidents happen &mdash; a risk inherent to working with old media. In the event
            of an accident, I&rsquo;ll communicate with you and we can discuss an appropriate
            response.
          </p>

          <h2>The equipment</h2>
          <p>
            I use trusted hardware throughout the process. Every media player is checked for dust
            before your tapes are inserted, all footage is stored on local hard drives to ensure
            data integrity, and every tape is handled by hand to ensure quality care.
          </p>
        </article>
      </Reveal>

      <Reveal delay={140}>
        <aside class="side">
          <figure class="portrait">
            <div class="tape" />
            <img src="about_photo.jpeg" alt="The founder of MemorySafe at work" />
          </figure>

          <div class="facts card">
            <h3>At a glance</h3>
            <dl>
              <div>
                <dt>Location</dt>
                <dd>Buena Vista, VA — local drop-off welcome</dd>
              </div>
              <div>
                <dt>Turnaround</dt>
                <dd>5-10 business days</dd>
              </div>
              <div>
                <dt>Formats</dt>
                <dd>VHS, VHS-C, CD/DVD</dd>
              </div>
              <div>
                <dt>Established</dt>
                <dd>2025</dd>
              </div>
            </dl>
            <a href="/contact" class="btn btn-primary">Get a quote →</a>
          </div>
        </aside>
      </Reveal>
    </div>
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
    margin: 0;
  }

  .grid {
    display: grid;
    grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
    gap: clamp(2.5rem, 5vw, 5rem);
    align-items: start;
  }

  .article h2 {
    font-size: 1.75rem;
    margin: 2.5rem 0 0.85rem 0;
    font-weight: 500;
  }

  .article h2:first-child {
    margin-top: 0;
  }

  .article p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--ink-soft);
    margin: 0 0 1.15rem 0;
    max-width: 66ch;
  }

  .fn-mark {
    font-size: 0.6em;
    vertical-align: super;
    color: var(--accent);
    line-height: 0;
  }

  .article .footnote {
    font-size: 0.75rem;
    line-height: 1.55;
    color: var(--ink-mute);
    margin: 1.75rem 0 0 0;
    padding-top: 1rem;
    border-top: 1px solid var(--border);
    max-width: 66ch;
  }

  .footnote .fn-mark {
    margin-right: 0.25em;
  }

  .dropcap {
    float: left;
    font-family: var(--font-display);
    font-size: 3.8rem;
    line-height: 0.9;
    padding: 0.15em 0.12em 0 0;
    color: var(--accent);
    font-weight: 500;
  }

  .pull {
    margin: 2rem 0;
    padding: 0 0 0 1.5rem;
    border-left: 3px solid var(--accent);
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.4rem;
    line-height: 1.45;
    color: var(--ink);
    max-width: 58ch;
  }

  .side {
    position: sticky;
    top: 100px;
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  }

  .portrait {
    position: relative;
    margin: 0;
    background: var(--bg);
    padding: 12px 12px 12px;
    border-radius: 4px;
    box-shadow: var(--shadow-lg);
    transform: rotate(-1.2deg);
  }

  .tape {
    position: absolute;
    top: -10px;
    left: 30%;
    width: 80px;
    height: 22px;
    background: rgba(200, 159, 60, 0.5);
    transform: rotate(-4deg);
  }

  .portrait img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
  }

  .facts {
    padding: 1.5rem 1.5rem 1.75rem;
    background: var(--bg);
  }

  .facts h3 {
    font-size: 0.82rem;
    font-family: var(--font-body);
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ink-mute);
    margin: 0 0 1rem 0;
  }

  .facts dl {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    margin: 0 0 1.5rem 0;
  }

  .facts dt {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 0.25rem;
  }

  .facts dd {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.5;
    color: var(--ink);
  }

  .facts .btn {
    display: inline-flex;
  }

  @media (max-width: 960px) {
    .grid {
      grid-template-columns: 1fr;
    }
    .side {
      position: static;
      max-width: 420px;
    }
  }
</style>
