import { ADD_FAVORITES } from "../Constants/constants";

export function addFavorite(obj) {
    return {
        type: ADD_FAVORITES,
        payload: obj,
    };
}
