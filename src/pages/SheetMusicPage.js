import React, { Component } from 'react';
import SheetMusic from '../components/SheetMusic';


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
                <h1>Hello from the sheet music page</h1>
                {this.state.sheetmusic.map((item) => (
                    <SheetMusic key={item.id} sheet={item} />
                ))}
            </div >
        )
    }
}
