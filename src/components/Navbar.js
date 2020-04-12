import React, { Component } from 'react';
import styles from '../css/Navbar.module.css'
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';
import Login from './Login';

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className={styles.row}>
                    <img src={Logo} alt="Melody logo" className={styles.logo} />
                    <ul className={styles.mainNav}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/sheetmusic">Sheet music</Link>
                        </li>
                        <li>
                            <Login />
                        </li>
                    </ul>
                </div >
            </nav>
        )
    }
}