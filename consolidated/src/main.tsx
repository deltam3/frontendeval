import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// import rootReducer from "./modules";

// const store = configureStore({ reducer: rootReducer });
// const store = "redux is working";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Provider store={AppStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
