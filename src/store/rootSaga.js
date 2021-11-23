import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";
import getPokemonsWatcher from "../pages/PokemonsPage/sagas";
// import getPokemonDetailsWacher from "../pages/PokemonDetailPage/sagas";
import apiCallsSaga from "../pages/helpers/request/watchRequest";

function* rootSaga() {
    // yield all([getPokemonsWatcher(), getPokemonDetailsWacher()]);
    yield all([apiCallsSaga()]);
}

export default rootSaga;