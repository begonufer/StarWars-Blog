import React, { useContext, useEffect, useState } from "react";
import { Planets } from "../component/planets.jsx";
import { Character } from "../component/characters.jsx";
import { Vehicles } from "../component/vehicles.jsx";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
  return (
    <>
      <div>
        <Planets />
        <Character />
        <Vehicles />
      </div>
    </>
  );
};
