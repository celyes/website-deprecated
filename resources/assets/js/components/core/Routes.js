import React from 'react'
import {Switch, Route} from 'react-router'

import Home from './home/Home'

const Routes = () => (
    <Switch style={{overflow: 'auto'}}>
        <Route exact path='/' component={Home} />
    </Switch>
)

export default Routes