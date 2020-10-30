import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    root: {
        textAlign: 'center',
        marginTop: 20
    }
}

const Footer = ({ classes }) => (
    <div className={classes.root}>
            <p>Flex-Sheet</p>
            <p>Thomas Clark, Matthew Evangelidis, Justin Erasmus, Suphichaya Chaochuangchot</p>
    </div>
)

export default withStyles(styles)(Footer)