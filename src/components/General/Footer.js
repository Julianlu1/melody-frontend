import React from 'react';

import Logo from '../../img/logo.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import '../../css/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="social-icons">
                <FacebookIcon style={{ marginRight: "20px", fontSize: "34px" }} className="icon" />
                <InstagramIcon style={{ marginRight: "20px", fontSize: "34px" }} className="icon" />
                <TwitterIcon style={{ fontSize: "34px" }} className="icon" />
            </div>
            <div className="links">
                <ul>
                    <li><a href="#">Bladmuziek</a></li>
                    <li><a href="#">Registreren</a></li>
                    <li><a href="#">Link 3</a></li>
                    <li><a href="#">Link 4</a></li>
                    <li><a href="#">Link 5</a></li>
                </ul>
            </div>
            <div className="copright">
                <p>Copyright © 2020 Melody - Bladmuziek applicatie</p>
            </div>


        </div>
    )
}

export default Footer;