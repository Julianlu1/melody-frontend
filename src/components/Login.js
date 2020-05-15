import React from 'react';

import Auth from "../Auth";
import Global from "../services/Global";

import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import Link from '@material-ui/core/Link'; // Material UI link, anders dan de react-router-dom link

function Login(props) {
    const history = useHistory();
    const [open, setOpen] = React.useState(false);

    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        // console.log(username);
        // console.log(password);
        login();
        console.log(props.history);
    };

    const handleCloseReturn = () => {
        setOpen(false);
    };

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
        // this.setState({
        //     [name]: value
        // });
    }

    function login() {
        fetch(`${Global.restServer}/authenticate`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(response => response.json())
            .then(data => {
                if (data.token != null) {
                    Auth.login(data.token);
                    history.push("/dashboard");
                    window.location.reload();
                }
                else if (data.message === "Unauthorized") {
                    alert("Gebruikersnaam of wachtwoord klopt niet");
                }
            })
    }

    return (
        <div className="container">
            <Link onClick={handleClickOpen} underline='none' style={{ cursor: 'pointer' }}>Inloggen</Link>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Inloggen. Welkom terug!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Vul uw gebruikersnaam en wachtwoord in.
                         </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        name="username"
                        label="Gebruikersnaam"
                        type="text"
                        fullWidth
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        name="password"
                        label="Wachtwoord"
                        type="password"
                        fullWidth
                        onChange={handleInputChange}
                    />
                </DialogContent>
                <DialogActions>
                    Nog geen account?<a href="/register" style={{ color: 'orange' }}> Start hier</a>
                    <Button onClick={handleCloseReturn} color="primary">
                        Terug
                    </Button>
                    <Button onClick={handleClose} color="primary" variant="contained"  >
                        Inloggen
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Login;