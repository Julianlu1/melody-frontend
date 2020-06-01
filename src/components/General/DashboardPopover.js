import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Auth from '../../Auth';
import { useHistory } from 'react-router-dom';
import Link from '@material-ui/core/Link'; // Material UI link, anders dan de react-router-dom link

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: '25px'
    },
    link: {
        cursor: 'pointer',
    }
}));

function DashboardPopover() {
    const classes = useStyles();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function handleLogout() {
        Auth.logout();
        history.push("/");
        window.location.reload();
    }

    function handleDashboard() {
        console.log(Auth.isAuthenticated());
        history.push("/dashboard");
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <div>
            <Link underline='none' className={classes.link} onClick={handleClick}>
                Account
          </Link>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography className={classes.typography}>
                    <Link onClick={handleDashboard} underline='none' className={classes.link}>Dashboard</Link><br></br>
                    <Link onClick={handleLogout} underline='none' className={classes.link}>Uitloggen</Link>
                </Typography>
            </Popover>
        </div>
    );
}

export default DashboardPopover;