import React from 'react';

import './aboutus.scss'
import {NavLink} from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="container">
            <h3 className="title">About FED<span>UP</span></h3>

            <div className="about">

                <div className="info">
                    <p>
                        FEDUP is a senior thesis project that wants to test the waters of deliveries via UAVs (Unmanned Aerial Vehicles) in Bishkek. The aim is to provide customers make orders via drones, as a means of shortening delivery time, reducing incurring costs of regular shipping by cars, and lorem ipsum
                    </p>
                </div>

                <div className="contact__us">
                    <ul>
                        <li>Faster than regular delivery</li>
                        <li>Delivery to any terrain</li>
                        <li>Eco-friendly option</li>
                    </ul>
                </div>

            </div>

            <h3 className="title">Want to try</h3>

            <div className="center">
                <NavLink to="products/">Order now</NavLink>
            </div>

        </div>
    );
};

export default AboutUs;