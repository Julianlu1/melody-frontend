import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import styles from '../css/SingleSheetMusicPage.css';

import StarRating from '../components/StarRating';
import Comments from '../components/Comments';

const useStyles = makeStyles(theme => ({
    center: {
        textAlign: 'center',
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
        marginRight: 10
    }
}));

function SingleSheetMusicPage(props) {
    const classes = useStyles();
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    const [sheetmusic, setSheetmusic] = useState([]);
    const [comment, setComment] = useState({
        description: '',
        score: 0
    });
    window.sessionStorage.setItem('isHomepage', false);

    // PDF LOADER
    function onDocumentLoadSuccess(numPages) {
        const sNumber = numPages._pdfInfo.numPages;
        setNumPages(sNumber);
    }

    function handlePdfViewer() {
        pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }

    useEffect(() => {
        handlePdfViewer();
    }, [])
    //

    async function getSheetmusic() {
        await fetch('http://localhost:8090/sheetmusic/' + props.match.params.id)
            .then(res => res.json())
            .then((data) => {
                setSheetmusic(data);
                // console.log(sheetmusic)
                console.log(sheetmusic.comments[0]);

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
                description: comment.description,
                score: comment.score
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
                    <Document
                        file={"http://localhost:8090/images/" + sheetmusic.pdf}
                        onLoadSuccess={onDocumentLoadSuccess.bind(this)}
                        onLoadError={console.error}
                    >
                        <Page pageNumber={pageNumber} height={500} width={350} />
                    </Document>
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
                    <div className={classes.center}>
                        <Button className={classes.button} variant="contained" color="primary" onClick={placeComment} >
                            Plaats reactie
                        </Button>
                        <Button className={classes.button} variant="contained" color="default" onClick={downloadSheet} >
                            Download sheet
                    </Button>
                    </div>

                </Grid>
                <Grid item md={4}>
                    <Comments item={sheetmusic.comments} />
                </Grid>

            </Grid>
        </div >
    )
}
export default SingleSheetMusicPage;