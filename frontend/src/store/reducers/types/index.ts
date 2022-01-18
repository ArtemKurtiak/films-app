import {rootReducer} from "../index";

export type ActionType = {
    type: string;
    payload: any;
}

export type RootReducerType = ReturnType<typeof rootReducer>;
export * from './cart.types';
export * from './films.types';
