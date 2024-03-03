
import './App.css'

import Register from './assets/FunctionalComps/Register';
import LogIn from './assets/FunctionalComps/LogIn';
import SystemAdmin from './assets/FunctionalComps/SystemAdmin';

import { useEffect, useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState("");

  const LoadUsers = () => {
    let tempArray = JSON.parse(localStorage.getItem("Users"));
    (tempArray === null || tempArray.length == 0) ? setUsers([]) : setUsers(tempArray);
  }
  //Did Mount Hook-> Users
  useEffect(() => {
    LoadUsers();
  }, []);

  useEffect(() => {
    localStorage.setItem("Users", JSON.stringify(users)); //Update Users in LocalStorage
  }, [users]);

  useEffect(() => {
    sessionStorage.setItem("LoggedIn", JSON.stringify(loggedIn));
  }, [loggedIn]);

  const AddUserToUsers = (user) => {
    let newUsersList = [...users, user];
    setUsers(newUsersList);
  };

  const DeleteUser = (email) => () => {
    let tempUsers = users;
    let newAray = tempUsers.filter(user => user.email !== email);
    setUsers(newAray);
  };


  return (
    <>
      <div className="card">

        <LogIn UsersList={users} setUsers={setUsers} addUser={AddUserToUsers} setLogIn={setLoggedIn} stateLogIn={loggedIn} DeleteUser={DeleteUser} />
      </div>
    </>
  )
}

export default App
