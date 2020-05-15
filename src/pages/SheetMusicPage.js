import React, { Component } from 'react';

import Global from "../services/Global";

import SheetMusic from '../components/SheetMusic';
import Filter from '../components/Filter';

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
        fetch(`${Global.restServer}/sheetmusic`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ sheetmusic: data });
            })
            .catch(console.log)
    }

    handleFilter(instrument, componist) {
        let filterString = "";

        console.log(instrument, componist);
        if (instrument != "" && componist != "") {
            filterString += `?componist=${componist}&?instrument=${instrument}`;
        }
        else if (instrument != "") {
            filterString += `?instrument=${instrument}`;
        }
        else if (componist != "") {
            filterString += `?componist=${componist}`;
        }
        fetch(`${Global.restServer}/sheetmusic/filter${filterString}`, {
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
