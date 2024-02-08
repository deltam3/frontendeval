import React from "react";

import { Link } from "react-router-dom";

type Props = {};

const EasyVanillajsPage = (props: Props) => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Link to="/Easy/Vanillajs">Easy Project - VanillaJS Version</Link>
        <Link to="/Easy/React">Easy Projects - React Version</Link>
      </div>
      <h3>Easy Projects done in VanillaJS</h3>
    </div>
  );
};

export default EasyVanillajsPage;
