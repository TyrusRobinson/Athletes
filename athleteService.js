import axios from "axios";
import * as helper from "./serviceHelper"

const athleteService = {
    endpoint: "https://api.remotebootcamp.dev/api/friends/",
  };
  let getAthletes = () => {
    console.log("athletes is firing");
    const config = {
      method: "GET",
      url: athleteService.endpoint + "?pageIndex=0&pageSize=5",
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
    return axios(config).then(helper.onGlobalSuccess);
  };

  let addAthlete = (payload) => {
    const config = {
      method: "POST",
      url: athleteService.endpoint,
      data: payload,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
    return axios(config)
    
  };

  const updateAthlete = (id, payload) => {
    const config = {
      method: "PUT",
      data: payload,
      url: athleteService.endpoint + id,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
    return axios(config);
  };

  const athleteServices = { getAthletes, addAthlete, updateAthlete };
  export default athleteServices  ;