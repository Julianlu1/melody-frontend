import React, { Component } from 'react';
import styles from '../../css/Hero.module.css'

const buttonStyle = {
    marginRight: '50px'
}

export default class Hero extends Component {
    render() {
        return (
            <div className={styles.hero}>
                <h1>Melody <br /> Grootste bladmuziekcollectie op het web</h1>
                <a className="btn btn-full" style={{ marginRight: "15px" }} href="/sheetmusic">bladeren</a>
                <a className="btn btn-full" href="/register">Registreer</a>
            </div>
        )
    }
}