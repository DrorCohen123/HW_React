
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useState } from 'react';

import Input from './Input';

const cities = [
    "Jerusalem",
    "Tel Aviv",
    "Haifa",
    "Rishon LeZion",
    "Petah Tikva",
    "Ashdod",
    "Netanya",
    "Beer Sheva",
    "Holon",
    "Bnei Brak"
]

export default function Register(props) {

    const [imageUrl, setImageUrl] = useState('');

    const [inputsR, setinputsR] = useState({
        userNameInp: { value: '', error: false, helperText: '' },
        passwordInp: { value: '', error: false, helperText: '' },
        passValidationInp: { value: '', error: false, helperText: '' },
        pictureInp: { value: '', error: false, helperText: '' },
        firstNameInp: { value: '', error: false, helperText: '' },
        lastNameInp: { value: '', error: false, helperText: '' },
        emailInp: { value: '', error: false, helperText: '' },
        birthDateInp: { value: '', error: false, helperText: '' },

        //------------------------Need add cities!!----------------------//
        //Inp: { value: '', error: false, helperText: '' },

        streetInp: { value: '', error: false, helperText: '' },
        homeNumber: { value: '', error: false, helperText: '' },
    });

    const togglePage = () => {
        props.setShowRegister(!props.showRegister);
    };
    const RestartRegisterForm = () => {
        for (let key in inputsR) {
            setinputsR(prev => ({ ...prev, [key]: { value: '', error: false, helperText: '' } }))
        }
    }


    const RegisterUser = () => {
        let newUser = {
            userName: inputsR.userNameInp.value,
            password: inputsR.passwordInp.value,
            picture: imageUrl,
            firstName: inputsR.firstNameInp.value,
            lastName: inputsR.lastNameInp.value,
            email: inputsR.emailInp.value,
            birthDate: inputsR.birthDateInp.value,
            //city: inputsR.birthDateInp.value,
            street: inputsR.streetInp.value,
            homeNumber: inputsR.homeNumber.value,
        }
        props.addUser(newUser);
        RestartRegisterForm();
    }

    const handleRegSubmit = (event) => {
        event.preventDefault();
        let tempinputsArray = inputsR;

        for (let inpKey in tempinputsArray) {
            if (tempinputsArray[inpKey].error) {
                return;
            }
        }

        RegisterUser();
    };

    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5" sx={{
                    marginBottom: 6
                }}>
                    Sign up
                </Typography>

                <form onSubmit={handleRegSubmit}>

                    <Grid container rowSpacing={2} columnSpacing={5}>
                        <Grid item xs={12} sm={6} >
                            <Input
                                required={true}
                                value={inputsR.userNameInp.value}
                                id="InpRUserName"
                                label="User name"
                                type='text'
                                variant="outlined"
                                error={inputsR.userNameInp.error}
                                helperText={inputsR.userNameInp.helperText}
                                autoFocus={true}
                                color='secondary'
                                regex={/^[a-zA-Z0-9!@#$%^&*_\-+=`~\\|:'",<.>/? ]{1,60}$/}
                                patterntxt="The username should contain only foreign letters, numbers, special characters and up to 60 characters"
                                statename="userNameInp"
                                setInpFunc={setinputsR}
                                fullWidth />
                        </Grid>

                        <Grid item xs={12} sm={6} >
                            <Input
                                required={true}
                                id="InpRPassword"
                                label="Password"
                                type='password'
                                variant="outlined"
                                error={inputsR.passwordInp.error}
                                helperText={inputsR.passwordInp.helperText}
                                autoFocus={false}
                                color='secondary'
                                regex={/^(?=.*[!@#$%^&*()\-_=+`~{}[\]|\\;:'",<.>/?])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()\-_=+`~{}[\]|\\;:'",<.>/?]{7,12}$/}
                                patterntxt="The password should contain between 7 and 12 characters with at least one special character, a capital letter and a number"
                                statename="passwordInp"
                                value={inputsR.passwordInp.value}
                                setInpFunc={setinputsR}
                                fullWidth />
                        </Grid>

                        <Grid item xs={12}>
                            <Input
                                required={true}
                                id="InpRPassValidation"
                                label="Password validation"
                                type='password'
                                variant="outlined"
                                error={inputsR.passValidationInp.error}
                                helperText={inputsR.passValidationInp.helperText}
                                autoFocus={false}
                                color='secondary'
                                regex={'^' + inputsR.passwordInp.value + '$'}
                                patterntxt="The password verification should be the same as the password you entered"
                                statename="passValidationInp"
                                value={inputsR.passValidationInp.value}
                                setInpFunc={setinputsR}
                                fullWidth />

                        </Grid>

                        <Grid item xs={12} >
                            <Input
                                required={true}
                                id="InpRPicture"
                                label="Image"
                                type='file'
                                variant="outlined"
                                error={inputsR.pictureInp.error}
                                helperText={inputsR.pictureInp.helperText}
                                autoFocus={false}
                                color='secondary'
                                regex={/\.jpe?g$/i}
                                patterntxt="Only 'JPG' or 'JPEG' files can be uploaded"
                                statename="pictureInp"
                                value={inputsR.pictureInp.value}
                                setInpFunc={setinputsR}
                                Pic={true}
                                getUrl={setImageUrl}
                                fullWidth />
                        </Grid>

                        <Grid item xs={12}>
                            <Input
                                required={true}
                                id="InpRFirstName"
                                label="First name"
                                type='text'
                                variant="outlined"
                                error={inputsR.firstNameInp.error}
                                helperText={inputsR.firstNameInp.helperText}
                                autoFocus={false}
                                color='secondary'
                                regex={/^(?:[a-zA-Z\s]*|[א-ת\s]*)$/}
                                patterntxt="Only text will be accepted, choose only one language and do not mix (English or Hebrew)"
                                statename="firstNameInp"
                                value={inputsR.firstNameInp.value}
                                setInpFunc={setinputsR}
                                fullWidth />
                        </Grid>

                        <Grid item xs={12}>
                            <Input
                                required={true}
                                id="InpRLastName"
                                label="Last name"
                                type='text'
                                variant="outlined"
                                error={inputsR.lastNameInp.error}
                                helperText={inputsR.lastNameInp.helperText}
                                autoFocus={false}
                                color='secondary'
                                regex={/^(?:[a-zA-Z\s]*|[א-ת\s]*)$/}
                                patterntxt="Only text will be accepted, choose only one language and do not mix (English or Hebrew)"
                                statename="lastNameInp"
                                value={inputsR.lastNameInp.value}
                                setInpFunc={setinputsR}
                                fullWidth />
                        </Grid>

                        <Grid item xs={12}>
                            <Input
                                required={true}
                                id="InpREmail"
                                label="Email"
                                type='email'
                                variant="outlined"
                                error={inputsR.emailInp.error}
                                helperText={inputsR.emailInp.helperText}
                                autoFocus={false}
                                color='secondary'
                                regex={/^[a-zA-Z0-9.!#$%&'*+/=?^_`|~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.com$/}
                                patterntxt="The '@' must appear and only once, before and after it you can enter any English letter or any other character you want and at the end must end with '.com' , for example: 'user#123@gmail.com' "
                                statename="emailInp"
                                value={inputsR.emailInp.value}
                                setInpFunc={setinputsR}
                                fullWidth />
                        </Grid>

                        <Grid item xs={12}>
                            <Input
                                required={true}
                                id="InpRBirthDate"
                                label="Birth date"
                                type='date'
                                variant="outlined"
                                error={inputsR.birthDateInp.error}
                                helperText={inputsR.birthDateInp.helperText}
                                autoFocus={false}
                                color='secondary'
                                regex=""
                                patterntxt="The legal age is over 18 and under 120 years"
                                statename="birthDateInp"
                                validFunc="date"
                                value={inputsR.birthDateInp.value}
                                setInpFunc={setinputsR}
                                fullWidth />
                        </Grid>

                        <Grid item xs={12}>

                        </Grid>

                        <Grid item xs={12}>

                            <Input
                                required={true}
                                id="InpRStreet"
                                label="Street"
                                type='text'
                                variant="outlined"
                                error={inputsR.streetInp.error}
                                helperText={inputsR.streetInp.helperText}
                                autoFocus={false}
                                color='secondary'
                                regex={/^[א-ת\s]*$/}
                                patterntxt="Only Hebrew letters must be entered"
                                statename="streetInp"
                                value={inputsR.streetInp.value}
                                setInpFunc={setinputsR}
                                fullWidth />
                        </Grid>

                        <Grid item xs={12}>

                            <Input
                                required={true}
                                id="InpRHomeNumber"
                                label="Home number"
                                type='number'
                                variant="outlined"
                                error={inputsR.homeNumber.error}
                                helperText={inputsR.homeNumber.helperText}
                                autoFocus={false}
                                color='secondary'
                                regex={/^\d+$/}
                                patterntxt="Only non-negative numbers can be entered"
                                statename="homeNumber"
                                value={inputsR.homeNumber.value}
                                setInpFunc={setinputsR}
                                fullWidth />
                        </Grid>


                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        color='secondary'
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2" onClick={togglePage}>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Box>

        </Container>

    );
};

