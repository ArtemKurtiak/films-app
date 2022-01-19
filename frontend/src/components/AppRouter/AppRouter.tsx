import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import {appRoutes} from "../../constants/appRoutes";
import {AppRouteType} from "../../types";
import Header from "../Header/Header";

const AppRouter: React.FC = () => {
    return <BrowserRouter>
        { appRoutes.map((item) => {
            const { path, Screen, id }: AppRouteType = item;
            return <Route key={id} path={path} exact>
                <Header />
                <Screen/>
            </Route>;
        }) }
    </BrowserRouter>
}

export default AppRouter;