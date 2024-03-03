
import { OpenInFull } from '@mui/icons-material';
import TextField from '@mui/material/TextField';

import { useState, useEffect } from 'react';

export default function Input(props) {

    const ValidInputs = (e, regPattern, text, stateName) => {
        const input = e.target.value // Input string to validate  
        const mytext = text;
        const myState = stateName;
        const regex = new RegExp(regPattern); // Regex pattern
        const isValid = regex.test(input);

        props.setInpFunc(prev => ({
            ...prev, [myState]: {
                value: input, error: !isValid,
                helperText: isValid ? "" : mytext
            }
        }));

    };

    const ValidBirthDate = (e, regPattern, text, stateName) => {
        const input = e.target.value; // Input string to validate
        const mytext = text;
        const myState = stateName;

        const userDate = new Date(input); // Convert user's input to a Date object
        const today = new Date(); // Get today's date

        // Calculate the difference in milliseconds between today and the user's date of birth
        const ageDifference = today - userDate;

        // Convert milliseconds to years
        const ageInYears = ageDifference / (1000 * 60 * 60 * 24 * 365.25);

        // Check if age is over 18 (at least 18 years and one day) and less than 120 years
        const isValid = ageInYears >= 18.002739726 && ageInYears < 120;

        props.setInpFunc(prev => ({
            ...prev, [myState]: {
                value: input, error: !isValid,
                helperText: isValid ? "" : mytext
            }
        }));
    };

    const handleChange = (e) => {
        let tempInp = e.target.value;
        let tempStateName = props.statename;
        let tempValidFunc = props.validFunc;

        if (tempValidFunc === "date") {
            ValidBirthDate(e, props.regex, props.patterntxt, tempStateName);
        }

        else {
            ValidInputs(e, props.regex, props.patterntxt, tempStateName);
            if (props.Pic)
                handleFileChange(e);
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file)
            return;

        const reader = new FileReader();

        reader.onload = (e) => {
            const dataUrl = e.target.result;
            props.getUrl(dataUrl);
        };
        reader.readAsDataURL(file);
    };

    return (
        <>
            <TextField
                InputProps={props.InputProps}
                required={props.required}
                name={props.name}
                id={props.id}
                value={props.value}
                label={props.label}
                type={props.type}
                variant={props.variant}
                error={props.error}
                helperText={props.helperText}
                autoFocus={props.autoFocus}
                color={props.color}
                margin={props.margin}
                regex={props.regex}
                patterntxt={props.patterntxt}
                statename={props.statename}
                onChange={handleChange}
                fullWidth
            />
        </>
    );
};
