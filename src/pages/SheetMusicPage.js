import React, { Component } from 'react';

import { RESTSERVER } from "../services/Global";

import SheetMusic from '../components/Sheetmusic/SheetMusic';
import Filter from '../components/Sheetmusic/Filter';

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";


export default class SheetMusicPage extends Component {
    state = {
        sheetmusic: []
    }

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        fetch(`${RESTSERVER}/sheetmusic`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ sheetmusic: data });
            })
            .catch(console.log)
    }

    handleFilter(filter) {
        let filterString = "?";
        // Filteren werkt nu, getest in postman
        // Nu nog request uitvoeren
        Object.entries(filter).forEach(([key, val]) => {
            console.log(key); // the name of the current key.
            console.log(val); // the value of the current key.
            if (val != "") {
                console.log("")
                filterString += key + "=" + val + "&";
            }

        });

        console.log(filterString);

        fetch(`${RESTSERVER}/sheetmusic/filter${filterString}`, {
            method: "get",
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json())
            .then((data) => {
                this.setState({ sheetmusic: data });
            })
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
        window.sessionStorage.setItem('isHomepage', false);
        return (
            <div className="container" >
                <h2>Blader hier door bladmuziek.</h2>
                <Filter doSomethingWhenFilterClicked={this.handleFilter.bind(this)} />
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
