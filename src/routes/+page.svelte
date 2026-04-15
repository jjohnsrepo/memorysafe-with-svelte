<script>
  import SiteNav from '$lib/SiteNav.svelte';
  import ServicesSection from '$lib/ServicesSection.svelte';
  import HowItWorks from '$lib/HowItWorks.svelte';
  import PricingSection from '$lib/PricingSection.svelte';
  import AboutSection from '$lib/AboutSection.svelte';
  import ContactSection from '$lib/ContactSection.svelte';
</script>

<svelte:head>
  <title>MemorySafe — Digitization That Cares</title>
  <meta name="description" content="The friendly, independent alternative to big box digitization. Unbeatable turnaround, service, and price." />
</svelte:head>

<!-- First viewport: nav + hero -->
<div class="hero-wrap">
  <SiteNav />

  <section class="hero">
    <div class="main-left">
      <p class="headline">The <strong>best</strong> alternative to big box digitization</p>
      <ul class="pitch-list">
        <li><strong>Unbeatable</strong> turnaround times</li>
        <li><strong>Unbeatable</strong> customer service</li>
        <li><strong>Unbeatable</strong> price</li>
      </ul>
    </div>

    <div class="main-right">
      <p class="tagline">Bring your memories to life</p>
      <img
        src="/memorysafe.gif"
        alt="A slideshow of digitized home movies and family photos"
        class="hero-gif"
      />
      <a href="#contact" class="pill-btn">
        Contact now! <span aria-hidden="true">↓</span>
      </a>
    </div>
  </section>
</div>

<!-- Scrollable sections -->
<ServicesSection />
<HowItWorks />
<PricingSection />
<AboutSection />
<ContactSection />

<footer class="site-footer">
  <p>&copy; {new Date().getFullYear()} MemorySafe. All rights reserved.</p>
</footer>

<style>
  /* ── Hero viewport ── */
  .hero-wrap {
    display: flex;
    flex-direction: column;
    height: 100vh;
    height: 100dvh;
  }

  .hero {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    padding: 3% 8% 3% 20%;
    overflow: hidden;
  }

  /* ── Left column ── */
  .main-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
  }

  .headline {
    font-size: 4.5rem;
    margin: 0;
    line-height: 1.15;
  }

  .pitch-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    font-size: 2rem;
    padding: 0;
    margin: 0;
  }

  /* ── Right column ── */
  .main-right {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    gap: 1.5rem;
  }

  .tagline {
    font-size: 2.5rem;
    text-align: center;
    margin: 0;
    flex-shrink: 0;
  }

  .hero-gif {
    flex: 1;
    min-height: 0;
    object-fit: contain;
    width: 100%;
  }

  .pill-btn {
    flex-shrink: 0;
    display: inline-block;
    font-size: 2rem;
    background: blanchedalmond;
    border: 2px solid black;
    border-radius: 999px;
    padding: 0.4em 1.8em;
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

  /* ── Tablet ── */
  @media (max-width: 900px) {
    .hero-wrap {
      height: auto;
      min-height: 100vh;
      min-height: 100dvh;
    }

    .hero {
      flex-direction: column;
      padding: 5% 5%;
      overflow: visible;
      gap: 2rem;
    }

    .headline {
      font-size: 2.75rem;
    }

    .pitch-list {
      font-size: 1.25rem;
    }

    .hero-gif {
      flex: none;
      max-height: 40vh;
      width: auto;
    }
  }

  /* ── Mobile ── */
  @media (max-width: 600px) {
    .tagline {
      font-size: 1.75rem;
    }

    .pill-btn {
      width: 100%;
      text-align: center;
    }
  }
</style>
