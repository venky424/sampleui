import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import Countries from "./Countries";
import Currencies from "./Currencies";

class AppMenuSwitch extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/categories' component={Categories}></Route>
                <Route exact path='/countries' component={Countries}></Route>
                <Route exact path='/currencies' component={Currencies}></Route>
            </Switch>
        );
    }
}

export default AppMenuSwitch;