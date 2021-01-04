import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './Content.css'

import UseMemo from '../../views/examples/UseMemo'
import UseRef from '../../views/examples/UseRef'
import UseEffect from '../../views/examples/UseEffect'
import UseState from '../../views/examples/UseState'
import Home from '../../views/examples/Home'
import UseCallback from '../../views/examples/UseCallback'
import UseContext from '../../views/examples/UseContext'
import UseReducer from '../../views/examples/UseReducer'
import UseCustom from '../../views/examples/UseCustom'

const Content = props => {
    return (
        <div className="Content">
            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/usestate">
                    <UseState />
                </Route>

                <Route path="/useeffect">
                    <UseEffect />
                </Route>

                <Route path="/useref">
                    <UseRef />
                </Route>

                <Route path="/usememo">
                    <UseMemo />
                </Route>

                <Route path="/usecallback">
                    <UseCallback />
                </Route>

                <Route path="/usecontext">
                    <UseContext />
                </Route>

                <Route path="/usereducer">
                    <UseReducer />
                </Route>

                <Route path="/usemyhook">
                    <UseCustom />
                </Route>

            </Switch>
            
        </div>
    )
}

export default Content