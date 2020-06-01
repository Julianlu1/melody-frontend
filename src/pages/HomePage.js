import React, { Component } from 'react';

import Hero from '../components/Homepage/Hero';
import Componist from '../components/Homepage/Componist';
import Footer from './../components/General/Footer';

export default class Homepage extends Component {

    render() {
        window.sessionStorage.setItem('isHomepage', true);
        return (
            <div className="homepageBackground">
                <div className="container">
                    <Hero />
                    <Componist />
                    <Footer />
                </div>
            </div >

        )
    }
}