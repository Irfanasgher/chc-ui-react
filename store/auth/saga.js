import { all, put, takeEvery } from 'redux-saga/effects';
import {notification } from 'antd';

import { actionTypes, loginSuccess, logOutSuccess, registerSuccess } from './action';

const modalSuccess = type => {
    notification[type]({
        message: 'Wellcome back',
        description: 'Logined successfully!',
    });
};
// const modalRegisterSuccess = (type, message) => {
//     notification[type]({
//         message: 'Success',
//         description: message,
//     });
// };

const modalWarning = type => {
    notification[type]({
        message: 'Success!',
        description: 'Your account has been logged out!',
    });
};

function* loginSaga() {
    try {
        yield put(loginSuccess());
        modalSuccess('success');
    } catch (err) {
        console.log(err);
    }
}
function* registerSaga() {
    try {
        yield put(registerSuccess());
        // modalRegisterSuccess('success');
    } catch (err) {
        console.log(err);
    }
}

function* logOutSaga() {
    try {

        yield put(logOutSuccess());
        localStorage.removeItem('userToken')
        localStorage.removeItem('currentUser')
        modalWarning('warning');

    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.LOGIN_REQUEST, loginSaga)]);
    yield all([takeEvery(actionTypes.LOGOUT, logOutSaga)]);
    yield all([takeEvery(actionTypes.REGISTER_REQUEST, registerSaga)]);
}
