import React from "react";
import { ScaleLoader } from "react-spinners";
import styled from "styled-components";

const Loading = () => {
  const LoadingContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  return (
    <LoadingContainer>
      <div>
        <div>
          <h3>Loading</h3>
          <ScaleLoader height="40px" width="6px" radius="2px" margin="2px" />
        </div>
      </div>
    </LoadingContainer>
  );
};

export default Loading;
