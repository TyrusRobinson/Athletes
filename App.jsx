import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Athletes from "./components/athletes/Athletes";

import SiteNav from "./components/SiteNav";
import AddAthleteForm from "./components/AddAthleteForm";
import AthleteCard from "./components/AthleteCard";

function App() {
  const [currentUser] = useState({
    firstName: "Tyrus",
    lastName: "Robinson",
  });
  console.log(currentUser);

  return (
    <React.Fragment>
      <SiteNav user={currentUser}></SiteNav>

      <Routes>
        <Route path="/Athletes" element={<Athletes />}></Route>

        <Route path="/SiteNav" element={<SiteNav />}></Route>
        <Route path="/AddAthleteForm" element={<AddAthleteForm />}></Route>
        <Route
          path="Athletes/AddAthleteForm/:id"
          element={<AddAthleteForm />}
        ></Route>
        <Route path="/AthleteCard" element={<AthleteCard />}></Route>
      </Routes>
      <footer className="container"></footer>
    </React.Fragment>
  );
}
export default App;
