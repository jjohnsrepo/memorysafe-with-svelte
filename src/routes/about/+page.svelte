<script>
  import SiteNav from '$lib/SiteNav.svelte';
</script>

<svelte:head>
  <title>About — MemorySafe</title>
  <meta name="description" content="The story behind MemorySafe and the person who runs it." />
</svelte:head>

<SiteNav />

<div class="page">
  <div class="hero-band">
    <div class="wrapper">
      <h1>About Me</h1>
      <p class="hero-sub">
        A little history on MemorySafe, how it started, and how every job gets done.
      </p>
    </div>
  </div>

  <div class="wrapper main-content">
    <div class="two-col">
      <div class="text-col">
        <h2>How It Started</h2>
        <p>
          MemorySafe began as a personal frustration. I found a box of VHS tapes at my parents'
          house — birthday parties, school plays, a road trip from 1987. The magnetic tape was
          already showing signs of deterioration. The big chains quoted me hundreds of dollars and
          weeks of turnaround time, with no guarantee of quality.
        </p>
        <p>
          I bought the equipment myself. Spent a few months learning the process properly —
          the chemistry of magnetic tape decay, the right capture hardware, how to get clean audio
          from a cassette recorded on a $15 boom box in 1994. Digitized my family's tapes, then
          my friends', then strangers who found me by word of mouth.
        </p>
        <p>
          That was the beginning. MemorySafe is still a one-person operation, and I intend to keep
          it that way. Every item that comes through my door is handled by me, personally.
        </p>

        <h2>How I Work</h2>
        <p>
          I process every job by hand. No batch queues. No outsourcing. When your tapes arrive,
          I inspect each one before transfer — checking for mold, splices, and playback issues
          that could damage the tape or the equipment. If something needs attention, I'll let you
          know before I proceed.
        </p>
        <p>
          Transfers happen in real time: I'm present for every hour of footage. Audio is checked
          for sync drift. Film reels are cleaned before scanning. Photos are de-dusted. I care
          about output quality the same way I'd care about my own family's memories — because that's
          what these are.
        </p>

        <h2>The Equipment</h2>
        <p>
          I use professional-grade hardware throughout. VHS and camcorder tapes go through a
          time base corrector before capture to eliminate dropouts and sync issues. Film reels are
          scanned frame-by-frame at 2K+ resolution. Photos and slides are digitized on a dedicated
          flatbed scanner with calibrated color profiles.
        </p>
        <p>
          Files are delivered as high-quality MP4 (H.264), lossless TIFF, or high-res JPEG
          depending on the format — always at the best quality the source allows.
        </p>
      </div>

      <div class="media-col">
        <img
          src="https://placehold.co/440x560/FFDEAB/7A5C1E?text=Founder+Photo"
          alt="The founder of MemorySafe at work"
          class="portrait"
        />

        <div class="quick-facts">
          <h3>At a Glance</h3>
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
              <dt>Formats handled</dt>
              <dd>VHS, Betamax, 8mm, Super 8, Hi8, Mini DV, photos, slides, negatives, cassettes</dd>
            </div>
            <div>
              <dt>In operation since</dt>
              <dd>[Year]</dd>
            </div>
          </dl>

          <a href="/#contact" class="pill-btn">Get a quote ↓</a>
        </div>
      </div>
    </div>
  </div>
</div>

<footer class="site-footer">
  <p>&copy; {new Date().getFullYear()} MemorySafe. All rights reserved.</p>
</footer>

<style>
  .page {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  /* ── Hero band ── */
  .hero-band {
    background: blanchedalmond;
    padding: 4rem 0 3rem;
  }

  .wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  h1 {
    font-size: 3.5rem;
    margin: 0 0 0.5rem 0;
  }

  .hero-sub {
    font-size: 1.1rem;
    margin: 0;
    opacity: 0.7;
  }

  /* ── Main content ── */
  .main-content {
    padding-top: 4rem;
    padding-bottom: 5rem;
  }

  .two-col {
    display: grid;
    grid-template-columns: 1fr 380px;
    gap: 4rem;
    align-items: start;
  }

  /* ── Text column ── */
  .text-col h2 {
    font-size: 1.6rem;
    margin: 2.5rem 0 0.75rem 0;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }

  .text-col h2:first-child {
    margin-top: 0;
  }

  .text-col p {
    font-size: 1.05rem;
    line-height: 1.8;
    margin: 0 0 1rem 0;
    opacity: 0.85;
  }

  /* ── Media column ── */
  .portrait {
    width: 100%;
    display: block;
    border: 1px solid rgba(0, 0, 0, 0.15);
    margin-bottom: 2rem;
  }

  .quick-facts {
    border: 1px solid rgba(0, 0, 0, 0.15);
    padding: 1.5rem;
    background: rgb(255, 222, 171);
  }

  .quick-facts h3 {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin: 0 0 1.25rem 0;
    opacity: 0.6;
  }

  dl {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 0 1.75rem 0;
  }

  dt {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    opacity: 0.55;
    margin-bottom: 0.2rem;
  }

  dd {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.55;
  }

  .pill-btn {
    display: block;
    text-align: center;
    font-size: 1.1rem;
    background: blanchedalmond;
    border: 2px solid black;
    border-radius: 999px;
    padding: 0.5em 1.5em;
    cursor: pointer;
    color: black;
    text-decoration: none;
  }

  .pill-btn:hover {
    background: #f0d898;
    text-decoration: none;
  }

  /* ── Footer ── */
  .site-footer {
    background: rgb(255, 222, 171);
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    text-align: center;
    padding: 1.5rem;
    font-size: 0.85rem;
    opacity: 0.65;
  }

  .site-footer p {
    margin: 0;
  }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .two-col {
      grid-template-columns: 1fr;
    }

    .media-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      align-items: start;
    }

    .portrait {
      margin-bottom: 0;
    }

    h1 { font-size: 2.5rem; }
  }

  @media (max-width: 600px) {
    .media-col {
      grid-template-columns: 1fr;
    }

    h1 { font-size: 2rem; }

    .text-col h2 { font-size: 1.35rem; }
  }
</style>
