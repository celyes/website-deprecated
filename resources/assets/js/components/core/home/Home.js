import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Hidden from '@material-ui/core/Hidden'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import MainContent from './mainContent/MainContent'
import Sidebar from './sidebar/Sidebar'

const styles = theme => ({
    mainFeaturedPost: {
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing.unit * 4,
    },
    mainFeaturedPostContent: {
      padding: `${theme.spacing.unit * 6}px`,
      [theme.breakpoints.up('md')]: {
        paddingRight: 0,
      },
    },
    card: {
      display: 'flex',
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
})

const featuredPosts = [
    {
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
      title: 'Post title',
      date: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
];

class Home extends Component {
    render () {
        const {classes} = this.props
        return (
            <main>
                {/* Main featured post */}
                <Paper className={classes.mainFeaturedPost}>
                    <Grid container>
                        <Grid item md={6}>
                            <div className={classes.mainFeaturedPostContent}>
                            <Typography variant="display2" color="inherit" gutterBottom>
                                Title of a longer featured blog post
                            </Typography>
                            <Typography variant="headline" color="inherit" paragraph>
                                Multiple lines of text that form the lede, informing new readers quickly and
                                efficiently about what&apos;s most interesting in this post&apos;s contents.
                            </Typography>
                            <Typography variant="title" color="inherit">
                                Continue reading...
                            </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
                {/* End main featured post */}

                {/* Sub featured posts */}
                <Grid container spacing={40} className={classes.cardGrid}>
                    {featuredPosts.map(post => (
                        <Grid item key={post.title} xs={12} md={6}>
                            <Card className={classes.card}>
                                <div className={classes.cardDetails}>
                                    <CardContent>
                                        <Typography variant="headline">{post.title}</Typography>
                                        <Typography variant="subheading" color="textSecondary">
                                            {post.date}
                                        </Typography>
                                        <Typography variant="subheading" paragraph>
                                          {post.description}
                                        </Typography>
                                        <Typography variant="subheading" color="primary">
                                          Continue reading...
                                        </Typography>
                                    </CardContent>
                                    <Hidden xsDown>
                                        <CardMedia
                                        className={classes.cardMedia}
                                        image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                                        title="Image title"
                                        />
                                    </Hidden>
                                </div>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Grid container spacing={40} className={classes.mainGrid}>
                    <MainContent />
                    <Sidebar />
                </Grid>
            </main>
        )
    }
}
export default withStyles(styles)(Home)