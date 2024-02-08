import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Loading from "./components/Loading";

import Home from "./pages/Home";
import Layout from "./components/Layout";
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
    <React.Suspense fallback={<Loading />}>
      <Router>
        <>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/Easy" element={<Easy />} />
              <Route path="/Medium" element={<Medium />} />
              <Route path="/Hard" element={<Hard />} />
            </Route>
          </Routes>
        </>
      </Router>
    </React.Suspense>
  );
}

export default App;
