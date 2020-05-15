import React, { useState } from 'react';

import Global from "../services/Global";

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from '../css/Register.css';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
    button: {
        display: 'block',
        width: '50%',
        marginLeft: '25%',
        marginRight: '25%'
    },
    input: {
        marginBottom: 25,
        width: '50%',
        display: 'block',
        marginLeft: '25%',
        marginRight: '25%'
    },
    h2: {
        marginBottom: 15
    }
}));
function Register() {
    const classes = useStyles();
    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();

    const [open, setOpen] = React.useState(false);

    function handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        switch (name) {
            case "username":
                setUsername(value);
                break;
            case "password":
                setPassword(value);
                break;
        }
    }

    // Snackbar
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    }

    function register() {
        fetch(`${Global.restServer}/register`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(response => {
            if (response.status == 200) {
                setOpen(true);
            } else {
                alert("Oeps. Er is iets misgegaan, probeer het opnieuw.");
            }
        })
    }

    return (
        <div className="container">
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <MuiAlert onClose={handleClose} severity="success">
                    Registeren is gelukt!
                </MuiAlert>
            </Snackbar>
            <div className="form">
                <h2 className={classes.h2}>Ik ben nieuw hier.</h2>
                <TextField name="username" fullWidth className={classes.input} label="Gebruikersnaam" variant="outlined" onChange={handleInputChange} />
                <TextField name="password" fullWidth className={classes.input} type="password" label="Wachtwoord" variant="outlined" onChange={handleInputChange} />
                <Button onClick={register} className={classes.button} color="primary" variant="contained"  >
                    Registeren
                    </Button>
            </div>
        </div>
    )
}

export default Register;