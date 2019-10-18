import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Components
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';


export default (
    <Switch>
        <Route component={Dashboard} exact path='/' />
        <Route component={Form} path='/add' />
    </Switch>
)