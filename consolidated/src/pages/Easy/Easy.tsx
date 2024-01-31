import React from "react";
import FAQPage from "./projects/FAQ/FAQPage";

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
        }}
      >
        <FAQPage></FAQPage>
      </div>
    </div>
  );
}

export default Easy;
