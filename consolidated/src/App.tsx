import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";

import Header from "./components/Header";
import Home from "./pages/Home";

const Easy = React.lazy(
  () => import(/* webpackChunkName: "easy" */ "./pages/Easy/Easy")
);
const Medium = React.lazy(
  () => import(/* webpackChunkName: "medium*/ "./pages/Medium/Medium")
);
const Hard = React.lazy(
  () => import(/* webpackChunkName : "hard"*/ "./pages/Hard/Hard")
);

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
