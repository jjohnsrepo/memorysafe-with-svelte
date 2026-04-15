<section id="about">
  <div class="wrapper">
    <div class="layout">
      <div class="text-col">
        <h2>About MemorySafe</h2>
        <p>
          MemorySafe started as a personal project. I found a box of VHS tapes at my parents'
          house — birthdays, Christmases, vacations — all slowly deteriorating in a closet. The big
          chains quoted me hundreds of dollars and weeks of waiting. That felt wrong.
        </p>
        <p>
          So I bought the equipment. Learned the process. Started with family, then friends, then
          strangers who found me through word of mouth. Now MemorySafe has rescued thousands of hours
          of irreplaceable footage from tapes, reels, and shoeboxes of prints.
        </p>
        <p>
          I handle every job personally. That means your memories are in the hands of someone who
          genuinely cares — not a technician on a conveyor belt.
        </p>
        <a href="/about" class="text-link">More about me and my process →</a>
      </div>

      <div class="media-col">
        <img
          src="https://placehold.co/440x520/FFDEAB/7A5C1E?text=Founder+Photo"
          alt="Founder of MemorySafe"
          class="portrait"
        />
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

  .layout {
    display: grid;
    grid-template-columns: 1fr 360px;
    gap: 4rem;
    align-items: center;
  }

  h2 {
    font-size: 2.75rem;
    margin: 0 0 1.5rem 0;
  }

  .text-col p {
    font-size: 1.05rem;
    line-height: 1.8;
    margin: 0 0 1.1rem 0;
    opacity: 0.85;
  }

  .text-link {
    display: inline-block;
    margin-top: 0.5rem;
    font-size: 1rem;
    text-decoration: underline;
    color: black;
    opacity: 0.7;
  }

  .text-link:hover {
    opacity: 1;
  }

  .portrait {
    width: 100%;
    display: block;
    border: 1px solid rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 900px) {
    .layout {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .media-col {
      max-width: 360px;
    }

    h2 { font-size: 2.1rem; }
  }
</style>
