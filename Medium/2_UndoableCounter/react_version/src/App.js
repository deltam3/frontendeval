import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="center-text heading-primary">Undoable Counter</h1>
      <main className="main">
        <section className="section-counter">
          <div className="counter">
            <div className="counter--undoredo">
              <button>Undo</button>
              <button>Redo</button>
            </div>
            <div className="counter--main">
              <div>
                <button>-100</button>
                <button>-10</button>
                <button>-1</button>
              </div>
              <p>106</p>
              <div>
                <button>+1</button>
                <button>+10</button>
                <button>+100</button>
              </div>
            </div>
            <div className="counter--history">
              <p>History</p>
              <div className="history--container">
                <div className="history--item">
                  <span>-1</span>
                  <span>(108 -> 107)</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
