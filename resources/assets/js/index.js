import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import {AppContainer} from 'react-hot-loader'

import App from './App'

ReactDOM.render(
    <AppContainer>
        <BrowserRouter>
            <Route component={App} />
        </BrowserRouter>
    </AppContainer>,
    document.getElementById('app')
)

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept();
}