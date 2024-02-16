import React from "react";
import { connect } from "react-redux";
import { DateStatesType, DateItemType } from "../../redux/DateReducer";
import { Link } from "react-router-dom";

type Props = {};

function Medium({}: Props) {
  return (
    <div>
      <h1 style={{ textAlign: "center", paddingBottom: "1.2rem" }}>
        Medium Difficulty Projects
      </h1>
      <div className="flex justify-center gap-10 my-4">
        <Link to="/Easy/Vanillajs" className="btn-deafult btn">
          Easy Project - VanillaJS Version
        </Link>
        <Link to="/Easy/React" className="btn-default btn">
          Easy Proejcts - React Version
        </Link>
      </div>
    </div>
  );
}

export default Medium;

// import { Link } from "react-router-dom";

// import { connect } from "react-redux";
// import { DateStatesType, DateItemType } from "../../redux/DateReducer";

// type Props = {};

// function Easy(props: Props) {
//   const result = props.dateList.map((item) => {
//     return (
//       <p key={item.city}>
//         {item.city} {item.date.toDateString()}
//       </p>
//     );
//   });
//   return (
//     <div>
//       <h1 style={{ textAlign: "center", paddingBottom: "2.4rem" }}>
//         Easy Difficulty Projects
//       </h1>
//       <div style={{ textAlign: "center" }}>
//         <Link to="/Easy/Vanillajs">Easy Project - VanillaJS Version</Link>
//         <Link to="/Easy/React">Easy Projects - React Version</Link>
//       </div>
//       <div style={{ textAlign: "center" }}>{result}</div>
//     </div>
//   );
// }

// const mapStateToProps = (state: DateStatesType) => ({
//   dateList: state.dateList,
// });

// const EasyContainer = connect(mapStateToProps, null)(Easy);
// export default EasyContainer;
