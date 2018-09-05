import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './components/App';
import About from './components/About';
import Edit from './components/Edit';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/about' component={About} />
                <Route path='/edit' component={Edit} />
            </Switch>
        </BrowserRouter>
    )
}