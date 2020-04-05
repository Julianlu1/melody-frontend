import React, { useState } from 'react'
import { Document, Page } from 'react-pdf';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import styles from '../css/SheetMusic.module.css';


function SheetMusic(props) {
    console.log(props.sheet);
    const pdfString = "data:application/pdf;base64," + props.sheet.pdf;

    // function onDocumentLoadSuccess(numPages) {
    //     setNumPages(numPages)
    //     console.log("test");
    // }
    return (
        <div>
            <Card className={styles.root}>
                <CardActionArea>
                    <CardMedia className={styles.media} image="https://historiek.net/wp-content/uploads-phistor1/2016/12/Johann-Sebastian-Bach.jpeg" title="Bach" />
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
                        {props.sheet.instrument}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" variant="outlined" href={`/sheetmusic/${props.sheet.id}`}>Details</Button>
                </CardActions>
            </Card>
            {/* <Document file={pdfString} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document> */}
            {/* <iframe width='100%' height='100%' src={"data:application/pdf;base64," + props.sheet.pdf} ></iframe> */}
        </div >
    )
}

export default SheetMusic