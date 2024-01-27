import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import pMinDelay from "p-min-delay";
import Loading from "./components/Loading";

import Header from "./components/Header";
import Home from "./pages/Home";
const Easy = React.lazy(() =>
  pMinDelay(import(/* webpackChunkName: "easy" */ "./pages/Easy/Easy"), 1000)
);
const Medium = React.lazy(
  () => import(/* webpackChunkName: "medium*/ "./pages/Medium/Medium")
);
const Hard = React.lazy(
  () => import(/* webpackChunkName : "hard"*/ "./pages/Hard/Hard")
);

function App() {
  return (
    <React.Suspense fallback={<Loading />}>
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
    </React.Suspense>
  );
}

export default App;
