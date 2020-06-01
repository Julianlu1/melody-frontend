import React, { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import styles from '../../css/SheetMusic.module.css';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    documentSize: {
        height: 300
    },
    center: {
        textAlign: 'center'
    }
}))

function SheetMusic(props) {
    const classes = useStyles();

    const [state, setState] = React.useState({
        checkedPlayed: false,
    });

    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    console.log(props.sheet);

    function onDocumentLoadSuccess(numPages) {
        const sNumber = numPages._pdfInfo.numPages;
        setNumPages(sNumber);
    }

    function handlePdfViewer() {
        console.log("test");
        pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    useEffect(() => {
        handlePdfViewer();
    }, [])

    return (
        <div>

            <Card className={styles.root}>
                <CardActionArea>
                    <Document
                        file={"http://localhost:8090/images/" + props.sheet.pdf}
                        onLoadSuccess={onDocumentLoadSuccess.bind(this)}
                        onLoadError={console.error}
                    >
                        <Page pageNumber={pageNumber} height={300} width={250} />
                    </Document>
                    <p className={classes.center}>Page {pageNumber} of {numPages}</p>
                </CardActionArea>
                <CardContent>
                    <Typography
                        className={styles.title}
                        color="textSecondary"
                        gutterBottom>
                        {props.sheet.componist}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        <a href={`/sheetmusic/${props.sheet.id}`}>{props.sheet.title}</a>

                    </Typography>
                    <Typography className={styles.pos} color="textSecondary">
                        key {props.sheet.key}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {props.sheet.instrument_Description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" variant="outlined" href={`/sheetmusic/${props.sheet.id}`}>Details</Button>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.checkedPlayed}
                                onChange={handleChange}
                                name="checkedPlayed"
                                color="primary"
                            />
                        }
                        label="Gespeeld"
                    />                </CardActions>
            </Card>
            {/* <Document file={pdfString} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document> */}
            {/* <iframe width='100%' height='100%' src={"data:application/pdf;base64," + props.sheet.pdf} ></iframe> */}
        </div >
    )
}

export default SheetMusic