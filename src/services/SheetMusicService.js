import React from 'react';
import Global from "../services/Global";

export function addSheetMusic(sheetmusic) {
    const formData = new FormData;
    formData.append("title", sheetmusic.title);
    formData.append("componist", sheetmusic.componist);
    formData.append("key", sheetmusic.key);
    formData.append("instrument_id", sheetmusic.instrument_id);
    formData.append("file", sheetmusic.file[0]);

    return fetch(`${Global.restServer}/sheetmusic`, {
        method: "POST",
        body: formData
    }).then(response => {
        return response;
    })

}