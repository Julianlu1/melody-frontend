import React from 'react';
import "../services/Global";
import { RESTSERVER } from '../services/Global';

export async function addSheetMusic(sheetmusic) {
    const formData = new FormData;
    formData.append("title", sheetmusic.title);
    formData.append("componist", sheetmusic.componist);
    formData.append("key", sheetmusic.key);
    formData.append("instrument_id", sheetmusic.instrument_id);
    formData.append("file", sheetmusic.file[0]);

    return fetch(`${RESTSERVER}/sheetmusic`, {
        method: "POST",
        body: formData
    }).then(response => {
        return response;
    })

}