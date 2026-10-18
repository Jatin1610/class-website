
import waveHtml from "./character-wave.html.js";import "./App.css";
function LocalCharacterWave() {
  const srcDoc = waveHtml
    .replaceAll(
      "performance.now()",
      "window.__CHARACTER_CAROUSEL_NOW()"
    )
    .replace(
      "</head>",
      `<style>
        :root {
  --character-carousel-scale: 1;
}

@media (min-width: 768px) {
  :root {
    --character-carousel-scale: 1.15;
  }
}

@media (max-width: 767px) {
  :root {
    --character-carousel-scale: 1;
  }
}
        html, body, .stage {
          width: 100%;
          height: 100%;
          margin: 0;
          overflow: hidden;
        }
        .stage { min-height: 0 !important; }
        .deck {
          transform: scale(var(--character-carousel-scale));
          transform-origin: 50% 50%;
        }
      </style>
      <script>
        window.__CHARACTER_CAROUSEL_NOW = () => performance.now();
      </script>
      </head>`
    );

  return (
    <iframe
      className="character-carousel"
      title="Class character wave"
      srcDoc={srcDoc}
      sandbox="allow-scripts"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        border: 0,
        background: "#121212",
      }}
    />
  );
}
function App() {
  return (
    <main className="class-page">
      <header className="class-header">
        <span className="eyebrow">OUR CLASS · OUR STORIES</span>

        <h1>
          Meet the <span>class.</span>
        </h1>

        <p>
          Different people. Different dreams.
          One unforgettable journey.
        </p>
      </header>

      <section className="carousel-section">
        <div className="section-label">
          <span>THE PEOPLE BEHIND THE JOURNEY</span>
          <span>BATCH 2025–2029</span>
        </div>

        
<div className="carousel-frame shader-frame">
  <LocalCharacterWave
  speed={1}
  scale={1}
  opacity={1}
  hue={0}
  saturation={1}
  brightness={1}
/>
</div>

      </section>

      <footer className="class-footer">
        <span>ELECTRONICS AND COMPUTER ENGINEERING</span>
        <span>O1 KE DHURANDHAR</span>
      </footer>
    </main>
  );
}

export default App;
