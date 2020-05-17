import React, { useEffect } from 'react';
import Upload from '../components/Upload';
import Profile from '../components/Profile';

import Auth from '../Auth';

import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import Grid from "@material-ui/core/Grid";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    title: {
        fontSize: '20px',
        textAlign: 'center',
        marginBottom: '15px'
    }
}));


function logout() {
    Auth.logout();
    window.location.href = "/";
}

function DashBoardPage() {
    const [showUpload, setShowUpload] = React.useState(false)
    const [showProfile, setShowProfile] = React.useState(true)

    function checkIfLoggedIn() {
        if (!Auth.isAuthenticated()) {
            window.location.href = "/";
        }
    }

    function handleUpload() {
        setShowProfile(false);
        setShowUpload(true);
    }
    function handleProfile() {
        setShowUpload(false);
        setShowProfile(true);
    }

    useEffect(() => {
        checkIfLoggedIn();
    })

    window.sessionStorage.setItem('isHomepage', false);
    const classes = useStyles();

    return (
        < div className="container" >
            {/* <h3 className={classes.h2} style={{ textAlign: "left" }}>DashboardPage</h3> */}
            < Grid container spacing={3} >
                <Grid item xs={3}>
                    <h1 className={classes.title}>Dashboard pagina </h1>
                    <Paper style={{ width: "100%" }}>
                        <MenuList>
                            <MenuItem onClick={handleProfile}>Mijn profiel</MenuItem>
                            <MenuItem onClick={handleUpload}>Sheet music toevoegen</MenuItem>
                            <MenuItem>Mijn geüploade bladmuziek</MenuItem>
                            <MenuItem>Mijn gespeelde bladmuziek</MenuItem>
                            <MenuItem onClick={logout}>Logout</MenuItem>
                        </MenuList>
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    {showUpload ? <Upload /> : null}
                    {showProfile ? <Profile /> : null}

                </Grid>

            </Grid >

            {/* <Upload /> */}

        </div >
    );

}

export default DashBoardPage;