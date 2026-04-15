<script>
  import '../app.css';
</script>

<main>
  <slot />
</main>

<style>
  main {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>
