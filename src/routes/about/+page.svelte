<script>
  import Reveal from '$lib/Reveal.svelte';
</script>

<svelte:head>
  <title>About — MemorySafe</title>
  <meta name="description" content="The story behind MemorySafe and the person who runs it." />
</svelte:head>

<section class="hero section">
  <div class="wrapper">
    <Reveal>
      <p class="eyebrow">About</p>
      <h1 class="title">The person behind your tapes.</h1>
      <p class="sub">
        A little history on MemorySafe — how it started, how every job gets done,
        and the gear that makes it possible.
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
            <span class="dropcap">M</span>emorySafe began as a personal frustration.
            I found a box of VHS tapes at my parents' house — birthday parties,
            school plays, a road trip from 1987. The magnetic tape was already
            showing signs of deterioration. The big chains quoted me hundreds of
            dollars and weeks of turnaround, with no guarantee of quality.
          </p>
          <p>
            I bought the equipment myself. Spent a few months learning the process
            properly — the chemistry of magnetic tape decay, the right capture
            hardware, how to get clean audio from a cassette recorded on a $15 boom
            box in 1994. Digitized my family's tapes, then my friends', then
            strangers who found me by word of mouth.
          </p>
          <p>
            That was the beginning. MemorySafe is still a one-person operation,
            and I intend to keep it that way. Every item that comes through my
            door is handled by me, personally.
          </p>

          <blockquote class="pull">
            "Your memories are in the hands of someone who genuinely cares —
            not a technician on a conveyor belt."
          </blockquote>

          <h2>How I work</h2>
          <p>
            Every job is processed by hand. No batch queues, no outsourcing. When
            your tapes arrive, I inspect each one before transfer — checking for
            mold, splices, and playback issues that could damage the tape or the
            equipment. If something needs attention, I'll let you know before I
            proceed.
          </p>
          <p>
            Transfers happen in real time: I'm present for every hour of footage.
            Audio is checked for sync drift. Film reels are cleaned before
            scanning. Photos are de-dusted. I care about output quality the same
            way I'd care about my own family's memories — because that's what
            these are.
          </p>

          <h2>The equipment</h2>
          <p>
            Professional-grade hardware throughout. VHS and camcorder tapes go
            through a time-base corrector before capture to eliminate dropouts
            and sync issues. Film reels are scanned frame-by-frame at 2K+
            resolution. Photos and slides are digitized on a dedicated flatbed
            scanner with calibrated color profiles.
          </p>
          <p>
            Files are delivered as high-quality MP4 (H.264), lossless TIFF, or
            high-res JPEG depending on the format — always at the best quality
            the source allows.
          </p>
        </article>
      </Reveal>

      <Reveal delay={140}>
        <aside class="side">
          <figure class="portrait">
            <div class="tape"></div>
            <img
              src="https://placehold.co/520x640/1e1a15/e8c9a8?text=Founder"
              alt="The founder of MemorySafe at work"
            />
          </figure>

          <div class="facts card">
            <h3>At a glance</h3>
            <dl>
              <div>
                <dt>Location</dt>
                <dd>[City, State] — local drop-off welcome</dd>
              </div>
              <div>
                <dt>Turnaround</dt>
                <dd>5–10 business days (rush available)</dd>
              </div>
              <div>
                <dt>Formats</dt>
                <dd>VHS, Betamax, 8mm, Super 8, Hi8, Mini DV, photos, slides, negatives, cassettes</dd>
              </div>
              <div>
                <dt>Established</dt>
                <dd>[Year]</dd>
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
    background:
      radial-gradient(circle at 80% 20%, var(--accent-soft) 0%, transparent 50%),
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
