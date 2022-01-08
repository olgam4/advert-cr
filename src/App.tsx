import type { Component } from 'solid-js';

import planetA from './assets/planetA.gif';
import planetB from './assets/planetB.gif';
import planetC from './assets/planetC.gif';
import runner from './assets/runner.gif';
import astro from './assets/astro.png';

import phone from './assets/phone.png';

import gameplay from './assets/gameplay.mp4';
import gameplay_still from './assets/gameplay-still.png';

import title from './assets/title.png';
import gplay from './assets/gplay.png';

import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={title} class={styles.title} alt="logo" />
        <div class={styles.galaxy}>
          <img src={planetA} class={styles.planetA} alt="earth" />
          <img src={planetB} class={styles.planetB} alt="planet" />
          <img src={planetC} class={styles.planetC} alt="moon" />
        </div>
        <img src={runner} class={styles.runner} alt="runner" />
        <a
          class={styles.link}
          href="https://play.google.com/store/apps/details?id=org.godotengine.astrorush"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gplay} class={styles.gplay} alt="google play" />
        </a>
      </header>
      <main class={styles.main}>
        <article class={styles.advert}>
          <video class={styles.video} autoplay muted loop>
            <source src={gameplay} type="video/mp4" />
            <img src={gameplay_still} class={styles.gameplayStill} alt="gameplay" />
          </video>
          <img src={phone} class={styles.phone} alt="phone" />
        </article>
        <article class={styles.catchphrase}>
          <img src={astro} class={styles.astro} alt="astronaut" />
          <p>Try and beat your friends' highscores!</p>
          <p> Will you be the best?</p>
        </article>
      </main>
    </div>
  );
};

export default App;
