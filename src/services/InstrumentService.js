import React from 'react';
import Global from '../services/Global';

export function getInstruments() {
    return fetch(`${Global.restServer}/instrument`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
    }).then(response => {
        return response;
    })
}