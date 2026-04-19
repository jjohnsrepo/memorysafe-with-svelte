<script>
  import Reveal from '$lib/Reveal.svelte';

  const services = [
    {
      title: 'VHS',
      desc: 'Home recordings from the 70s through the 90s. Relive your most precious memories.',
      img: 'https://www.hightechrecyclingmi.com/wp-content/uploads/sites/124/2023/02/AdobeStock_506350193-680x298.jpeg',
      alt: 'Stack of VHS tapes',
      tag: 'Tapes',
    },
    {
      title: 'VHS-C',
      desc: 'Bring your camcorder footage back to life.',
      tag: 'Tapes',
      img: 'https://lirp.cdn-website.com/ec5bb42f/dms3rep/multi/opt/How-Big-Are-VHS-C-Tapes-1920w.jpg',
      alt: 'VHS-C camcorder tapes',
    },
    {
      title: 'CD/DVD',
      desc: 'Convert your old CDs into a modern playable format you can take anywhere. DVD-R included.',
      tag: 'CD',
      img: 'https://recordhead.biz/wp-content/uploads/2021/04/dvd-2418366_640-300x2001-1.jpg',
      alt: 'Stack of CDs and DVDs',
    },
    /* {
      title: '8mm & Super 8 Film',
      desc: 'Frame-by-frame transfer of classic reels from the 1950s–1980s. Color and black & white.',
      img: 'https://placehold.co/640x420/55493b/fbf6ec?text=8mm+%26+Super+8',
      alt: '8mm and Super 8 film reels',
      tag: 'Film',
    },
    {
      title: 'Photographs & Slides',
      desc: 'Individual prints, shoeboxes of photos, and 35mm carousels — scanned at high resolution.',
      img: 'https://placehold.co/640x420/b85538/fbf6ec?text=Photos+%26+Slides',
      alt: 'Photographs and 35mm slides',
      tag: 'Print',
    },
    {
      title: 'Audio Cassettes',
      desc: 'Mixtapes, recorded conversations, voice memos. Transferred to lossless audio files.',
      img: 'https://placehold.co/640x420/c89f3c/1e1a15?text=Audio',
      alt: 'Audio cassette tapes',
      tag: 'Audio',
    },
    {
      title: 'Hi8 · Video8 · Mini DV',
      desc: 'Camcorder tapes from the 90s and 2000s. Full-resolution digital, no generational loss.',
      img: 'https://placehold.co/640x420/7b8a6a/fbf6ec?text=Camcorder',
      alt: 'Hi8 and Mini DV camcorder tapes',
      tag: 'Video',
    },
    {
      title: 'Film Negatives',
      desc: '35mm, 120 medium format, and APS negatives scanned to high-resolution digital files.',
      img: 'https://placehold.co/640x420/e8c9a8/55493b?text=Negatives',
      alt: '35mm film negatives',
      tag: 'Film',
    },*/
  ];
</script>

<section id="services" class="section section--alt">
  <div class="wrapper">
    <Reveal>
      <p class="eyebrow">What I digitize</p>
      <h2 class="section-title">A growing selection of formats.</h2>
      <p class="section-sub">
        As a new studio, I continue to grow the number of legacy formats I support. New formats
        are added as often as new hardware is acquired.
      </p>
    </Reveal>

    <div class="grid">
      {#each services as s, i}
        <Reveal delay={i * 70}>
          <article class="service card card--hover">
            <div class="media">
              <img src={s.img} alt={s.alt} loading="lazy" />
              <span class="tag">{s.tag}</span>
            </div>
            <div class="body">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </article>
        </Reveal>
      {/each}
    </div>

    <Reveal delay={180}>
      <p class="foot">
        Have some old tech you want to donate? Let me know <a href="#contact">here!</a>
      </p>
    </Reveal>
  </div>
</section>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  :global(#services .grid > .reveal) {
    display: flex;
    flex-direction: column;
  }

  .service {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: var(--bg);
  }

  .media {
    position: relative;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: var(--bg-alt);
  }

  .media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 700ms var(--ease);
  }

  .service:hover .media img {
    transform: scale(1.04);
  }

  .tag {
    position: absolute;
    top: 14px;
    left: 14px;
    background: rgba(251, 246, 236, 0.92);
    color: var(--ink);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.35em 0.8em;
    border-radius: 999px;
    backdrop-filter: blur(4px);
  }

  .body {
    padding: 1.4rem 1.5rem 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;
  }

  .body h3 {
    font-size: 1.35rem;
    font-family: var(--font-display);
    font-weight: 500;
    margin: 0;
  }

  .body p {
    font-size: 0.98rem;
    line-height: 1.6;
    color: var(--ink-soft);
    margin: 0;
  }

  .foot {
    margin: 3rem 0 0;
    text-align: center;
    color: var(--ink-soft);
    font-size: 1rem;
  }

  .foot a {
    font-weight: 600;
  }

  @media (max-width: 960px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
