import React from 'react';

import CoffeeHouseImage from 'assets/image/coffehouse.png'


import { NavLink } from "react-router-dom";

import './cofferHouse.scss'

const CoffeeHouse = ({coffeeHouseList}) => {
    return (
        <div className="wrapper__coffee__house">
            <p className="title">Coffee house:</p>
            <div className="container">
                <ul className="list__coffer__house">
                    {coffeeHouseList?.map(coffee => (
                        <li key={coffee?.id}>
                            <NavLink to={`coffee-house/${coffee?.id}`} >
                                <img src={coffee?.image} alt=""/>
                                <p>{coffee?.name} </p>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default CoffeeHouse;