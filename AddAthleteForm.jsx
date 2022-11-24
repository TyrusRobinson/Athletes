import React, { useEffect, useState } from "react";
import toastr from "toastr";
import athleteService from "../services/athleteService";
import { useLocation } from "react-router-dom";

function AddEditAthlete() {
  const { state } = useLocation();
  const [myAthlete, setMyAthlete] = useState({
    title: "",
    bio: "",
    summary: "",
    headline: "",
    slug: "",
    statusId: "Active",
    primaryImage: "",
    id: "",
  });
  useEffect(() => {
    if (state?.type === "PRODUCT_VIEW" && state.payload) {
      const imgUrl = state.payload.primaryImage.imageUrl;
      console.log("product change firing");
      setMyAthlete((prevState) => {
        const athleteUpdate = { ...prevState, ...state.payload };
        athleteUpdate.primaryImage = imgUrl;
        return athleteUpdate;
      });
    }
  }, [state]);

  const onClickAthleteUser = (e) => {
    let payload = myAthlete;
    e.preventDefault();
    console.log(onClickAthleteUser);

    if (!payload.id) {
      athleteService
        .addAthlete(payload)
        .then(onAddAthleteSuccess)
        .catch(onAddAthleteError);
      console.log(myAthlete);
    } else {
      athleteService
        .updateAthlete(payload.id, payload)
        .then(onUpdateAthleteSuccess)
        .catch(onUpdateAthleteError);
    }
  };

  const onUpdateAthleteSuccess = (response) => {
    false && console.log(response);
    toastr.info("Athlete Successfully Updated!");
  };

  const onUpdateAthleteError = (error) => {
    false && console.log(error);
    toastr.error("Unable to Update Athlete");
  };

  const onAddAthleteSuccess = (response) => {
    console.log("Success Response", response);
    toastr.success("Athlete Successfully Added!");
  };
  const onAddAthleteError = (response) => {
    console.error("Error Response", response);
    toastr.error("Unable to Add Athlete");
  };

  const onFormFieldChange = (event) => {
    console.log("onChange", { syntheticEvent: event });

    const target = event.target;

    const newUservalue = target.value;

    const nameOfField = target.name;
    console.log(nameOfField, newUservalue);

    setMyAthlete((prevState) => {
      console.log("updater onChange");

      const newUserObject = {
        ...prevState,
      };

      newUserObject[nameOfField] = newUservalue;

      return newUserObject;
    });
  };
  return (
    <React.Fragment>
      <div className="container">
        <h1>Add/Edit an Athlete</h1>
        <form>
          <div className="row">
            <div className="col-4">
              <div className="form-group mt-3">
                <label htmlFor="title">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Please Enter The Name Here"
                  value={myAthlete.title}
                  onChange={onFormFieldChange}
                  name="title"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="bio">Nickname</label>
                <input
                  type="text"
                  className="form-control"
                  id="bio"
                  placeholder="Please Enter The Nickname Here"
                  value={myAthlete.bio}
                  onChange={onFormFieldChange}
                  name="bio"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="summary">Summary</label>
                <input
                  type="text"
                  className="form-control"
                  id="summary"
                  placeholder="Please Enter Your Summary Here"
                  value={myAthlete.summary}
                  onChange={onFormFieldChange}
                  name="summary"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="headline">Team</label>
                <input
                  type="text"
                  className="form-control"
                  id="headline"
                  placeholder="Please Enter The Team Name Here"
                  value={myAthlete.headline}
                  onChange={onFormFieldChange}
                  name="headline"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="slug">Slug</label>
                <input
                  type="text"
                  className="form-control"
                  id="slug"
                  placeholder="Please Enter Your Slug Here"
                  value={myAthlete.slug}
                  onChange={onFormFieldChange}
                  name="slug"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="statusId">Status Id</label>
                <input
                  type="text"
                  className="form-control"
                  id="statusId"
                  placeholder="Please Enter Your Status Id Here"
                  value={myAthlete.statusId}
                  onChange={onFormFieldChange}
                  name="statusId"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="primaryImage">Profile Image</label>
                <input
                  type="url"
                  className="form-control"
                  id="primaryImage"
                  placeholder="Please Provide Your Profile Image Here"
                  value={myAthlete.primaryImage}
                  onChange={onFormFieldChange}
                  name="primaryImage"
                />
              </div>
            </div>
          </div>
          <button
            onClick={onClickAthleteUser}
            type="submit"
            className="btn btn-warning mt-3"
          >
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
export default AddEditAthlete;
