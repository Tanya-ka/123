import { handleActions } from "redux-actions";
// import { LOCAL_STORAGE_KEYS } from "../../../constants/localStorageKeys";

import * as actions from "../actions";

const defaultState = {
    isLoading: false,
    info: {},
    isReg: false,
    error: null,
};

const regReducer = handleActions(
    {
        [actions.SIGN_UP_REQUEST]: (state) => ({
            ...state,
            isLoading: true,
        }),
        [actions.SIGN_UP_SUCCESS]: (state, {payload}) => {
            const { ...userInfo } = payload;

            // localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, accessToken);

            return {
                ...state,
                isLoading: false,
                info: userInfo,
                error: null,
                isReg: true,
            };
        },
        [actions.SIGN_UP_FAIL]: (state, {payload}) => ({
            ...state,
            isLoading: false,
            error: payload,
        })
}, 
defaultState
);

export default regReducer;