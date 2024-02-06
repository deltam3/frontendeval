import React from "react";
import styled from "styled-components";

import DateActionCreator from "../redux/DateActionCreator";
import { UnknownAction, Dispatch } from "redux";
import { connect } from "react-redux";
import { DateStatesType, DateItemType } from "../redux/DateReducer";

type Props = {
  dateList: Array<DateItemType>;
};

const Home = (props: Props) => {
  const HomeContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;

  const result = props.dateList.map((item) => {
    return <p key={item.city}>{item.city}</p>;
  });

  return (
    <HomeContainer>
      <h2>Home</h2>
      <h2>FrontEnd Eval</h2>
      <p>
        <a href="https://frontendeval.com/">frontendeval.com</a>
      </p>
      {result}
    </HomeContainer>
  );
};

const mapStateToProps = (state: DateStatesType) => ({
  dateList: state.dateList,
});

const mapDispatchToProps = (dispatch: Dispatch<UnknownAction>) => ({
  addDate: (id: number) => dispatch(DateActionCreator.addDate({ id })),
  deleteDate: (id: number) => dispatch(DateActionCreator.deleteDate({ id })),
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;
