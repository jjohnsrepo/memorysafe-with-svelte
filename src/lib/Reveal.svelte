<script>
  import { onMount } from 'svelte';

  export let delay = 0;
  export let threshold = 0.12;
  let klass = '';
  export { klass as class };

  /** @type {HTMLDivElement | undefined} */
  let el;
  let visible = false;

  onMount(() => {
    if (typeof IntersectionObserver === 'undefined') {
      visible = true;
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible = true;
            io.disconnect();
          }
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );
    if (el) io.observe(el);
    return () => io.disconnect();
  });
</script>

<div
  bind:this={el}
  class="reveal {klass} {visible ? 'is-visible' : ''}"
  style="transition-delay: {delay}ms;"
>
  <slot />
</div>
