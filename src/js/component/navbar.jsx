import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";
import sfLogo from "../../img/starwarslogo.png";
import { FaTrash } from "@react-icons/all-files/fa/FaTrash";

export const Navbar = () => {

    const { store, actions } = useContext(Context);

    async function deleteOneFavorite(name) {
        await actions.deleteFavorite(name), 
        console.log(store.favorites)
    }

	return (
        <>
            <nav className="navbar navbar-light bg-light mb-3 p-4">
                <Link to="/">
                   <img width="150px" src={sfLogo} />
                </Link>
                <div className="ml-auto">
                    <div className="btn-group">
                        <button type="button" className="btn btn-secondary p-3 mx-5 dropdown-toggle" data-bs-toggle="dropdown">
                            Favorites
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            {store.favorites.map((favorite, index) => (
                                <li key={index}>
                                    <button className="dropdown-item" type="button">
                                        {favorite.name}
                                        <FaTrash onClick={() => deleteOneFavorite(favorite.name)}/>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
	);
};
