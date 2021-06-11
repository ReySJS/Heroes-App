import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Home from '../../pages/Home'
import Details from '../../pages/Details'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/home" component={Home} />
                <Route path="/details/:hero_id" component={Details} />
            </Switch>
        </BrowserRouter>

    )
}
export default Router