import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Home from './Components/Home';
import Navbar from './Components/Navbar';
function RouterConfig() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/"><Home/></Route>
            </Switch>
        </Router>
    )
}

export default RouterConfig;


