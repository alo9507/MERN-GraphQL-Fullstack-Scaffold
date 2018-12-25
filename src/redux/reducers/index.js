import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import incrementReducer from './incrementReducer';

export default combineReducers({
    form: formReducer,
    count: incrementReducer
});