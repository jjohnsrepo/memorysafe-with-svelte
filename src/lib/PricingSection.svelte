<section id="pricing">
  <div class="wrapper">
    <h2>Pricing</h2>
    <p class="sub">Flat rates. No hidden fees. Originals returned at no extra charge.</p>

    <div class="layout">
      <div class="table-col">
        <table>
          <thead>
            <tr>
              <th>Format</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>VHS / Betamax</td>
              <td>$25 / tape</td>
            </tr>
            <tr>
              <td>8mm / Super 8 Film</td>
              <td>$30 / reel</td>
            </tr>
            <tr>
              <td>Hi8 / Video8</td>
              <td>$22 / tape</td>
            </tr>
            <tr>
              <td>Mini DV</td>
              <td>$18 / tape</td>
            </tr>
            <tr>
              <td>Photographs</td>
              <td>$0.45 / print</td>
            </tr>
            <tr>
              <td>35mm Slides</td>
              <td>$0.65 / slide</td>
            </tr>
            <tr>
              <td>Film Negatives</td>
              <td>$0.50 / frame</td>
            </tr>
            <tr>
              <td>Audio Cassette</td>
              <td>$18 / tape</td>
            </tr>
          </tbody>
        </table>
        <p class="min-note">Minimum order: $35</p>
      </div>

      <div class="side-col">
        <div class="side-block">
          <h3>Bundle Discounts</h3>
          <ul>
            <li>5–9 items &mdash; <strong>10% off</strong></li>
            <li>10–19 items &mdash; <strong>20% off</strong></li>
            <li>20+ items &mdash; <strong>contact for a quote</strong></li>
          </ul>
        </div>

        <div class="side-block">
          <h3>Add-Ons</h3>
          <ul>
            <li>USB drive delivery &mdash; <strong>$12</strong></li>
            <li>Rush processing (3 days) &mdash; <strong>+50%</strong></li>
            <li>1-year cloud backup &mdash; <strong>$8</strong></li>
          </ul>
        </div>

        <div class="side-block cta-block">
          <p>Questions about your format or quantity?</p>
          <a href="#contact" class="pill-btn">Get in touch ↓</a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    background: rgb(255, 222, 171);
    border-top: 1px solid rgba(0, 0, 0, 0.12);
  }

  .wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding: 5rem 2rem;
  }

  h2 {
    font-size: 2.75rem;
    margin: 0 0 0.4rem 0;
  }

  .sub {
    font-size: 1.05rem;
    margin: 0 0 3rem 0;
    opacity: 0.7;
  }

  .layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }

  /* ── Table ── */
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 1rem;
  }

  th {
    background: blanchedalmond;
    text-align: left;
    padding: 0.6rem 0.9rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    font-weight: bold;
  }

  td {
    padding: 0.55rem 0.9rem;
    border: 1px solid rgba(0, 0, 0, 0.12);
  }

  tr:nth-child(even) td {
    background: rgba(255, 255, 255, 0.25);
  }

  td:last-child {
    white-space: nowrap;
    font-weight: bold;
  }

  .min-note {
    font-size: 0.85rem;
    margin: 0.75rem 0 0 0;
    opacity: 0.6;
  }

  /* ── Side column ── */
  .side-col {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .side-block h3 {
    font-size: 1.2rem;
    margin: 0 0 0.75rem 0;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }

  .side-block ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  /* ── CTA ── */
  .cta-block {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    padding-top: 2rem;
  }

  .cta-block p {
    margin: 0 0 1rem 0;
    font-size: 1rem;
  }

  .pill-btn {
    display: inline-block;
    font-size: 1.25rem;
    background: blanchedalmond;
    border: 2px solid black;
    border-radius: 999px;
    padding: 0.4em 1.5em;
    cursor: pointer;
    text-decoration: none;
    color: black;
  }

  .pill-btn:hover {
    background: #f0d898;
    text-decoration: none;
  }

  @media (max-width: 800px) {
    .layout {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    h2 { font-size: 2.1rem; }
  }
</style>
