import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    center: {
        width: '107%',
        marginLeft: '15%'
    },
    button: {
        textAlign: 'center'
    },
    input: {
        marginBottom: '15px'
    },
    select: {
        width: '30%',
        marginLeft: '35%',
        marginRight: '35%',
        fontSize: '15px'
    }
}));



function Upload() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const [sheetmusic, setSheetmusic] = useState({
        title: '',
        componist: '',
        key: '',
        instrument: '',
        file: null
    });

    function uploadSheet() {
        fetch('http://localhost:8090/sheetmusic', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + window.sessionStorage.getItem("token")
            },
            body: JSON.stringify({
                title: sheetmusic.title,
                componist: sheetmusic.componist,
                key: sheetmusic.key,
                instrument: sheetmusic.instrument,
                file: sheetmusic.file
            })
        }).then(response => {
            if (response.status == 200) {
                alert('succesvol toegevoegd!')
            } else {
                alert('Er is iets foutgegaan')
            }
        })
    }
    function getSteps() {
        return ['Wat is de titel en componist?', 'In welke key is het geschreven en wat is het instrument en componist?', 'Upload PDF'];
    }

    function getStepContent(stepIndex, classes) {
        switch (stepIndex) {
            case 0:
                return (
                    <TextField onChange={handleChangeTitle} className={classes.center} name="title" fullWidth label="Titel" variant="outlined" />
                )
            // return 'Een bladmuziek toevoegen';
            case 1:
                // return 'Wat is de toonsoort en het instrument ?';
                return (
                    <div className={classes.center}>
                        <TextField onChange={handleChangeComponist} className={classes.input} name="componist" fullWidth label="Componist" variant="outlined" />
                        <TextField onChange={handleChangeKey} className={classes.input} name="key" fullWidth label="Toonsoort" variant="outlined" />
                        <InputLabel className={classes.select} id="labelInstrument">Instrument</InputLabel>
                        <Select
                            className={classes.select}
                            labelId="demo-simple-select-placeholder-label-label"
                            id="demo-simple-select-placeholder-label"
                            defaultValue="piano"
                            value={sheetmusic.instrument}
                            onChange={handleChangeInstrument}
                        >
                            <MenuItem value="piano">Piano</MenuItem>
                            <MenuItem value="gitaar">Gitaar</MenuItem>
                        </Select>
                    </div>
                )
            case 2:
                return (
                    <div className={classes.button}>
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="raised-button-file"
                            multiple
                            type="file"
                            onChange={handleChangeInput}
                        />
                        <label htmlFor="raised-button-file">
                            <Button variant="outlined" component="span" >
                                Upload
                            </Button>
                        </label>
                    </div>
                )
            // return 'This is the bit I really care about!';
            default:
                return 'Unknown stepIndex';
        }
    }
    function handleChangeTitle(e) {
        setSheetmusic({
            ...sheetmusic,
            title: e.target.value
        })
    }

    function handleChangeComponist(e) {
        setSheetmusic({
            ...sheetmusic,
            componist: e.target.value
        })
    }
    function handleChangeKey(e) {
        setSheetmusic({
            ...sheetmusic,
            key: e.target.value
        })
    }

    function handleChangeInstrument(e) {
        setSheetmusic({
            ...sheetmusic,
            instrument: e.target.value
        })
    }

    function handleChangeInput(e) {
        setSheetmusic({
            ...sheetmusic,
            file: e.target.files
        })
        return (
            <h1>testasdahdoashdouh</h1>
        )
    }
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        // Wanneer de laatste stap is voltooid
        if (activeStep == 2) {
            // POST REQUEST MAKEN
            uploadSheet();
            console.log(sheetmusic)
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>Bladmuziek geüpload</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                        <div>
                            <Typography className={classes.instructions}>{getStepContent(activeStep, classes)}</Typography>

                            <div className={classes.button} >
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.backButton}
                                >
                                    Terug
                              </Button>
                                <Button variant="contained" color="primary" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Uploaden' : 'Volgende'}
                                </Button>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );

}

export default Upload;