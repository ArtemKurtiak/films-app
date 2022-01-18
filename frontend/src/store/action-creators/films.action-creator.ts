import {Dispatch} from "redux";
import {AxiosResponse} from "axios";

import {getApiService} from "../../services";
import {ApiRoutesEnum} from "../../constants/apiRoutes.enum";
import {SET_CURRENT_FILM, SET_FILMS} from "../actions";

export const getFilmsActionCreator = (searchTerm: string) => async (dispatch: Dispatch) => {
    try {
        const response: AxiosResponse = await getApiService(ApiRoutesEnum.films, `?searchTerm=${searchTerm}`);

        dispatch({
            type: SET_FILMS,
            payload: response.data
        })
    } catch (e) {
        console.log('Error')
    }
}

export const getFilmDetailsActionCreator = (filmId: number) => async (dispatch: Dispatch) => {
    try {
        const response: AxiosResponse = await getApiService(`${ApiRoutesEnum.films}/${filmId}`);

        dispatch({
            type: SET_CURRENT_FILM,
            payload: response.data
        })
    } catch (e) {
        console.log('Error')
    }
}