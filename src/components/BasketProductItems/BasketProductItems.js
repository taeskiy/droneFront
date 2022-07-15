import React from 'react';


import Product from 'assets/image/coffee.jpeg'
import './basket.scss'

const BasketProductItems = () => {
    return (
        <div className="wrapper__basket">
            <div className="container">

                <div className="basket">

                    <div className="basket__item">
                        <div className="basket__item__image">
                            <img src={Product} alt="product"/>
                        </div>

                        <div className="basket__item__info">
                            <h4 className="basket__item__info__coffee__name">Бублик</h4>

                            <div className="basket__item__info__count">

                                <h4>Coffee</h4>
                                <button>-</button>
                                10
                                <button>+</button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default BasketProductItems;