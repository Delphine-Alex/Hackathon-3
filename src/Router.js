import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';


const RouterWebSite = () => {
    return (
        <Switch>
            <Route exact path="/" />
            <Route path="/categories"/>
            <Route path="/categories/drinks"/>
            <Route path="/categories/goodies" />
            <Route path="/categories/candy" />
            <Route path="/panier"/>
        </Switch>
    );
};

export default RouterWebSite;
