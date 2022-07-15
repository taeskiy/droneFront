import React from 'react';

import Logo from 'assets/icon/logo.svg'
import {NavLink} from "react-router-dom";

import './header.scss'

const Header = () => {

    return (
        <div className="wrapper__header">
            <div className="container">
                <div className="header">

                    <div className="logo__wrapper">
                        <NavLink to="/">
                            <img src={Logo} alt=""/>
                        </NavLink>
                    </div>

                    <div className="input__wrapper">
                        <input type="text" placeholder="Search"/>
                    </div>

                    <div className="login__wrapper">
                        <NavLink to="basket">Basket</NavLink>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;