import { 
    INCREMENT,
    SIGN_IN,
    SIGN_OUT
    } from './actions';
import history from "../../routes/history";

export const signIn = (userId) => {
    
    return {
        type: SIGN_IN,
        payload: userId
    }
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
};

export const increment = () => {

    return {
        type: INCREMENT
    }
}