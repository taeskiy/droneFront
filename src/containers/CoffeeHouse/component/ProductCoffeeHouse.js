import React from 'react';

import Coffee from 'assets/image/coffee.jpeg'
import '../CoffeHouse.scss'

const ProductCoffeeHouse = () => {
    return (
        <div className="container">
            <h4 className="title__product">Product:</h4>

            <div className="container">

                <div className="products">
                    <div className="product__item">
                        <img src={Coffee} alt="Coffee"/>

                        <div className="product__info">
                            <span className="price">100.00 сом</span>
                            <button>buy</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductCoffeeHouse;