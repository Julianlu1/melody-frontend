import React, { Component } from 'react';
import SheetMusic from '../components/SheetMusic';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";


export default class SheetMusicPage extends Component {
    state = {
        sheetmusic: []
    }

    componentDidMount() {
        fetch('http://localhost:8090/sheetmusic')
            .then(res => res.json())
            .then((data) => {
                this.setState({ sheetmusic: data });
            })
            .catch(console.log)
    }

    testFunction() {
        var pdfAsDataUri = "data:application/pdf;base64," + this.state.sheetmusic[0].pdf;
        console.log(pdfAsDataUri);
        this.state.pdfAsUri = pdfAsDataUri;
        // let pdfWindow = window.open("")
        // pdfWindow.document.write(
        //     "<iframe width='100%' height='100%' src='data:application/pdf;base64, " +
        //     encodeURI(this.state.sheetmusic[0].pdf) + "'></iframe>"
        // )
    }

    render() {
        return (
            <div className="container">
                <h2>Blader hier door bladmuziek.</h2>
                <p>Filter opties</p>
                <GridList cols={4} cellHeight={600}>
                    {this.state.sheetmusic.map((item) => (
                        <GridListTile key={item.id}>
                            <SheetMusic key={item.id} sheet={item} />
                        </GridListTile>
                    ))}
                </GridList>
            </div >
        )
    }
}
