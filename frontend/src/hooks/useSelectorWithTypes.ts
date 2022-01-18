import {TypedUseSelectorHook, useSelector} from "react-redux";

import {RootReducerType} from "../store/reducers/types";


export const useSelectorWithTypes: TypedUseSelectorHook<RootReducerType> = useSelector;