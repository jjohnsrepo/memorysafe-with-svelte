<script>
  import Reveal from '$lib/Reveal.svelte';
</script>

<svelte:head>
  <title>Privacy Policy — MemorySafe</title>
  <meta
    name="description"
    content="How MemorySafe collects and uses information submitted through this website."
  />
</svelte:head>

<section class="hero section">
  <div class="wrapper">
    <Reveal>
      <p class="eyebrow">Privacy</p>
      <h1 class="title">Privacy Policy</h1>
      <p class="updated">Last Updated: August 13, 2026</p>
      <p class="sub">
        We respect your privacy. This Privacy Policy explains how we collect and use information
        submitted through this website.
      </p>
    </Reveal>
  </div>
</section>

<section class="section section--alt">
  <div class="wrapper">
    <Reveal>
      <article class="article">
        <h2>Information We Collect</h2>
        <p>
          When you submit our contact or inquiry form, we may collect the information you provide,
          including:
        </p>
        <ul>
          <li>Your name</li>
          <li>Your email address</li>
          <li>Your phone number</li>
          <li>The contents of your message</li>
        </ul>
        <p>We only collect information that you voluntarily provide to us through the website.</p>

        <h2>How We Use Your Information</h2>
        <p>We use the information you provide to:</p>
        <ul>
          <li>Respond to your inquiry or request</li>
          <li>Contact you regarding your message</li>
          <li>Provide information or services you have requested</li>
        </ul>
        <p>We do not sell your personal information.</p>

        <h2>Form Processing</h2>
        <p>
          Our contact form is processed using <strong>Formspree</strong>, a third-party form
          service. Information submitted through the form may be processed and stored by Formspree
          in accordance with its own privacy practices.
        </p>

        <h2>Information Security</h2>
        <p>
          We take reasonable measures to protect the information submitted through this website.
          However, no method of transmitting or storing information online can be guaranteed to be
          completely secure.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          This website may use third-party services to help operate the website or process submitted
          information. Those services may have their own privacy policies and terms.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this
          page with an updated "Last Updated" date.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this Privacy Policy or how your information is handled, you
          may contact us through the contact information provided on this website.
        </p>
      </article>
    </Reveal>
  </div>
</section>

<style>
  .hero {
    padding-top: clamp(4rem, 10vw, 7rem);
    padding-bottom: clamp(3rem, 7vw, 5rem);
    background: radial-gradient(circle at 80% 20%, var(--accent-soft) 0%, transparent 50%),
      var(--bg);
  }

  .title {
    font-size: clamp(2.2rem, 5vw, 3.75rem);
    line-height: 1.05;
    letter-spacing: -0.02em;
    margin: 0 0 1rem 0;
    color: var(--ink);
  }

  .updated {
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: var(--ink-mute);
    margin: 0 0 1rem 0;
  }

  .sub {
    font-size: clamp(1.05rem, 1.4vw, 1.2rem);
    color: var(--ink-soft);
    max-width: 58ch;
    margin: 0;
  }

  .article {
    max-width: 68ch;
  }

  .article h2 {
    font-size: 1.6rem;
    margin: 2.5rem 0 0.85rem 0;
    font-weight: 500;
  }

  .article h2:first-child {
    margin-top: 0;
  }

  .article p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--ink-soft);
    margin: 0 0 1.15rem 0;
  }

  .article ul {
    margin: 0 0 1.15rem 0;
    padding-left: 1.4rem;
  }

  .article li {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--ink-soft);
  }

  .article strong {
    color: var(--ink);
    font-weight: 600;
  }
</style>
