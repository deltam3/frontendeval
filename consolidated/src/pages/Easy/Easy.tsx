import { Link } from "react-router-dom";

// import DateActionCreator from "../../redux/DateActionCreator";
// import { UnknownAction, Dispatch } from "redux";
import { connect } from "react-redux";
import { DateStatesType, DateItemType } from "../../redux/DateReducer";

type Props = {};

function Easy(props: Props) {
  const result = props.dateList.map((item) => {
    return (
      <p key={item.city}>
        {item.city} {item.date.toDateString()}
      </p>
    );
  });
  return (
    <div>
      <h1 style={{ textAlign: "center", paddingBottom: "1.2rem" }}>
        Easy Difficulty Projects
      </h1>
      <div className="flex justify-center gap-10 my-4">
        <Link to="/Easy/Vanillajs" className="btn-default btn">
          Easy Project - VanillaJS Version
        </Link>
        <Link to="/Easy/React" className="btn-default btn">
          Easy Projects - React Version
        </Link>
      </div>
      <div style={{ textAlign: "center" }}>{result}</div>
    </div>
  );
}

const mapStateToProps = (state: DateStatesType) => ({
  dateList: state.dateList,
});

// const mapDispatchToProps = (dispatch: Dispatch<UnknownAction>) => ({
//   addDate: (id: number) => dispatch(DateActionCreator.addDate({ id })),
//   deleteDate: (id: number) => dispatch(DateActionCreator.deleteDate({ id })),
// });

const EasyContainer = connect(mapStateToProps, null)(Easy);
export default EasyContainer;
