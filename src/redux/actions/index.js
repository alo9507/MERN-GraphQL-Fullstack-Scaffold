import { INCREMENT } from './actions';
import history from "../../history";

export const increment = () => {

    return {
        type: INCREMENT
    }
}