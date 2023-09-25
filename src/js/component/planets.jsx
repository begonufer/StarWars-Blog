import React, { useState, useEffect, useContext } from "react";
import Card from "./card.jsx";
import { Context } from "../store/appContext.js";
import rigoImage from "../../img/rigo-baby.jpg";


export const Planets = () => {
  const { store, actions } = useContext(Context);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function transformData() {
      await actions.getPlanets();
      setPlanets(store.planets);
      console.log(store.planets);
    }
    transformData();
  }, []);

  return (
    <>
      <div className="text-center mt-3">
        <div className="row px-5 mx-5">
          <h1 className="mb-4">Planets</h1>
          {planets.map((planet, index) => (
            <Card
              name={planet.name}
              id={planet.uid}
              key={index}
              description="planets"
            />
          ))}
        </div>
      </div>
    </>
  );
};
