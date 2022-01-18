import {AppRouteType} from "../types";
import FilmsPage from "../pages/FilmsPage/FilmsPage";
import CartPage from "../pages/CartPage/CartPage";

export const appRoutes: AppRouteType[] = [
    {
        id: 1,
        path: '/',
        Screen: FilmsPage
    },
    {
        id: 2,
        path: '/cart',
        Screen: CartPage
    },
]