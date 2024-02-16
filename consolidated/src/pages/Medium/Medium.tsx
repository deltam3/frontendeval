import { Link } from "react-router-dom";

function Medium() {
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
