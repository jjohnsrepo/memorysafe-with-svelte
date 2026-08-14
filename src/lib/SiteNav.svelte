<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { page } from '$app/stores';

  let scrolled = false;
  let menuOpen = false;

  function onScroll() {
    scrolled = window.scrollY > 24;
  }

  function closeMenu() {
    menuOpen = false;
  }

  onMount(() => {
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  $: currentPath = $page.url?.pathname ?? '/';
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/media-server', label: 'Media-Server'},
  ];
</script>

<nav class:scrolled aria-label="Primary">
  <div class="nav-inner">
    <a href="/" class="brand" on:click={closeMenu} aria-label="MemorySafe — home">
      <img src="/logo.svg" class="logo" aria-hidden="true" />
      <span class="wordmark">MemorySafe</span>
    </a>

    <ul class="links">
      {#each links as link}
        <li>
          <a
            href={link.href}
            class:active={currentPath === link.href}
            on:click={closeMenu}
          >
            {link.label}
          </a>
        </li>
      {/each}
    </ul>

    <a href="/contact" class="cta btn btn-primary" on:click={closeMenu}>
      Start a project
    </a>

    <button
      class="hamburger"
      class:open={menuOpen}
      on:click={() => (menuOpen = !menuOpen)}
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={menuOpen}
    >
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

{#if menuOpen}
  <button
    type="button"
    class="drawer-backdrop"
    on:click={closeMenu}
    aria-label="Close menu"
    transition:fly={{ duration: 180 }}
  ></button>
  <aside class="drawer" transition:fly={{ x: 320, duration: 260 }}>
    <ul>
      {#each links as link}
        <li>
          <a
            href={link.href}
            class:active={currentPath === link.href}
            on:click={closeMenu}
          >{link.label}</a>
        </li>
      {/each}
      <li>
        <a
          href="/contact"
          class="btn btn-primary btn-lg drawer-cta"
          on:click={closeMenu}
        >Start a project</a>
      </li>
    </ul>
  </aside>
{/if}

<style>
  nav {
    position: sticky;
    top: 0;
    z-index: 100;
    width: 100%;
    padding: 0 var(--section-pad-x);
    background: transparent;
    transition: background var(--dur) var(--ease),
      box-shadow var(--dur) var(--ease),
      backdrop-filter var(--dur) var(--ease),
      padding var(--dur) var(--ease);
  }

  nav.scrolled {
    background: rgba(251, 246, 236, 0.9);
    backdrop-filter: saturate(1.1);
    -webkit-backdrop-filter: saturate(1.1);
    box-shadow: 0 1px 0 var(--border), 0 8px 24px rgba(30, 26, 21, 0.05);
  }

  .nav-inner {
    max-width: var(--content-max);
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 0.9rem 0;
    transition: padding var(--dur) var(--ease);
  }

  nav.scrolled .nav-inner {
    padding: 0.55rem 0;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    color: var(--ink);
  }

  .brand:hover {
    color: var(--ink);
    text-decoration: none;
  }

  .logo {
    width: 42px;
    height: 42px;
    transition: width var(--dur) var(--ease), height var(--dur) var(--ease);
  }

  nav.scrolled .logo {
    width: 34px;
    height: 34px;
  }

  .wordmark {
    font-family: Courier, "Courier New", var(--font-mono);
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    color: var(--ink);
  }

  .links {
    list-style: none;
    display: flex;
    gap: 0.35rem;
    margin: 0 auto 0 1rem;
    padding: 0;
  }

  .links a {
    position: relative;
    display: block;
    padding: 0.55rem 0.9rem;
    font-size: 0.97rem;
    font-weight: 500;
    color: var(--ink-soft);
    border-radius: 999px;
    text-decoration: none;
    transition: color var(--dur-fast) var(--ease),
      background var(--dur-fast) var(--ease);
  }

  .links a:hover {
    color: var(--ink);
    background: rgba(30, 26, 21, 0.05);
    text-decoration: none;
  }

  .links a.active {
    color: var(--ink);
  }

  .links a.active::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 2px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--accent);
    transform: translateX(-50%);
  }

  .cta {
    padding: 0.65em 1.2em;
    font-size: 0.92rem;
  }

  .hamburger {
    display: none;
    background: transparent;
    border: 1px solid var(--border);
    border-radius: 10px;
    width: 42px;
    height: 42px;
    padding: 0;
    cursor: pointer;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  .hamburger span {
    display: block;
    width: 18px;
    height: 2px;
    background: var(--ink);
    border-radius: 2px;
    transition: transform var(--dur-fast) var(--ease),
      opacity var(--dur-fast) var(--ease);
  }

  .hamburger.open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }
  .hamburger.open span:nth-child(2) {
    opacity: 0;
  }
  .hamburger.open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  /* Drawer */
  .drawer-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(30, 26, 21, 0.35);
    backdrop-filter: blur(2px);
    z-index: 98;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  .drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: min(320px, 85vw);
    background: var(--bg);
    border-left: 1px solid var(--border);
    z-index: 99;
    padding: 5rem 1.75rem 2rem;
    box-shadow: var(--shadow-lg);
  }

  .drawer ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .drawer a {
    display: block;
    padding: 0.85rem 1rem;
    font-family: var(--font-display);
    font-size: 1.4rem;
    color: var(--ink);
    text-decoration: none;
    border-radius: var(--radius);
    transition: background var(--dur-fast) var(--ease);
  }

  .drawer a:hover {
    background: var(--bg-alt);
    text-decoration: none;
  }

  .drawer a.active {
    color: var(--accent);
  }

  .drawer-cta {
    margin-top: 1rem;
    text-align: center;
    font-family: var(--font-body);
    font-size: 1rem;
  }

  @media (max-width: 880px) {
    .links, .cta {
      display: none;
    }
    .hamburger {
      display: inline-flex;
      margin-left: auto;
    }
  }
</style>
