import React, { useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { getInstruments } from '../../services/InstrumentService';

import styles from '../../css/Filter.module.css';


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

    const [selectedInstrument, setSelectedInstrument] = React.useState();
    const [instruments, setInstruments] = React.useState([]);
    const [componist, setComponist] = React.useState('');
    const [key, setKey] = React.useState('');

    const [filter, setFilter] = React.useState({
        instrument_id: "",
        componist: "",
        key: ""
    })

    const handleChange = (event) => {

        setFilter({
            ...filter,
            instrument_id: event.target.value
        })
        // setSelectedInstrument(event.target.value);
    };

    function handleComponist(event) {
        setFilter({
            ...filter,
            componist: event.target.value
        })

        console.log(filter);
        // setComponist(event.target.value);
    }

    function handleKey(event) {
        setFilter({
            ...filter,
            key: event.target.value
        })
        setKey(event.target.value);
    }

    function handleFilter() {
        props.doSomethingWhenFilterClicked(filter);
    }

    function getAllInstruments() {
        getInstruments().then(res => res.json())
            .then((data) => {
                setInstruments(data);
                console.log(data);
            })
    }

    useEffect(() => {
        getAllInstruments();
    }, [])

    return (
        <div className={classes.center}>
            <FormControl className={classes.inputMargin} >
                <TextField id="standard-basic" label="Componist" onChange={handleComponist} />
            </FormControl>
            <FormControl className={classes.inputMargin} >
                <TextField id="standard-basic" label="Key" onChange={handleKey} />
            </FormControl>
            <FormControl className={classes.inputMargin}>
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    Instrument
            </InputLabel>
                <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={selectedInstrument}
                    onChange={handleChange}
                    displayEmpty
                >
                    {instruments.map((item) => (
                        <MenuItem value={item.id}>{item.description}</MenuItem>
                    ))}

                </Select>

            </FormControl>
            <Button className={classes.buttonMargin} variant="contained" color="primary" onClick={handleFilter}>
                Filter
            </Button>
        </div>
    )
}

export default withStyles(inputStyles)(Filter);
