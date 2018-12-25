import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import incrementReducer from './incrementReducer';
import authReducer from './authReducer';

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    count: incrementReducer
});