import React, { useState, useEffect, useContext } from "react";
import Card from '../component/card.jsx';
import { Context } from "../store/appContext";

export const Vehicles = () => {
    
    const { store, actions } = useContext(Context);
    const [ vehicles, setVehicles] = useState ([]);

    useEffect(() => {
        async function transformData() {
            await actions.getVehicles();
            const data = store.vehicles;
            setVehicles(data)
            console.log(store.vehicles)
        }
        transformData();
    }, [])

    return (
        <>
            <div className="text-center mt-3">
                <div className="row px-5 mx-5">
                    <h1 className="mb-4">Vehicles</h1>
                    { vehicles.map((vehicle, index) => (
                        <Card 
                            name={vehicle.name}
                            id={vehicle.uid}
                            key={index}
                            description="vehicles"
                        />
                    ))}
                </div>
            </div>
        </>
    )    
};