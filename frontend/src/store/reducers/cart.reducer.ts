
import {ActionType, CartState} from "./types";
import {SET_CART_FILMS} from "../actions";

const initialState: CartState = {
    films: [],
}

const filmsReducer = (state = initialState, action: ActionType): CartState => {
    const { type, payload } = action;

    switch (type) {
        case SET_CART_FILMS:
            return {
                ...state,
                films: payload
            }
        default:
            return state;
    }
}


export default filmsReducer;