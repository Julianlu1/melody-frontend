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


function Comments(...props) {
    const classes = useStyles();

    const [comments, setComments] = useState([
        {
            id: "1",
            username: "Henkjan",
            sheet_music_id: "43",
            description: "Hele mooi muziek bla bla bla bla bla bla bla bla bla",
            score: "8"
        },
        {
            id: "2",
            username: "Pietje",
            sheet_music_id: "43",
            description: "Hele lelijke muziek",
            score: "5"
        },
        {
            id: "3",
            username: "Peter",
            sheet_music_id: "43",
            description: "Hmmmmmm",
            score: "5"
        }
    ]);
    const [commentNr, setCommentNr] = useState(0);

    function checkComments() {
        if (props[0].item != null) {
            setComments(props[0].item, []);
        } else {
            console.log("Empty array");
        }
    }


    useEffect(() => {
        checkComments();
    }, []);


    function handleComments() {
        if (comments != null) {
            console.log("Test");
        }
    }

    function handleBack() {

        if (commentNr != 0) {
            setCommentNr(commentNr - 1);
            console.log("BACK");
        }
        console.log(commentNr);

    }

    function handleForward() {
        if (commentNr < (comments.length - 1)) {
            setCommentNr(commentNr + 1);
        }
        console.log(commentNr);
    }

    return (
        <div>
            <h2>Comments</h2>
            {comments.map((item) => (
                <h1>test</h1>
            ))}
            <Paper style={{ padding: "40px 20px", marginTop: "15px" }}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar alt="Remy Sharp" src="https://cdn4.iconfinder.com/data/icons/human-user-business-person-avatars/100/23A-1User-512.png" />
                    </Grid>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                        <h4 className={classes.title}>{comments[commentNr].username} {comments[commentNr].score}  x <FavoriteIcon style={{ color: "#ff6d75" }} fontSize="small" /></h4>
                        <p className={classes.description}>
                            {comments[commentNr].description}
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