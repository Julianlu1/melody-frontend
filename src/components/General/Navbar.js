import React, { Component } from 'react';
import styles from '../../css/Navbar.module.css'
import { Link } from 'react-router-dom';
import Logo from '../../img/logo2.png';

// Login of dashboardpopover laten zien
import Login from '../Login';
import DashboardPopover from './DashboardPopover';

export default class Navbar extends Component {

    setStateHomeSheet() {
        this.state.isHome = false;
    }
    setStateHome() {
        this.state.isHome = true;
    }

    constructor(props) {
        super(props);
        this.state = {
            isHome: false
        };
    }
    render() {
        console.log(this.props);
        const renderAccountSettings = () => {
            if (this.props.token != null) {
                return <DashboardPopover />
            } else {
                return <Login />
            }
        }
        return (
            <div className={(this.state.isHome ? styles.navHome : styles.navGeneral)}>
                <nav>
                    <div className={styles.row}>
                        <img src={Logo} alt="Melody logo" className={styles.logo} />
                        <ul className={styles.mainNav}>
                            <li>
                                <Link onClick={this.setStateHome()} to="/">Home</Link>
                            </li>
                            <li>
                                <Link onClick={this.setStateHomeSheet()} to="/sheetmusic" >Sheet music</Link>
                            </li>
                            <li>
                                {renderAccountSettings()}
                            </li>
                        </ul>
                    </div >
                </nav>
            </div >
        )
    }
}