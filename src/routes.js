import React from "react";

import {Switch, Route} from "react-router-dom";

import MainPage from "./containers/MainPage/MainPage";
import Basket from "./containers/Basket/Basket";
import Profile from "./containers/CoffeeHouse";
import CoffeeHouse from "./containers/CoffeeHouse";
import Products from "./containers/Products/Products";
import Header from "./components/Header";

export default () => (
    <>
        <Header/>

        <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/basket" component={Basket}/>
            <Route exact path="/coffee-house/:id" component={CoffeeHouse}/>
            <Route exact path="/products" component={Products}/>
            <Route exact path="/profile" component={Profile}/>
        </Switch>
    </>
)