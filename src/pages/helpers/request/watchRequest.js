import { call, put, takeEvery } from "redux-saga/effects";
import { isEmpty } from "lodash";

import { ACTION_POSTFIXES } from "../../../constants/actionPostfixes";

import apiCallsMapping from "../../../http/apiCallsMapping";
import createActionWithPostfix from "../utils/actionPostfixCreator";

const { REQUEST_POSTFIX, SUCCESS_POSTFIX, FAIL_POSTFIX } = ACTION_POSTFIXES;

function* sendRequest(action) {
    try {
        const callRequest = apiCallsMapping(action);
        const response = yield call(callRequest, action.payload);

        yield put(
            createActionWithPostfix(
                action, 
                {
                    // response: !isEmpty(response) ? response.data : {},
                    response: response.data,
                    actionPayload: action.payload,
                },
                SUCCESS_POSTFIX
            )
        );
    } catch (error) {
        yield put(
            createActionWithPostfix(
                action,
                {
                    // response: !isEmpty(error.response) ? error.response.data.message : "",
                    // response: error.message, для покемонов

                    // response: error.response,
                    response: error.response.data.message,
                },
                FAIL_POSTFIX
            )
        );
    }
}


const isApiCallAction = (action) => action.type.endsWith(REQUEST_POSTFIX);


function* apiCallsSaga() {
    yield takeEvery(isApiCallAction, sendRequest);
}

export default apiCallsSaga;

