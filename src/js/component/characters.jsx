import React, { useState, useEffect, useContext } from "react";
import Card from '../component/card.jsx';
import { Context } from "../store/appContext";

export const Character = () => {
    
    const { store, actions } = useContext(Context);
    const [ characters, setCharacters] = useState ([]);

    useEffect(() => {
        async function transformData() {
            await actions.getCharacters();
            const data = store.characters;
            setCharacters(data)
            console.log(store.characters)
        }
        transformData();
    }, [])

    return (
        <>
            <div className="text-center mt-3">
                <div className="row px-5 mx-5">
                    <h1 className="mb-4">Characters</h1>
                    { characters.map((character, index) => (
                        <Card 
                            name={character.name}
                            id={character.uid}
                            key={index}
                            description="people"
                        />
                    ))}
                </div>
            </div>
        </>
    )    
};