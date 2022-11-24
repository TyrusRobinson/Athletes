import React from "react";
import { useNavigate } from "react-router-dom";

function Athlete(props) {
  const anAthlete = props.athlete;

  // const onDeleteAthleteClicked = (evt) => {
  //   evt.preventDefault();
  //   props.onAthleteClicked(props.athlete, evt);
  // };

  const navigate = useNavigate();

  const onEditAthleteClicked = () => {
    const payload = anAthlete;
    console.log(payload);
    const stateForTransports = { type: "PRODUCT_VIEW", payload: anAthlete };
    console.log("this is state transports", stateForTransports);
    navigate(`AddAthleteForm/${anAthlete.id}`, { state: stateForTransports });

    console.log(anAthlete);
  };

  return (
    <div className="col-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={anAthlete.primaryImage.imageUrl}
          alt=""
        />
        <div className="card-body">
          <strong className="card-title">{anAthlete.title}</strong>
          <p className="card-text" style={{ color: "Black" }}>
            {anAthlete.summary}{" "}
          </p>
          <button
            onClick={onEditAthleteClicked}
            type="button"
            className="btn btn-dark mt-1"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Athlete);
