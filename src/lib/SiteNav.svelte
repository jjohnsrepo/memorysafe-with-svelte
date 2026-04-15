<script>
  import { onMount } from 'svelte';

  // Shrink starts at 0px scroll, locks in (stops shrinking) at 80px scroll.
  // Padding goes from 12px → 6px, logo from 100px → 60px.
  const SCROLL_MAX = 80;

  let scrollY = 0;
  let ratio = 0; // 0 = full size, 1 = compact

  function onScroll() {
    scrollY = window.scrollY;
    ratio = Math.min(scrollY / SCROLL_MAX, 1);
  }

  onMount(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  $: padV     = 12 - ratio * 6;          // 12px → 6px
  $: logoSize = 100 - ratio * 40;        // 100px → 60px
  $: fontSize = 1.5 - ratio * 0.35;      // ~h1 default → smaller (rem)
</script>

<nav style="padding: {padV}px 24px;">
  <a href="/" class="logo-group" aria-label="MemorySafe — go to home page">
    <img src="/drawing.svg" alt="MemorySafe logo" class="logo-img" width="{logoSize}" style="width:{logoSize}px;" />
    <h1 style="font-size:{fontSize}rem;">MemorySafe</h1>
  </a>

  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About me</a></li>
    <li><a href="/contact">Contact Now!</a></li>
  </ul>
</nav>

<style>
  nav {
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(255, 222, 171);
    width: 100%;
    flex-shrink: 0;
    transition: padding 0.1s ease, box-shadow 0.2s ease;
    box-shadow: 0 1px 0 rgba(0,0,0,0.08);
  }

  /* Logo + wordmark — now a home link */
  .logo-group {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: inherit;
    line-height: 1;
  }

  .logo-group:hover {
    text-decoration: none;
  }

  .logo-img {
    display: block;
    height: auto;
    transition: width 0.1s ease;
  }

  .logo-group h1 {
    margin: 0;
    line-height: 1;
    padding: 0;
    transition: font-size 0.1s ease;
  }

  /* Nav links */
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 20px;
    margin: 0;
    padding: 0;
    align-items: center;
  }

  ul a {
    cursor: pointer;
  }

  ul a:hover {
    text-decoration: underline;
  }

  /* ── Mobile ── */
  @media (max-width: 600px) {
    nav {
      flex-wrap: wrap;
      padding-left: 16px !important;
      padding-right: 16px !important;
      gap: 10px;
    }
  }
</style>
