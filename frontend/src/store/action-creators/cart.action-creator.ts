import {Dispatch} from "redux";
import {AxiosResponse} from "axios";

import {operateWithFilmType} from "./types";
import {deleteApiService, getApiService, postApiService} from "../../services";
import {ApiRoutesEnum} from "../../constants/apiRoutes.enum";
import {SET_CART_FILMS} from "../actions";


export const addFilmToCartActionCreator = (data: operateWithFilmType) => async (dispatch: Dispatch) => {
    try {
        const response: AxiosResponse = await postApiService(`${ApiRoutesEnum.addToCart}`, data);

        dispatch({
            type: SET_CART_FILMS,
            payload: response.data
        });

        alert('Added')
    } catch (e: any) {
        alert(e.response.data.message)
    }
}

export const getFilmsFromCartActionCreator = () => async (dispatch: Dispatch) => {
    try {
        const response: AxiosResponse = await getApiService(`${ApiRoutesEnum.cart}`);

        dispatch({
            type: SET_CART_FILMS,
            payload: response.data
        })
    } catch (e) {
        console.log('Error')
    }
}

export const deleteFilmFromCartActionCreator = (data: operateWithFilmType) => async (dispatch: Dispatch) => {
    try {
        await deleteApiService(`${ApiRoutesEnum.removeFromCart}`, data);
    } catch (e) {
        console.log('Error')
    }
}