import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import Easy from "./pages/Easy/Easy";
import Medium from "./pages/Medium/Medium";
import Hard from "./pages/Hard/Hard";

type Props = {};

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Easy" element={<Easy />} />
          <Route path="/Medium" element={<Medium />} />
          <Route path="/Hard" element={<Hard />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;