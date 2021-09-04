import { GET_USER_DETAIL } from "../Constants/constants";
import { getUserByIdApi } from "../../Functions/api/users";

export function getUserDetail(id){
return async function(dispatch){
    try{
        let user = await getUserByIdApi(id)
        return dispatch({
            type: GET_USER_DETAIL,
            payload: user
        })

    }catch(err){
        throw err
    }
}
}