import React, { useContext } from "react";
import { Context } from "../store/appContext";

import rigoImage from "../../img/rigo-baby.jpg";

export const Info = ( {description} ) => {
  const { store } = useContext(Context);
  return (
    <>
      <div className="row justify-content-center p-5 mx-5">
        <div className="row text-center mt-1">
        <div className="col-12 col-md-6 m-0 p-0">
          <img src={rigoImage} />
        </div>
          <div className="col-sm-6 mr-5">
            <h1>{store.data.name}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus natus eveniet in incidunt quisquam dolorum explicabo fugit iusto quis. Voluptas maiores atque fugit ratione et numquam iusto deserunt omnis quo?
              Qui vero quidem, possimus ipsam itaque quas delectus totam rerum sint assumenda consectetur expedita quaerat fugiat nulla natus necessitatibus eaque reiciendis! Officiis?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas illo
              praesentium, in enim dignissimos, labore impedit recusandae
              exercitationem numquam tempore earum quo suscipit quae, natus eos
              distinctio eaque similique magnam?
            </p>
          </div>
        </div>
        <div className="row text-center mt-5">
          <div className="col">
            <h4>Name</h4>
          </div>
          <div className="col">
            <h4>
              {description === "planets"
                ? "Diameter"
                : description === "people"
                ? "Height"
                : "Model"}
            </h4>
          </div>
          <div className="col">
            <h4>
              {description === "planets"
                ? "Gravity"
                : description === "people"
                ? "Skin color"
                : "Cost in credits"}
            </h4>
          </div>
          <div className="col">
            <h4>
              {description === "planets"
                ? "Population"
                : description === "people"
                ? "Eye color"
                : "Passengers"}
            </h4>
          </div>
          <div className="col">
            <h4>
              {description === "planets"
                ? "Climate"
                : description === "people"
                ? "Birth year"
                : "Max atmosphering speed"}
            </h4>
          </div>
          <div className="col">
            <h4>
              {description === "planets"
                ? "Terrain"
                : description === "people"
                ? "Gender"
                : "Consumables"}
            </h4>
          </div>
        </div>
        <div className="row text-center mt-5">
          <div className="col">
            <p>{store.data.name}</p>
          </div>
          <div className="col">
            {description === "planets"
              ? <p>{store.data.diameter}</p>
              : description === "people"
              ? <p>{store.data.height}</p>
              : <p>{store.data.model}</p>
            }
          </div>
          <div className="col">
            {description === "planets"
              ? <p>{store.data.gravity}</p>
              : description === "people"
              ? <p>{store.data.skin_color}</p>
              : <p>{store.data.cost_in_credits}</p>
            }
          </div>
          <div className="col">
            {description === "planets"
              ? <p>{store.data.population}</p>
              : description === "people"
              ? <p>{store.data.eye_color}</p>
              : <p>{store.data.passengers}</p>
            }
          </div>
          <div className="col">
            {description === "planets"
              ? <p>{store.data.climate}</p>
              : description === "people"
              ? <p>{store.data.birth_year}</p>
              : <p>{store.data.max_atmosphering_speed}</p>
            }
          </div>
          <div className="col">
            {description === "planets"
              ? <p>{store.data.terrain}</p>
              : description === "people"
              ? <p>{store.data.gender}</p>
              : <p>{store.data.consumables}</p>
            }
          </div>
        </div>
      </div>
    </>
  );
}
