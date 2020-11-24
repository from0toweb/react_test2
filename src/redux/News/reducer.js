import { ADD_NEWS, APPROVED_NEWS, DELETE_NEWS } from './types';

const initialState = {
    id: 0,
    newsList: [],
};

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEWS:
            return {
                ...state,
                id: state.id + 1,
                newsList: [
                    ...state.newsList,
                    { ...action.payload, id: state.id, status: 'moderation' },
                ],
            };
        case APPROVED_NEWS:
            return {
                ...state,
                newsList: action.payload,
            };
        case DELETE_NEWS:
            return {
                ...state,
                newsList: action.payload,
            };

        default:
            return state;
    }
};
