import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Menu from './components/layout/Menu'
import Content from './components/layout/Content'

import './App.css'

import DataContext, { data } from './data/DataContext'

const App = props => {

    const [state, setState] = useState(data)

    return (
        <div className="App">
            <DataContext.Provider value={{state, setState}}>
                <Router>
                    <Menu />
                    <Content />
                </Router>
            </DataContext.Provider>
        </div>
    )
}

export default App