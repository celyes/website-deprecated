import React, {Component, Fragment} from 'react'
import { withStyles } from '@material-ui/core/styles'

import Header from './header/Header'
import MainContainer from './../controls/MainContainer'
import Routes from './Routes'

const styles = theme => ({
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        width: 1100,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },

})

class Home extends Component {
    render() {
        const {classes} = this.props
        return (
            <Fragment>
                <div className={classes.layout}>
                    <Header />
                    
                    <MainContainer>
                        <Routes />
                    </MainContainer>
                </div>
            </Fragment>
        )
    }
}

export default withStyles(styles, {withTheme: true})(Home)