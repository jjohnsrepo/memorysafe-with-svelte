<script>
  import '../app.css';
  import SiteNav from '$lib/SiteNav.svelte';
  import SiteFooter from '$lib/SiteFooter.svelte';
  import { SITE_NAME, SITE_URL } from '$lib/site.js';
</script>

<svelte:head>
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:image" content="{SITE_URL}/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="MemorySafe — Digitization That Cares" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="{SITE_URL}/og-image.png" />
  <meta name="twitter:image:alt" content="MemorySafe — Digitization That Cares" />
</svelte:head>

<SiteNav />

<main>
  <slot />
</main>

<SiteFooter />

<style>
  main {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>
