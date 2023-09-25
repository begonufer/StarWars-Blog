import React, { useContext } from "react";
import { Context } from "../store/appContext";

import rigoImage from "../../img/rigo-baby.jpg";

import { Link } from "react-router-dom";

import { FaHeart } from "@react-icons/all-files/fa/FaHeart";

const Card = ( { name, id, description } ) => {

    const { store, actions } = useContext(Context);

    async function getOneDetail(description, id) {
        await actions.getInfoDetail(description, id)
    }

    async function setOneFavorite(name, description, id) {
        await actions.setFavorite(name, description, id), 
        console.log(store.favorites)
    }

	return (
    <>
        <div className="col-sm-3 mb-4">
            <div className="card">
                <img src={rigoImage} className="card-img-top" alt="..." height="180em" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis vero. Corporis minima incidunt accusantium nihil natus id odio beatae, ipsum soluta dolore iure dolorem eveniet, ullam tempora eaque ad!
                    </p>
                    <button className="btn btn-outline-primary mx-3" onClick={() => getOneDetail(description, id)}>
                        <Link to={ `/${description}/${id}` }>
                            Learn more!
                        </Link>
                    </button>
                    <button className="btn btn-outline-warning mx-3" onClick={() => setOneFavorite(name, description, id)}>
                        <FaHeart />
                    </button>
                </div>
            </div>   
        </div>
    </>
	);
};

export default Card;
