import {ActionType, FilmsState} from "./types";
import {SET_CURRENT_FILM, SET_FILMS} from "../actions";

const initialState: FilmsState = {
    films: [],
    currentFilm: null
}

const filmsReducer = (state = initialState, action: ActionType): FilmsState => {
    const { type, payload } = action;

    switch (type) {
        case SET_FILMS:
            return {
                ...state,
                films: payload
            }
        case SET_CURRENT_FILM:
            return {
                ...state,
                currentFilm: payload
            }
        default:
            return state;
    }
}


export default filmsReducer;