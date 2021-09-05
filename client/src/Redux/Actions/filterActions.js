import { FILTER_PRICE,SEARCH,RESET_FILTER } from "../Constants/constants"

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

export function clearFilter() {
    return (
        dispatch => {
            dispatch({ type: RESET_FILTER })
        }
    )
}