import React from "react";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div>
      <div>
        <div>
          <h3>Loading</h3>
          <ScaleLoader height="40px" width="6px" radius="2px" margin="2px" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
