import React from 'react';

import {useRequest} from "../../hooks/useRequest";

import './style.scss'

const Products = () => {
    const {data} = useRequest('/products/')


    return (
        <div>
            <div className="container">
                <div className="product__wrapper">

                    {data?.results?.map(item => (
                        <div className="product" key={item.id} >
                            <img src={item.image} alt=""/>

                            <div className="information">
                                <h4>{item.title}</h4>

                                <button>Buy</button>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Products;