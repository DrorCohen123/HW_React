
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
//import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Autocomplete from "@mui/material/Autocomplete";
import TextField from '@mui/material/TextField';

import { useState, useEffect } from 'react';

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
export default function EditDetails(props) {

    const [oldUser, setOldUser] = useState(props.oldUser);
    const [imageUrl, setImageUrl] = useState('');

    const [inputsE, setinputsE] = useState({
        userNameInp: { value: '', error: false, helperText: '' },
        passwordInp: { value: '', error: false, helperText: '' },
        passValidationInp: { value: '', error: false, helperText: '' },
        //pictureInp: { value: '', error: false, helperText: '' },
        firstNameInp: { value: '', error: false, helperText: '' },
        lastNameInp: { value: '', error: false, helperText: '' },
        emailInp: { value: '', error: false, helperText: '' },
        birthDateInp: { value: '', error: false, helperText: '' },
        cityInp: { value: '', error: false, helperText: '' },
        streetInp: { value: '', error: false, helperText: '' },
        homeNumber: { value: '', error: false, helperText: '' }
    });
    const[cityInput, setCityInpE]=useState(oldUser.city);

    useEffect(() => {
        if (props.oldUser) {
            const currentUser = oldUser;
            setinputsE(prev => ({
                ...prev,
                userNameInp: { ...prev.userNameInp, value: currentUser.userName },
                passwordInp: { ...prev.passwordInp, value: currentUser.password },
                passValidationInp: { ...prev.passValidationInp, value: currentUser.password },
                //pictureInp: { ...prev.pictureInp, value: currentUser.picture},
                firstNameInp: { ...prev.firstNameInp, value: currentUser.firstName },
                lastNameInp: { ...prev.lastNameInp, value: currentUser.lastName },
                emailInp: { ...prev.emailInp, value: currentUser.email },
                birthDateInp: { ...prev.birthDateInp, value: currentUser.birthDate },
                cityInp: { ...prev.cityInp, value: cityInput},

                streetInp: { ...prev.streetInp, value: currentUser.street },
                homeNumber: { ...prev.homeNumber, value: currentUser.homeNumber },
            }));
        }
    }, [oldUser]);
    const RestartEDForm = () => {
        for (let key in inputsE) {
            setinputsE(prev => ({ ...prev, [key]: { value: '', error: false, helperText: '' } }))
        }
    };

    const EditUser = (emailUser, updateDetails) => {

        let newUser = {};
        let tempUsersArray = props.UsersList;

        let newArray = tempUsersArray.map(user => {
            if (user.email === emailUser) {
                // If the email matches, update the user information
                newUser = { ...user, ...updateDetails };
                return newUser;
            } else {
                // For other users, return the original user object
                return user;
            }
        });
        //set Users state:
        props.setUsers(newArray);
        //set LogIn state:
        if (props.stateLogIn && props.stateLogIn.userName != "admin")
            props.setLogIn(newUser);
    };


    const UpdateUserDetails = () => {
        let userEmail = inputsE.emailInp.value;
        let updateDetails = {
            userName: inputsE.userNameInp.value,
            password: inputsE.passwordInp.value,
            picture: imageUrl,
            firstName: inputsE.firstNameInp.value,
            lastName: inputsE.lastNameInp.value,
            birthDate: inputsE.birthDateInp.value,
            city: cityInput,
            street: inputsE.streetInp.value,
            homeNumber: inputsE.homeNumber.value,
        }
        EditUser(userEmail, updateDetails);
        console.log(updateDetails.city);
        RestartEDForm();
        if (props.stateLogIn && props.stateLogIn.userName != "admin")
            props.setEdit(false);
        else
            props.setAdminEdit(false);
    };

    const handleEditSubmit = (event) => {

        event.preventDefault();
        for (let inpKey in inputsE) {
            if (inputsE[inpKey].error) {
                return;
            }
        }
        UpdateUserDetails();
    };
    const handelCityChangeE  = (e) => {
       
        setCityInpE( e.target.value);
        console.log(e.target.value);
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
                    Edit Details
                </Typography>

                <form onSubmit={handleEditSubmit}>

                    <Grid container rowSpacing={2} columnSpacing={5}>
                        <Grid item xs={12} sm={6} >
                            <Input
                                required={true}
                                value={inputsE.userNameInp.value}
                                id="InpEUserName"
                                label="User name"
                                type='text'
                                variant="outlined"
                                error={inputsE.userNameInp.error}
                                helperText={inputsE.userNameInp.helperText}
                                autoFocus={true}
                                color='secondary'
                                regex={/^[a-zA-Z0-9!@#$%^&*_\-+=`~\\|:'",<.>/? ]{1,60}$/}
                                patterntxt="The username should contain only foreign letters, numbers, special characters and up to 60 characters"
                                statename="userNameInp"
                                setInpFunc={setinputsE}
                                fullWidth />
                        </Grid>

                        <Grid item xs={12} sm={6} >
                            <Input
                                required={true}
                                id="InpEPassword"
                                label="Password"
                                type='password'
                                variant="outlined"
                                error={inputsE.passwordInp.error}
                                helperText={inputsE.passwordInp.helperText}
                                autoFocus={false}
                                color='secondary'
                                regex={/^(?=.*[!@#$%^&*()\-_=+`~{}[\]|\\;:'",<.>/?])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()\-_=+`~{}[\]|\\;:'",<.>/?]{7,12}$/}
                                patterntxt="The password should contain between 7 and 12 characters with at least one special character, a capital letter and a number"
                                statename="passwordInp"
                                value={inputsE.passwordInp.value}
                               
                                setInpFunc={setinputsE}
                                fullWidth />
                        </Grid>

                        <Grid item xs={12}>
                            <Input
                                required={true}
                                id="InpEPassValidation"
                                label="Password validation"
                                type='password'
                                variant="outlined"
                                error={inputsE.passValidationInp.error}
                                helperText={inputsE.passValidationInp.helperText}
                                autoFocus={false}
                                color='secondary'
                                regex={'^' + inputsE.passwordInp.value + '$'}
                                patterntxt="The password verification should be the same as the password you entered"
                                statename="passValidationInp"
                                value={inputsE.passValidationInp.value}
                                setInpFunc={setinputsE}
                                fullWidth />

                        </Grid>

                        <Grid item xs={12} >
                            <Input
                                required={true}
                                id="InpEPicture"
                                label="Image"
                                type='file'
                                variant="outlined"
                                autoFocus={false}
                                color='secondary'
                                regex={/\.jpe?g$/i}
                                patterntxt="Only 'JPG' or 'JPEG' files can be uploaded"
                                statename="pictureInp"
                                setInpFunc={setinputsE}
                                Pic={true}
                                getUrl={setImageUrl}
                                fullWidth />
                        </Grid>

                        <Grid item xs={12}>
                            <Input
                                required={true}
                                id="InpEFirstName"
                                label="First name"
                                type='text'
                                variant="outlined"
                                error={inputsE.firstNameInp.error}
                                helperText={inputsE.firstNameInp.helperText}
                                autoFocus={false}
                                color='secondary'
                                regex={/^(?:[a-zA-Z\s]*|[א-ת\s]*)$/}
                                patterntxt="Only text will be accepted, choose only one language and do not mix (English or Hebrew)"
                                statename="firstNameInp"
                                value={inputsE.firstNameInp.value}
                                setInpFunc={setinputsE}
                                fullWidth />
                        </Grid>

                        <Grid item xs={12}>
                            <Input
                                required={true}
                                id="InpELastName"
                                label="Last name"
                                type='text'
                                variant="outlined"
                                error={inputsE.lastNameInp.error}
                                helperText={inputsE.lastNameInp.helperText}
                                autoFocus={false}
                                color='secondary'
                                regex={/^(?:[a-zA-Z\s]*|[א-ת\s]*)$/}
                                patterntxt="Only text will be accepted, choose only one language and do not mix (English or Hebrew)"
                                statename="lastNameInp"
                                value={inputsE.lastNameInp.value}
                                setInpFunc={setinputsE}
                                fullWidth />
                        </Grid>

                        <Grid item xs={12}>
                            <Input
                                InputProps={{
                                    readOnly: true
                                }}
                                required={true}
                                id="InpEEmail"
                                label="Email"
                                type='email'
                                variant="outlined"
                                error={inputsE.emailInp.error}
                                helperText={inputsE.emailInp.helperText}
                                autoFocus={false}
                                color='secondary'
                                regex={/^[a-zA-Z0-9.!#$%&'*+/=?^_`|~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.com$/}
                                patterntxt="The '@' must appear and only once, before and after it you can enter any English letter or any other character you want and at the end must end with '.com' , for example: 'user#123@gmail.com' "
                                statename="emailInp"
                                value={inputsE.emailInp.value}
                                setInpFunc={setinputsE}
                                fullWidth />
                        </Grid>

                        <Grid item xs={12}>
                            <Input
                                required={true}
                                id="InpEBirthDate"
                                label="Birth date"
                                type='date'
                                variant="outlined"
                                error={inputsE.birthDateInp.error}
                                helperText={inputsE.birthDateInp.helperText}
                                autoFocus={false}
                                color='secondary'
                                regex=""
                                patterntxt="The legal age is over 18 and under 120 years"
                                statename="birthDateInp"
                                validFunc="date"
                                value={inputsE.birthDateInp.value}
                                setInpFunc={setinputsE}
                                fullWidth />
                        </Grid>

                        <Grid item xs={12}>
                        
                             <Autocomplete 
                                    options={cities}                                    
                                    renderInput={(params) => (
                                        <TextField  required {...params} label="City" variant="standard" 
                                        color="secondary" value={cityInput}
                                         autoFocus={false} type='text'
                                         onChange={(e)=>setCityInpE(e.target.value)}
                                          onBlur={handelCityChangeE}/>
                                    )}
                                />

                       
                           
                            
                       
       

                        </Grid>

                        <Grid item xs={12}>

                            <Input
                                required={true}
                                id="InpEStreet"
                                label="Street"
                                type='text'
                                variant="outlined"
                                error={inputsE.streetInp.error}
                                helperText={inputsE.streetInp.helperText}
                                autoFocus={false}
                                color='secondary'
                                regex={/^[א-ת\s]*$/}
                                patterntxt="Only Hebrew letters must be entered"
                                statename="streetInp"
                                value={inputsE.streetInp.value}
                                setInpFunc={setinputsE}
                                fullWidth />
                        </Grid>

                        <Grid item xs={12}>

                            <Input
                                required={true}
                                id="InpEHomeNumber"
                                label="Home number"
                                type='number'
                                variant="outlined"
                                error={inputsE.homeNumber.error}
                                helperText={inputsE.homeNumber.helperText}
                                autoFocus={false}
                                color='secondary'
                                regex={/^\d+$/}
                                patterntxt="Only non-negative numbers can be entered"
                                statename="homeNumber"
                                value={inputsE.homeNumber.value}
                                setInpFunc={setinputsE}
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
                        Edit Details
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>

                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );

};
