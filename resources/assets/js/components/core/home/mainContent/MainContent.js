import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

// import Markdown from './Markdown'

import posts from './../../../posts'

const styles = theme => {

}


class MainContent extends Component {
    render() {
        return (
            <Grid item xs={12} md={8}>
            <Typography variant="title" gutterBottom>
                From the Firehose
            </Typography>
            <Divider />
            {posts.map(post => (
                <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                    {post}
                </Markdown>
            ))}
            </Grid>
        );
    }
}

export default withStyles(styles)(MainContent)