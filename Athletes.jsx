import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import athleteService from "../../services/athleteService";
import Athlete from "../AthleteCard";
//===========================================================================================================================================//
function Athletes() {
  const [pageData, setPageData] = useState({
    arrayOfAthletes: [],
    athleteComponents: [],
  });

  const [toggle, setToggle] = useState(true);

  false && console.log(pageData.arrayOfAthletes);

  //=====================================================================================================================================//
  // const onDeleteRequested = useCallback((myAthlete, eObj) => {
  //   console.log(myAthlete.id, { myAthlete, eObj });

  //   const handler = getDeleteSuccessHandler(myAthlete.id);

  //   athleteService
  //     .deleteAthlete(myAthlete.id)
  //     .then(handler)
  //     .catch(onDeleteError);
  // }, []);

  // const getDeleteSuccessHandler = (idToBeDeleted) => {
  //   console.log("getDeleteSuccessHandler", idToBeDeleted);
  //   return () => {
  //     console.log("onDeleteSuccess", idToBeDeleted);

  //     setPageData((prevState) => {
  //       const pd = { ...prevState };
  //       pd.arrayOfAthletes = [...pd.arrayOfAthletes];

  //       const idxOf = pd.arrayOfAthletes.findIndex((athlete) => {
  //         let result = false;

  //         if (athlete.id === idToBeDeleted) {
  //           result = true;
  //         }

  //         return result;
  //       });

  //       if (idxOf >= 0) {
  //         pd.arrayOfAthletes.splice(idxOf, 1);
  //         pd.athleteComponents = pd.arrayOfAtheletes.map(mapAthlete);
  //       }

  //       return pd;
  //     });
  //   };
  // };

  //==============================================Mapper Function==========================================================//

  const mapAthlete = (anAthlete) => {
    return (
      <Athlete
        athlete={anAthlete}
        key={"ListA-" + anAthlete.id}
        //onAthleteClicked={onDeleteRequested}
      />
    );
  };

  useEffect(() => {
    console.log("firing useEffect for get people");
    athleteService
      .getAthletes()
      .then(onGetAthleteSuccess)
      .catch(onGetAthleteError);
  }, []);

  const onGetAthleteSuccess = (data) => {
    console.log(data);
    let arrayOfPeeps = data.item.pagedItems;
    console.log({ arrayOfPeeps });

    setPageData((prevState) => {
      const pd = { ...prevState };
      pd.arrayOfAthletes = arrayOfPeeps;
      pd.athleteComponents = arrayOfPeeps.map(mapAthlete);
      return pd;
    });
  };

  const onGetAthleteError = (err) => {
    console.error(err);
  };

  // const onDeleteError = (err) => {
  //   console.error("Deleting", err);
  // };

  const onToggleClicked = (e) => {
    e.preventDefault();
    console.log("This is firing");
    setToggle(!toggle);
  };

  return (
    <React.Fragment>
      <div className="container">
        <button
          onClick={onToggleClicked}
          type="submit"
          className="btn btn-dark mt-3"
        >
          {toggle && "Hide Athletes"} {!toggle && "Show Athletes"}
        </button>

        <Link to="/AddAthleteForm" className="btn btn-dark mt-3 mx-3">
          Add Athletes
        </Link>

        <h1>Athletes Profile</h1>
        <div className="row">
          {toggle && pageData.arrayOfAthletes.map(mapAthlete)};
        </div>
      </div>
    </React.Fragment>
  );
}
export default Athletes;
