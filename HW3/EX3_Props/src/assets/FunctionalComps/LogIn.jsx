
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
import Profile from './Profile';
import SystemAdmin from './SystemAdmin';
import Register from './Register';


export default function LogIn(props) {

    const [showRegister, setShowRegister] = useState(false);

    const [liInputs, setLIInputs] = useState({
        liUserNameInp: { value: '', error: false, helperText: '' },
        liPasswordInp: { value: '', error: false, helperText: '' },
    });


    const togglePage = () => {
        setShowRegister(!showRegister);
    };


    const LoginUser = (name, password) => {
        let tempUsersList = props.UsersList;
        if (name == "admin" && password == "ad12343211ad") {
            props.setLogIn({ userName: "admin", password: "ad12343211ad" });
            return true;
        }

        for (let i = 0; i < tempUsersList.length; i++) {
            if (tempUsersList[i].userName == name && tempUsersList[i].password == password) {
                props.setLogIn(tempUsersList[i]);
                return true;
            }
        }
        return false;
    };

    const handelLogInSubmit = (event) => {
        event.preventDefault();

        //check the validation of inputs
        for (let key in liInputs) {
            if (liInputs[key].error) {
                return;
            }
        }
        if (LoginUser(liInputs.liUserNameInp.value, liInputs.liPasswordInp.value))
            RestartLogInForm();
    }

    const RestartLogInForm = () => {
        for (let key in liInputs) {
            setLIInputs(prev => ({ ...prev, [key]: { value: '', error: false, helperText: '' } }))
        }
    };

    if (props.stateLogIn === "")
        if (!showRegister)
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
                        <p style={{ color: 'red', fontWeight: 700, fontSize: 24 }}>You must log in to the system</p>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>

                        <Typography component="h1" variant="h5" sx={{
                            marginBottom: 6
                        }}>
                            Sign in
                        </Typography>

                        <form onSubmit={handelLogInSubmit} >

                            <Grid container rowSpacing={2} columnSpacing={5}>
                                <Grid item xs={12} sm={6} >
                                    <Input
                                        required={true}
                                        id="InpLIUserName"
                                        label="User name"
                                        type='text'
                                        variant="outlined"
                                        error={liInputs.liUserNameInp.error}
                                        helperText={liInputs.liUserNameInp.helperText}
                                        autoFocus={true}
                                        color='secondary'
                                        regex={/^[a-zA-Z0-9!@#$%^&*_\-+=`~\\|:'",<.>/? ]{1,60}$/}
                                        patterntxt="The username should contain only foreign letters, numbers, special characters and up to 60 characters"
                                        statename="liUserNameInp"
                                        value={liInputs.liUserNameInp.value}
                                        setInpFunc={setLIInputs}
                                        ShowInpState={liInputs}
                                        fullWidth />
                                </Grid>

                                <Grid item xs={12} sm={6} >
                                    <Input
                                        required={true}
                                        id="InpLIPassword"
                                        label="Password"
                                        type='password'
                                        variant="outlined"
                                        error={liInputs.liPasswordInp.error}
                                        helperText={liInputs.liPasswordInp.helperText}
                                        autoFocus={false}
                                        color='secondary'
                                        regex={/^(?=.*[!@#$%^&*()\-_=+`~{}[\]|\\;:'",<.>/?])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()\-_=+`~{}[\]|\\;:'",<.>/?]{7,12}$|^(ad12343211ad)$/}

                                        patterntxt="The password should contain between 7 and 12 characters with at least one special character, a capital letter and a number"
                                        statename="liPasswordInp"
                                        value={liInputs.liPasswordInp.value}
                                        setInpFunc={setLIInputs}
                                        ShowInpState={liInputs}
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
                                Sign In
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="#" variant="body2" onClick={togglePage}>
                                        Don't have an account yet? Join Us!
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>

                </Container>

            );
        else return (<Register addUser={props.addUser} showRegister={showRegister}
            setShowRegister={setShowRegister} />);
    else if (props.stateLogIn.userName === "admin")
        return (<SystemAdmin UsersList={props.UsersList} setUsers={props.setUsers} DeleteUser={props.DeleteUser} setLogIn={props.setLogIn} />);

    else return (

        <Profile addUser={props.addUser} UsersList={props.UsersList} setUsers={props.setUsers} stateLogIn={props.stateLogIn} setLogIn={props.setLogIn} LoginUser={LoginUser} />
    );
};