import React, {Component, Fragment} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'


const styles = theme => ({
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
    },
})

const sections = [
    'Technology',
    'Design',
    'Culture',
    'Business',
    'Politics',
    'Opinion',
    'Science',
    'Health',
    'Style',
    'Travel',
]

class Header extends Component {
    render () {
        const {classes} = this.props
        return (
            <Fragment>
                <Toolbar className={classes.toolbarMain}>
                    <Button size="small">Subscribe</Button>
                    <Typography
                        variant="headline"
                        color="inherit"
                        align="center"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        Blog
                    </Typography>

                    <IconButton>
                        <SearchIcon />
                    </IconButton>

                    <Button variant="outlined" size="small">
                        Sign up
                    </Button>
                </Toolbar>
                <Toolbar variant="dense" className={classes.toolbarSecondary}>
                    {sections.map(section => (
                        <Typography color="inherit" noWrap key={section}>
                            {section}
                        </Typography>
                    ))}
                </Toolbar>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Header)