import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_PAGE, GET_POKEMONS_REQUEST } from '../actions';
import PokemonPageLayout from '../components/PokemonPageLayout';
import {useHistory} from "react-router-dom";

const PokemonPageContainer = () => {
    const dispatch = useDispatch();

    const history = useHistory();

    const { list, isLoading, error, currentPage } = useSelector((state) => state.pokemonsPage);


    const handleGoToDetails = useCallback((id) => {
        // history.push(`/pokemon/${pokemonName}`)
        history.push(`/product/${id}`)
    },[]);

    const handlePageChange = useCallback(
        (page) => {
            dispatch(CHANGE_PAGE(page));
        },[dispatch]
    );

    useEffect(() => {
        dispatch(GET_POKEMONS_REQUEST(currentPage));
    }, [currentPage]);

    return (
    <PokemonPageLayout 
    list={list} 
    isLoading={isLoading} 
    handleGoToDetails={handleGoToDetails}
    handlePageChange={handlePageChange} 
    currentPage={currentPage}
    />)
};

export default PokemonPageContainer;