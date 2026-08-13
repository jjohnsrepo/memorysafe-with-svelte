<script>
  import Reveal from '$lib/Reveal.svelte';
</script>

<section id="about" class="section">
  <div class="wrapper">
    <div class="layout">
      <Reveal>
        <div class="text">
          <p class="eyebrow">About MemorySafe</p>
          <h2 class="section-title">A one-person studio, on purpose.</h2>

          <p class="lede">
            MemorySafe started with a box of VHS tapes at my parents' house &mdash;
            birthdays, Christmases, vacations &mdash; all slowly deteriorating in a
            closet. 
          </p>
          <p>
            So I bought the equipment and went to work. I soon realized that I was not the only
            family with irreplaceable memories sitting on aging tapes. That is why I started
            MemorySafe: to make sure others don't lose the precious memories they worked so
            hard to capture.
          </p>
          <p>
            Every job is handled personally &mdash; no technicians on a conveyor
            belt, no outsourcing. Your memories are kept by someone who genuinely
            cares about getting them right.<sup class="fn-mark">*</sup>
          </p>
          <a href="/about" class="btn btn-ghost">Read the full story →</a>

          <p class="footnote">
            <sup class="fn-mark">*</sup>While every effort is made to ensure no
            media is damaged or lost, accidents happen &mdash; a risk inherent to
            working with old media. In the event of an accident, I&rsquo;ll
            communicate with you and we can discuss an appropriate response.
          </p>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div class="media">
          <figure class="portrait-frame">
            <div class="tape-strip"></div>
            <img
              src="founder.jpeg"
              alt="Founder of MemorySafe"
            />
            <figcaption>
              <span class="signature">Justin Johnson - Founder of MemorySafe</span>
            </figcaption>
          </figure>

          <aside class="stats">
            <div>
              <span class="num">7</span>
              <span class="lbl">day avg. turnaround</span>
            </div>
            <div>
              <span class="num">150+</span>
              <span class="lbl">hours digitized</span>
            </div>
            <div>
              <span class="num">100%</span>
              <span class="lbl">personally handled</span>
            </div>
          </aside>
        </div>
      </Reveal>
    </div>
  </div>
</section>

<style>
  .layout {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
    gap: clamp(2.5rem, 5vw, 5rem);
    align-items: center;
  }

  .text .lede {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.45rem;
    line-height: 1.4;
    color: var(--ink);
    margin: 0 0 1.4rem 0;
    max-width: 36ch;
  }

  .text p {
    font-size: 1.02rem;
    line-height: 1.75;
    color: var(--ink-soft);
    max-width: 58ch;
  }

  .text .btn {
    margin-top: 1rem;
  }

  .fn-mark {
    font-size: 0.6em;
    vertical-align: super;
    color: var(--accent);
    line-height: 0
  }

  .text .footnote {
    font-size: 0.72rem;
    line-height: 1.55;
    color: var(--ink-mute);
    font-weight: 400;
    margin: 1.75rem 0 0 0;
    padding-top: 1rem;
    border-top: 1px solid var(--border);
    max-width: 58ch;
  }

  .footnote .fn-mark {
    margin-right: 0.2em;
  }

  .media {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }

  .portrait-frame {
    position: relative;
    background: var(--bg);
    padding: 14px 14px 56px;
    border-radius: 4px;
    margin: 0;
    max-width: 380px;
    width: 100%;
    transform: rotate(-1.5deg);
    box-shadow: var(--shadow-lg);
  }

  .tape-strip {
    position: absolute;
    top: -10px;
    right: 18px;
    width: 80px;
    height: 22px;
    background: rgba(200, 159, 60, 0.55);
    border: 1px solid rgba(200, 159, 60, 0.3);
    transform: rotate(8deg);
  }

  .portrait-frame img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    display: block;
  }

  figcaption {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 14px;
    text-align: center;
  }

  .signature {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1rem;
    color: var(--ink-soft);
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    width: 100%;
    max-width: 440px;
  }

  .stats > div {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 0.9rem 0.75rem;
    text-align: center;
  }

  .stats .num {
    display: block;
    font-family: var(--font-display);
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--accent);
    line-height: 1.1;
  }

  .stats .lbl {
    display: block;
    margin-top: 0.25rem;
    font-size: 0.75rem;
    color: var(--ink-soft);
    line-height: 1.3;
  }

  @media (max-width: 880px) {
    .layout {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }
</style>
