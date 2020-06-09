import React from 'react';
import { RESTSERVER } from "../services/Global";

export async function getInstruments() {
    return fetch(`${RESTSERVER}/instrument`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
    }).then(response => {
        return response;
    })
}