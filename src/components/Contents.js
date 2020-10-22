import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Chart from './Chart'
import Detail from './Detail';
import Home from './Home';
import Menu from './Menu';
import Register from './Register';
import RegisterList from './Register-list';

export default function Contents() {
    

    return (
        <>
            <Menu />
            <div className="content-wrapper">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/dashboard" component={Chart} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/register-list" component={RegisterList} />
                    <Route exact path="/student/:id" component={Detail} />
                </Switch>
            </div>
        </>
    )
}
