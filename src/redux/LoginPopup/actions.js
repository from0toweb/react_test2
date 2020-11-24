import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT } from './types';

const users = [
    {
        userName: 'newsAdmin',
        password: 'admin12345',
        userType: 'admin',
    },
    {
        userName: 'KoliaUser',
        password: 'kolia25121990',
        userType: 'user',
    },
];
const loginSeccuess = data => {
    return {
        type: LOGIN_SUCCESS,
        payload: data,
    };
};

const loginFailed = err => {
    return {
        type: LOGIN_FAILED,
        payload: err,
    };
};

export const logOut = () => {
    return {
        type: LOGOUT,
    };
};

export function logIn(data) {
    const error = 'Проверьте правильность данных';
    const result = users.filter(
        item =>
            item.userName === data.userName && item.password === data.password
    );

    if (result.length !== 0) {
        return dispatch => {
            dispatch(loginSeccuess(...result));
        };
    } else {
        return dispatch => {
            dispatch(loginFailed(error));
        };
    }
}
