import React from 'react';
import Register from "./Components/RegisterPage/Register";
import Login from "./Components/LoginPage/Login";
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import SignUp from "./Components/EntryField/SignUp/SignUp";
import SignIn from "./Components/EntryField/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/signUp'>
          <Register/>
        </Route>
        <Route path='/signIn'>
          <Login/>
        </Route>
        <Redirect from='/' to='/signIn'/>
      </Switch>
    </div>
  );
}

export default App;
