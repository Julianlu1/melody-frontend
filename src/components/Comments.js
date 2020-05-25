import React, { useState, useEffect } from 'react';
import { Divider, Avatar, Grid, Paper, Button } from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { makeStyles } from '@material-ui/core/styles';

// STYLES
const useStyles = makeStyles(theme => ({
    title: {
        margin: 0,
        textAlign: "left"
    },
    description: {
        textAlign: "left",
        marginLeft: "0",
        marginRight: "0"
    },
    subDescription: {
        textAlign: "left",
        color: "gray",
        marginLeft: "0",
        marginRight: "0"
    }
}))


function Comments(props) {
    const classes = useStyles();
    console.log(props);
    const [commentNr, setCommentNr] = useState(0);

    function handleBack() {
        // console.log(props[0]);

        if (commentNr != 0) {
            setCommentNr(commentNr - 1);
            console.log("BACK");
        }
        console.log(commentNr);

    }

    function handleForward() {
        if (commentNr < (props.comments.length - 1)) {
            setCommentNr(commentNr + 1);
        }
        console.log(commentNr);
    }

    return (
        <div>
            <h2>Comments</h2>
            <Paper style={{ padding: "40px 20px", marginTop: "15px" }}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar alt="Remy Sharp" src="https://cdn4.iconfinder.com/data/icons/human-user-business-person-avatars/100/23A-1User-512.png" />
                    </Grid>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                        <h4 className={classes.title}>{props.comments[commentNr].username} {props.comments[commentNr].score}  x <FavoriteIcon style={{ color: "#ff6d75" }} fontSize="small" /></h4>
                        <p className={classes.description}>
                            {props.comments[commentNr].description}
                        </p>
                        <p className={classes.subDescription}>
                            posted 1 minute ago
            </p>
                    </Grid>
                </Grid>
            </Paper>
            <div style={{ textAlign: "center" }}>
                <Button onClick={handleBack}><ArrowBackIcon /></Button>
                <Button onClick={handleForward}><ArrowForwardIcon /></Button>
            </div>
        </div>
    )
}

export default Comments;