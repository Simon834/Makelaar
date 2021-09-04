import { FILTER_PRICE,SEARCH } from "../Constants/constants"

export function filterByConstant(constant,id) {
    return (
        dispatch => {

            dispatch({ type: constant, payload: id })
        }
    )
}

export function filterByPrice(price) {
    return (
        dispatch => {

            dispatch({ type: FILTER_PRICE, payload: price })
        }
    )
}

export function searchAction(search) {
    return (
        dispatch => {

            dispatch({ type: SEARCH, payload: search })
        }
    )
}