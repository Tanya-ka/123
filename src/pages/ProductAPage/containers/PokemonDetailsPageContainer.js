import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import {GET_POKEMON_DETAILS_REQUEST} from "../actions";

const PokemonDetailedPageContainer = () => {
    const dispatch = useDispatch();

    const { info } = useSelector((state) => state.pokemonDetails);

    const { name } = useParams();

    useEffect(() => {
        dispatch(GET_POKEMON_DETAILS_REQUEST(name));
    }, [name]);


    return (
        <div>
            <h1>DETAILS!</h1>
            <h2>
                Hello, I'm {info.name} - {info.base_experience}

            </h2>
        </div>
    );
};

export default PokemonDetailedPageContainer;