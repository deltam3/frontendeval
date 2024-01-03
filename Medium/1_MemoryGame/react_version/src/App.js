import "./App.css";
import { useState } from "react";

function App() {
  const [difficulty, setDifficulty] = useState(5);

  return (
    <main className="main">
      <section className="section-game">
        <header>
          <h1>Memory Game</h1>
        </header>
        <div className="game"></div>
      </section>
    </main>
  );
}

export default App;
