import React from 'react';

import Banner from "components/Banner";
import AboutUs from "components/AboutUs";
import HowItWorks from "components/HowItWorks";
import MainPageCoffeeHouse from "components/MainPageCoffeHouse";
import Footer from "components/Footer";

import {useRequest} from "../../hooks/useRequest";

const MainPage = () => {
    const {data} = useRequest('/restaurants/')

    return (
        <div>
            <Banner/>
            <AboutUs/>
            <HowItWorks/>
            <MainPageCoffeeHouse
                coffeeHouseList={data?.results}
            />
            <Footer/>
        </div>
    );
};

export default MainPage;