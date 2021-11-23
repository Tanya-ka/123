import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { createBlacklistFilter } from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";

import pokemonsPageReducer from "../pages/PokemonsPage/reducers";
// import pokemonsDetailsPageReducer from "../pages/PokemonDetailPage/reducers";
import authReducer from "../pages/LoginPage/reducers";
import regReducer from "../pages/MySignUpPage/reducers";

const authBlackListedFields = createBlacklistFilter('auth', [
    'isLoading',
    'errors',
]);

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['auth'],
    transform: [authBlackListedFields], 
};

const rootReducer = combineReducers({
    auth: authReducer, 
    // countersPage: countersPageReducer,
    // todoPage: todoListPageReducer,
    pokemonsPage: pokemonsPageReducer,
    // pokemonDetails: pokemonsDetailsPageReducer,
});

export default persistReducer(persistConfig, rootReducer);