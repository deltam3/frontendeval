import React from "react";
import styled from "styled-components";

type Props = {};

const Home = (props: Props) => {
  const HomeContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;
  return (
    <HomeContainer>
      <h2>Home</h2>
      <h2>FrontEnd Eval</h2>
      <p>
        <a href="https://frontendeval.com/">frontendeval.com</a>
      </p>
    </HomeContainer>
  );
};

export default Home;
