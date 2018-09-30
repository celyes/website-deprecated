import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({

})

class MainContainer extends Component {
    render() {
        const {classes, children} = this.props
        return (
            <main>
                {children}
            </main>
        )
    }
}

export default withStyles(styles)(MainContainer)