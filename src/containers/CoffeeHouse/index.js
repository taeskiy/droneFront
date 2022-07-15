import React from 'react';

import CoffeeHouse from "./component/CoffeeHouseInfo"
import ProductCoffeeHouse from "./component/ProductCoffeeHouse";
import {useRequest} from "../../hooks/useRequest";

const Index = (props) => {
    const {id} = props.match.params;

    const {data} = useRequest(`/restaurants/${id}/`)

    return (
        <div>
            <CoffeeHouse
                coffeeHouse={data}
            />

            <ProductCoffeeHouse/>
        </div>
    );
};

export default Index;