import React from 'react';
import { RESTSERVER } from "../services/Global";

export async function addComment(comment, sheetmusicId) {
    // Titel en description in variabele zetten
    return fetch(`${RESTSERVER}/comments`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + window.sessionStorage.getItem("token")
        },
        body: JSON.stringify({
            sheetId: sheetmusicId,
            description: comment.description,
            score: comment.score
        })
    }).then(response => {
        return response;
    })
}