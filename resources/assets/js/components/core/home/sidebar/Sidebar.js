import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    sidebarAboutBox: {
      padding: theme.spacing.unit * 2,
      backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
      marginTop: theme.spacing.unit * 3,
    },
})

const archives = [
    'March 2020',
    'February 2020',
    'January 2020',
    'December 2019',
    'November 2019',
    'October 2019',
    'September 2019',
    'August 2019',
    'July 2019',
    'June 2019',
    'May 2019',
    'April 2019',
  ];
  

const social = ['GitHub', 'Twitter', 'Facebook']

class Sidebar extends Component {
    render() {
        const {classes} = this.props
        return (
            <Grid item xs={12} md={4}>
                <Paper elevation={0} className={classes.sidebarAboutBox}>
                    <Typography variant="title" gutterBottom>
                    About
                    </Typography>
                    <Typography>
                    Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                    amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                    </Typography>
                </Paper>
                <Typography variant="title" gutterBottom className={classes.sidebarSection}>
                    Archives
                </Typography>
                {archives.map(archive => (
                    <Typography key={archive}>{archive}</Typography>
                ))}
                <Typography variant="title" gutterBottom className={classes.sidebarSection}>
                    Social
                </Typography>
                {social.map(network => (
                    <Typography key={network}>{network}</Typography>
                ))}
            </Grid>
        )
    }
}

export default withStyles(styles, {withTheme: true})(Sidebar)