import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import styles from '../css/Filter.module.css';


const inputStyles = theme => ({
    inputMargin: {
        marginRight: '30px',
        width: '150px'
    },

    buttonMargin: {
        marginTop: '10px',
        marginLeft: '10px'
    },
    center: {
        marginTop: '25px',
        marginBottom: '25px',
        textAlign: 'center',

    }
});

function Filter(props) {
    const { classes } = props;

    const [instrument, setInstrument] = React.useState('');
    const [componist, setComponist] = React.useState('');

    const handleChange = (event) => {
        setInstrument(event.target.value);
    };

    function handleComponist(event) {
        setComponist(event.target.value);
    }

    function handleFilter() {

    }
    return (
        <div className={classes.center}>
            <FormControl className={classes.inputMargin} >
                <TextField id="standard-basic" label="Componist" onChange={handleComponist} />
            </FormControl>
            <FormControl className={classes.inputMargin}>
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    Instrument
            </InputLabel>
                <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={instrument}
                    onChange={handleChange}
                    displayEmpty
                >
                    <MenuItem value="piano">Piano</MenuItem>
                    <MenuItem value="gitaar">Gitaar</MenuItem>
                </Select>

            </FormControl>
            <Button className={classes.buttonMargin} variant="contained" color="primary" onClick={handleFilter}>
                Filter
            </Button>
        </div>
    )
}

export default withStyles(inputStyles)(Filter);
