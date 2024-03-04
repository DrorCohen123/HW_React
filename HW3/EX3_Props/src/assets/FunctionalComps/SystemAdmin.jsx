
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import EditDetails from './EditDetails';
import { useState } from 'react';


export default function SystemAdmin(props) {

    const users = props.UsersList;
    const [adminEdit, setAdminEdit] = useState(false);
    // const navigate = useNavigate();
    //let oldUserA = {};
    const [oldUserA, setOldUserA] = useState({});
    const createRows = (users) => {
        return users.map((user) => ({
            picture: user.picture,
            username: user.userName,
            fullname: user.firstName + ' ' + user.lastName,
            dOfBirth: user.birthDate,
            address: user.street + ' ' + user.homeNumber+', ' +user.city,
            email: user.email,
        }));
    };

    const rows = createRows(users);

    const EditUserAdmin = (email) => () => {
        let usersArray = props.UsersList;
        setOldUserA(usersArray.find(user => user.email === email));
        setAdminEdit(true);
    };

    if (adminEdit) {
        return (
            <EditDetails addUser={props.addUser} UsersList={props.UsersList} setUsers={props.setUsers} stateLogIn={props.stateLogIn} setLogIn={props.setLogIn} oldUser={oldUserA} setAdminEdit={setAdminEdit} />
        );
    }

    else return (
        <>
            <Button
                color='error'
                variant='contained'
                sx={{ marginRight: 8, marginBottom: 10, marginTop: 10 }}
                //onClick={() => { navigate('/') }}
                onClick={() => { props.setLogIn("") }}
            >Log Out</Button>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 1000 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Picture</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell align="right">Full Name</TableCell>
                            <TableCell align="right">Date of Birth</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.username}>
                                <TableCell>
                                    <Avatar alt={row.username} src={row.picture} />
                                </TableCell>
                                <TableCell scope="row">{row.username}</TableCell>
                                <TableCell align="right">{row.fullname}</TableCell>
                                <TableCell align="right">{row.dOfBirth}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={EditUserAdmin(row.email)}
                                    >
                                        <EditIcon />
                                    </Button>

                                    <Button variant="contained" color="error"
                                        sx={{ margin: 1 }} onClick={props.DeleteUser(row.email)}>
                                        <DeleteForeverIcon />
                                    </Button>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};
