import {takeEvery, put, call} from "redux-saga/effects";

import * as actions from "../actions";
import { getPokemonDetails } from "../api";

function* getPokemonDetailsWorker({ payload }) {  
    try {
        const response = yield call(getPokemonDetails, payload);

        yield put(actions.GET_POKEMON_DETAILS_SUCCESS(response.data));
    } catch (error) {
        yield put(actions.GET_POKEMON_DETAILS_FAIL(error.message));
    }
}

function* getPokemonDetailsWacher () {
    yield takeEvery(actions.GET_POKEMON_DETAILS_REQUEST, getPokemonDetailsWorker);
}

export default getPokemonDetailsWacher;