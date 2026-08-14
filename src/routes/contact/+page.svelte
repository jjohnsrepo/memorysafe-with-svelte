<script>
  import ContactSection from '$lib/ContactSection.svelte';
  import { SITE_URL } from '$lib/site.js';
</script>

<svelte:head>
  <title>Contact — MemorySafe</title>
  <meta
    name="description"
    content="Get in touch with MemorySafe to start your digitization project."
  />
  <link rel="canonical" href="{SITE_URL}/contact" />
  <meta property="og:title" content="Contact — MemorySafe" />
  <meta
    property="og:description"
    content="Get in touch with MemorySafe to start your digitization project."
  />
  <meta property="og:url" content="{SITE_URL}/contact" />
  <meta name="twitter:title" content="Contact — MemorySafe" />
  <meta
    name="twitter:description"
    content="Get in touch with MemorySafe to start your digitization project."
  />
</svelte:head>

<section class="hero">
  <div class="wrapper">
    <p class="eyebrow">Contact</p>
    <h1 class="title">Let's talk about your memories.</h1>
    <p class="sub">
      Tell me what you have. I'll get back to you within one business day with a quote and next
      steps.
    </p>
  </div>
</section>

<ContactSection heading="Send a message" sub="I read every note personally." />

<style>
  .hero {
    padding: clamp(4rem, 9vw, 6.5rem) 0 clamp(2rem, 4vw, 3.5rem);
    background: radial-gradient(circle at 85% 15%, var(--accent-soft) 0%, transparent 50%),
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
</style>
