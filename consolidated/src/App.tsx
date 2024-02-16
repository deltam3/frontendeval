import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Loading from "./components/Loading";

import Home from "./pages/Home";
import Layout from "./components/Layout";
import EasyVanillajsPage from "./pages/Easy/EasyVanillajsPage";
import EasyReactPage from "./pages/Easy/EasyReactPage";
import MediumVanillajsPage from "./pages/Medium/MediumVanillajsPage";
import MediumReactPage from "./pages/Medium/MediumReactPage";
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
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Easy" element={<Easy />} />
            <Route path="/Easy/Vanillajs" element={<EasyVanillajsPage />} />
            <Route path="/Easy/React" element={<EasyReactPage />} />
            <Route path="/Medium" element={<Medium />} />
            <Route path="/Medium/Vanillajs" element={<MediumVanillajsPage />} />
            <Route path="/Medium/React" element={<MediumReactPage />} />
            <Route path="/Hard" element={<Hard />} />
          </Route>
        </Routes>
      </Router>
    </React.Suspense>
  );
}

export default App;
