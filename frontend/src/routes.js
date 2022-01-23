import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// local
import Home from './pages/home';

const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route component={Home} exact path='/' />
                </Switch>
            </Router>
        </>
    );
}
 
export default Routes;