import {combineReducers} from "redux";

import filmsReducer from "./films.reducer";
import cartReducer from "./cart.reducer";

export const rootReducer = combineReducers({
    films: filmsReducer,
    cart: cartReducer
})
