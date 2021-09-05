import { ADD_FAVORITES, DELETE_FAVORITE } from "../Constants/constants";

export function addFavorite(obj) {
    return {
        type: ADD_FAVORITES,
        payload: obj,
    };
}

export function deleteFavorite(id){
    return{
        type: DELETE_FAVORITE,
        payload: id
    }
}
