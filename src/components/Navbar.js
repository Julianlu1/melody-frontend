import React, { Component } from 'react';
import styles from '../css/Navbar.module.css'
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';

// Login of dashboardpopover laten zien
import Login from './Login';
import DashboardPopover from './DashboardPopover';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const renderAccountSettings = () => {
            if (this.props.token != null) {
                return <DashboardPopover />
            } else {
                return <Login />
            }
        }
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
                            {renderAccountSettings()}
                        </li>
                    </ul>
                </div >
            </nav>
        )
    }
}