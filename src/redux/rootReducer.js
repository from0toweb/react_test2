import { combineReducers } from 'redux';
import popupReducer from './LoginPopup/reducer';
import { newsReducer } from './News/reducer';

export default combineReducers({
    popup: popupReducer,
    news: newsReducer,
});
