import { ADD_FAVORITES } from "../Constants/constants";

export function addFavorite(id) {
    return {
        type: ADD_FAVORITES,
        payload: id,
    };
}
