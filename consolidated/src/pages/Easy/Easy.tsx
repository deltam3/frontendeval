import React from "react";
import FAQPage from "./projects/FAQ/FAQPage";
import CounterPage from "./projects/Counter/CounterPage";

type Props = {};

function Easy({}: Props) {
  return (
    <div>
      <h1 style={{ textAlign: "center", paddingBottom: "2.4rem" }}>
        Easy Difficulty Projects
      </h1>
      <div
        style={{
          border: "2px solid black",
          margin: "0 auto",
          maxWidth: "90rem",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <FAQPage></FAQPage>
        {/* <CounterPage></CounterPage> */}
      </div>
      <div
        style={{
          border: "2px solid black",
          margin: "0 auto",
          maxWidth: "90rem",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <CounterPage></CounterPage>
      </div>
    </div>
  );
}

export default Easy;
