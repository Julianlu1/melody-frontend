import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import styles from '../css/SingleSheetMusicPage.css';

import StarRating from '../components/StarRating';

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
        marginTop: 25,
        marginLeft: '5%',
        marginRight: '5%',
        width: '90%'
    },
    rating: {
        marginLeft: 500
    },
    button: {
        marginTop: 50,
        marginRight: 10
    }
}));

function SingleSheetMusicPage(props) {
    const [sheetmusic, setSheetmusic] = useState([]);
    const [comment, setComment] = useState({
        description: '',
        score: 0
    });
    const filePath = `file:///D:/FontysICT/Semester%204/Fun4/Melody/melody-backend/target/classes/pdf/${sheetmusic.pdf}`;
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

    function downloadSheet() {
        window.open('http://localhost:8090' + "/images/" + sheetmusic.pdf);
    }

    // De waarde van de descriptionbox setten
    function handleChange(e) {
        setComment({
            ...comment,
            description: e.target.value
        });
    }

    // De score setten, je wil de score zetten van een comment
    function handleChangeRating(value) {
        setComment({
            ...comment,
            score: value
        });
    }

    function placeComment() {
        console.log(comment);
        debugger
        // Titel en description in variabele zetten
        fetch('http://localhost:8090/comments', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + window.sessionStorage.getItem("token")
            },
            body: JSON.stringify({
                sheetId: props.match.params.id,
                title: comment,
                description: "",
                score: 10
            })
        }).then(response => {
            response.json();
            console.log(response);
            if (response.ok) {
                console.log("comment geplaatst");
            } else {
                console.log("Niet gelukt");
            }
        })

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
                    <h1>{sheetmusic.title}</h1>
                    <CardMedia className={classes.sheetImage} image="https://musescore.com/static/musescore/scoredata/gen/6/0/7/3291706/7a70ebdcc95c47e646069960d4e97710703cad3d/score_0.png@500x660?no-cache=1579172803&bgclr=ffffff" title="Bach" />
                </Grid>
                <Grid item md={4}>
                    <h2>Details</h2>
                    <div className={classes.details}>
                        <h5 className={classes.p}>key {sheetmusic.key}</h5>
                        <h5 className={classes.p}>{sheetmusic.componist}</h5>
                        <h5 className={classes.p}>{sheetmusic.instrument}</h5>
                    </div>
                    <h2>Comment</h2>
                    <TextField
                        id="standard-multiline-static"
                        className={classes.textfield}
                        label="Reactie"
                        multiline
                        rows="7"
                        columns="3"
                        placeholder="Schrijf een reactie"
                        variant="filled"
                        onChange={handleChange}
                    />
                    <StarRating className={classes.rating} onSelectChange={handleChangeRating} />
                    <Button className={classes.button} variant="contained" color="primary" onClick={placeComment} >
                        Plaats reactie
                        </Button>
                    <Button className={classes.button} variant="contained" color="default" onClick={downloadSheet} >
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