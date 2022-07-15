import React from 'react';

import "../CoffeHouse.scss"

const CoffeeHouseInfo = ({coffeeHouse}) => {
    return (
        <div className="wrapper__coffee__house">
            <div className="container">
                <div className="coffee__house">

                    <img src={coffeeHouse?.image} alt="Logo"/>

                    <div className="coffee__house__info">
                        <h4>{coffeeHouse?.name}</h4>

                        <p>Tags:</p>
                        <div className="tags__list">
                            <div className="tag">Coffee</div>
                            <div className="tag">Coffee</div>
                            <div className="tag">Coffee</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CoffeeHouseInfo;