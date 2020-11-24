import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT } from './types';

const initialState = {
    userName: '',
    password: '',
    userType: '',
    error: null,
};

export default function popupReduser(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                userName: action.payload.userName,
                password: action.payload.password,
                userType: action.payload.userType,
                error: null,
            };
        case LOGIN_FAILED:
            return {
                ...state,
                userName: '',
                password: '',
                userType: '',
                error: action.payload,
            };
        case LOGOUT:
            return {
                ...state,
                userName: '',
                password: '',
                userType: '',
                error: null,
            };
        default:
            return state;
    }
}
