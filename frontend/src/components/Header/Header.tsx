import React from "react";
import {NavLink} from "react-router-dom";

import './Header.scss';

const Header: React.FC = () => {
    return <div className={'header'} >
        <div className={'page-links'}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/cart'}>Cart</NavLink>
        </div>
    </div>
}

export default Header;