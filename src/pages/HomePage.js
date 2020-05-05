import React, { Component } from 'react';

import Hero from '../components/Hero';
import Componist from '../components/Componist';

export default class HomePage extends Component {

    render() {
        window.sessionStorage.setItem('isHomepage', true);
        return (
            <div className="homepageBackground">
                <div className="container">
                    <Hero />
                    <Componist />
                </div>
            </div >
        )
    }
}