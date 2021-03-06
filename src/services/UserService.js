import React from 'react';

import Auth from "../Auth";
import { RESTSERVER } from "../services/Global";


export async function signIn(username, password) {
    return fetch(`${RESTSERVER}/authenticate`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }).then(response => {
        return response.json();
    })
}

export async function signUp(username, password) {
    return fetch(`${RESTSERVER}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }).then(response => {
        return response;
    })
}



