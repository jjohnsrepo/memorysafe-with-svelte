<script>
  import '../app.css';
  import SiteNav from '$lib/SiteNav.svelte';
  import SiteFooter from '$lib/SiteFooter.svelte';
</script>

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
