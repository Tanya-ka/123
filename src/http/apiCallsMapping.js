import * as pokemonsPageActions from "../pages/PokemonsPage/actions";
import * as pokemonsPageAPI from "../pages/PokemonsPage/api";

// import * as pokemonDetailsActions from "../pages/PokemonDetailPage/actions";
// import * as pokemonDetailsAPI from "../pages/PokemonDetailPage/api";

import * as loginPageActions from "../pages/LoginPage/actions";
import * as loginPageAPI from "../pages/LoginPage/api";

import * as singUpPageActions from "../pages/MySignUpPage/actions";
import * as singUpPageAPI from "../pages/MySignUpPage/api";


const apiCallsMapping = (action) => {
    const mapping = {
        [singUpPageActions.SIGN_UP_REQUEST]: singUpPageAPI.signUp,
        [loginPageActions.LOG_IN_REQUEST]: loginPageAPI.login,
        [pokemonsPageActions.GET_POKEMONS_REQUEST]: pokemonsPageAPI.getPokemons,

        // [pokemonDetailsActions.GET_POKEMON_DETAILS_REQUEST]: 
        // pokemonDetailsAPI.getPokemonDetails,
        
    };
    return mapping[action.type]
};

export default apiCallsMapping;