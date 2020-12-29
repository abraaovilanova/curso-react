import React from 'react'
import { Switch, Route } from 'react-router-dom' 

import About from '../../views/exemples/About'
import Home from '../../views/exemples/Home'
import NotFound from '../../views/exemples/NotFound'
import Param from '../../views/exemples/Param'

import './Content.css'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route path="/about">
                <About />
            </Route>

            <Route path="/param/:id">
                <Param />
            </Route>

            <Route path="/param/:id">
                <Param />
            </Route>

            <Route exact path="/">
                <Home />
            </Route>

            <Route path="*">
                <NotFound />
            </Route>

        </Switch>
    </main>
)

export default Content