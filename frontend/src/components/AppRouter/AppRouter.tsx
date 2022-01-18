import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import {appRoutes} from "../../constants/appRoutes";
import {AppRouteType} from "../../types";

const AppRouter: React.FC = () => {
    return <BrowserRouter>
        { appRoutes.map((item) => {
            const { path, Screen, id }: AppRouteType = item;
            return <Route key={id} path={path} exact>
                <Screen/>
            </Route>;
        }) }
    </BrowserRouter>
}

export default AppRouter;