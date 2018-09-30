import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({

})

class MainContainer extends Component {
    render() {
        const {classes, children} = this.props
        return (
            <main className={classes.container}>
                <Paper elevation={4}>
                    {children}
                </Paper>
            </main>
        )
    }
}

export default withStyles(styles)(MainContainer)