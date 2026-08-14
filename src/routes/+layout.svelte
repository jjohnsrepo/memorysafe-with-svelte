<script>
  import '../app.css';
  import SiteNav from '$lib/SiteNav.svelte';
  import SiteFooter from '$lib/SiteFooter.svelte';
  import { SITE_NAME } from '$lib/site.js';
</script>

<svelte:head>
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={SITE_NAME} />
  <meta name="twitter:card" content="summary" />
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
