import React, { Component, Fragment } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import Index from './components/core/Index'

class App extends Component {
    render() {
        return (
            <Fragment>
                <CssBaseline />
                {/*
                    * TODO: should be more sophisticated,
                    * ...implement logic for checking out if loged in for example*/
                }
                <Index />
            </Fragment>
        )
    }
}

export default App
