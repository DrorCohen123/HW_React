import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import Avatar from '@mui/material/Avatar';

import { useState } from 'react';

import EditDetails from './EditDetails';


export default function Profile(props) {

    const [edit, setEdit] = useState(false)
    const user = props.stateLogIn;

    const userFullName = user.firstName + " " + user.lastName;
    const userEmail = user.email;
    const userAdress = user.street + ", " + user.homeNumber;
    const userDate = user.birthDate;
    const imgSrc = user.picture;

    const ShowEditComp = () => {
        setEdit(true);
    };

    //const LogOutUser = (email) => {
    //if (email === userEmail) {
    //props.setLogIn("");
    //}
    //}

    const LogOutUser = () => {
        props.setLogIn("");
    };

    if (!edit)
        return (

            <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                maxWidth: 345,
                marginTop: 6
            }}>
                <CardContent style={{ textAlign: 'center', width: '80%' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {userFullName}
                    </Typography>

                    <Avatar sx={{ width: 150, height: 150, marginLeft: '1.5rem', marginBottom: '1rem', marginTop: '1rem' }} alt="User Avatar" src={imgSrc} > </Avatar>

                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>

                        <EmailIcon sx={{ fontSize: 20, marginRight: '0.5rem', marginTop: '1rem' }} />
                        <Typography variant="body2" color="text.secondary">
                            {userEmail}
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <LocationOnIcon sx={{ fontSize: 20, marginRight: '0.5rem' }} />
                        <Typography variant="body2" color="text.secondary">
                            {userAdress}
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <EventIcon sx={{ fontSize: 20, marginRight: '0.5rem' }} />
                        <Typography variant="body2" color="text.secondary">
                            {userDate}
                        </Typography>
                    </div>

                </CardContent>

                <CardActions style={{ marginTop: 'auto', justifyContent: 'center', width: '100%' }}>
                    <Button size="small" color='secondary' onClick={ShowEditComp}>Update details</Button>
                    <Button size="small" color='secondary' href='https://games.yo-yoo.co.il/games_play.php?game=5176' target='blank'>To Play</Button>
                    <Button size="small" color='error' onClick={LogOutUser}>Logout</Button>
                </CardActions>
            </Card>
        );
    else return (
        <EditDetails addUser={props.addUser} UsersList={props.UsersList} setUsers={props.setUsers} stateLogIn={props.stateLogIn} setLogIn={props.setLogIn} stateEdit={edit} setEdit={setEdit}
            oldUser={props.stateLogIn} />
    );
};

