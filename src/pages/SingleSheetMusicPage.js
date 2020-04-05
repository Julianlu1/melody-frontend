import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import styles from '../css/SingleSheetMusicPage.css';

const useStyles = makeStyles(theme => ({
    sheetImage: {
        height: 500,
    },
    details: {
        marginTop: 25,
        textAlign: 'center'
    },
    p: {
        marginTop: 5
    },
    textfield: {
        paddingTop: 25,
        width: 350,
        height: 125
    },
    button: {
        marginTop: 50,
        marginRight: 10
    }
}));

function SingleSheetMusicPage(props) {
    const [sheetmusic, setSheetmusic] = useState([]);
    const classes = useStyles();

    function getSheetmusic() {
        fetch('http://localhost:8090/sheetmusic/' + props.match.params.id)
            .then(res => res.json())
            .then((data) => {
                setSheetmusic(data);
                console.log(sheetmusic)
            })
            .catch(console.log)
    }

    // Voorkomt de infinite loop
    // Als sheetmusic id is veranderd wordt de functie nog een keer aangeroepen
    useEffect(() => {
        getSheetmusic();
    }, [sheetmusic.id])

    return (
        <div className="container">
            <Grid container spacing={3} >
                <Grid item md={4} className="section-1">
                    <h1>River Flows In You.</h1>
                    <CardMedia className={classes.sheetImage} image="https://musescore.com/static/musescore/scoredata/gen/6/0/7/3291706/7a70ebdcc95c47e646069960d4e97710703cad3d/score_0.png@500x660?no-cache=1579172803&bgclr=ffffff" title="Bach" />
                </Grid>
                <Grid item md={4}>
                    <h2>Details</h2>
                    <div className={classes.details}>
                        <h5 className={classes.p}>E Minor</h5>
                        <h5 className={classes.p}>Chopin</h5>
                        <h5 className={classes.p}>Piano</h5>
                    </div>


                    <h2>Comment</h2>
                    <TextField
                        id="standard-multiline-static"
                        className={classes.textfield}
                        label="Reactie"
                        multiline
                        rows="4"
                        placeholder="Schrijf een reactie"
                        style={{ textAlign: 'center' }}


                    />
                    <Button className={classes.button} variant="contained" color="primary">
                        Plaats reactie
                        </Button>
                    <Button className={classes.button} variant="contained" color="default">
                        Download sheet
                        </Button>
                </Grid>
                <Grid item md={4}>
                    <h2>Comments</h2>
                </Grid>

            </Grid>
        </div >
    )
}
export default SingleSheetMusicPage;