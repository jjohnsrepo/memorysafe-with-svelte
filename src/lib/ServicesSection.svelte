<script>
  const services = [
    {
      title: 'VHS & Betamax',
      desc: 'Home recordings from the 70s through the 90s. Standard play, long play — we handle them all.',
      img: 'https://placehold.co/400x240/FFDEAB/7A5C1E?text=VHS+%26+Betamax',
      alt: 'Stack of VHS and Betamax tapes',
    },
    {
      title: '8mm & Super 8 Film',
      desc: 'Frame-by-frame transfer of classic reels from the 1950s through the 1980s. Color and B&W.',
      img: 'https://placehold.co/400x240/FFDEAB/7A5C1E?text=8mm+%26+Super+8',
      alt: '8mm and Super 8 film reels',
    },
    {
      title: 'Photographs & Slides',
      desc: 'Individual prints, shoeboxes of photos, and 35mm slide carousels — all scanned at high resolution.',
      img: 'https://placehold.co/400x240/FFDEAB/7A5C1E?text=Photos+%26+Slides',
      alt: 'Photographs and 35mm slides',
    },
    {
      title: 'Audio Cassettes',
      desc: 'Mixtapes, recorded conversations, voice memos. Transferred to lossless audio files.',
      img: 'https://placehold.co/400x240/FFDEAB/7A5C1E?text=Audio+Cassettes',
      alt: 'Audio cassette tapes',
    },
    {
      title: 'Hi8, Video8 & Mini DV',
      desc: 'Camcorder tapes from the 90s and 2000s. Full-resolution digital transfer, no generational loss.',
      img: 'https://placehold.co/400x240/FFDEAB/7A5C1E?text=Camcorder+Tapes',
      alt: 'Hi8 and Mini DV camcorder tapes',
    },
    {
      title: 'Film Negatives',
      desc: '35mm, 120 medium format, and APS negatives scanned to high-resolution digital files.',
      img: 'https://placehold.co/400x240/FFDEAB/7A5C1E?text=Film+Negatives',
      alt: '35mm film negatives on a light table',
    },
  ];
</script>

<section id="services">
  <div class="wrapper">
    <h2>What We Digitize</h2>
    <p class="sub">All major analog formats. If yours isn't listed, just ask.</p>
    <div class="grid">
      {#each services as s}
        <article class="card">
          <img src={s.img} alt={s.alt} />
          <div class="card-body">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    background: rgb(255, 222, 171);
    border-top: 1px solid rgba(0, 0, 0, 0.12);
  }

  .wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding: 5rem 2rem;
  }

  h2 {
    font-size: 2.75rem;
    margin: 0 0 0.4rem 0;
  }

  .sub {
    font-size: 1.05rem;
    margin: 0 0 3rem 0;
    opacity: 0.7;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .card {
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background: blanchedalmond;
  }

  .card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .card-body {
    padding: 1.25rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .card-body h3 {
    margin: 0;
    font-size: 1.2rem;
  }

  .card-body p {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.65;
    opacity: 0.8;
  }

  @media (max-width: 900px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }

    h2 { font-size: 2.1rem; }
  }

  @media (max-width: 560px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
