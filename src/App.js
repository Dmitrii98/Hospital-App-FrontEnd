import React, {useState} from 'react';
import Register from "./Components/RegisterPage/Register";
import Login from "./Components/LoginPage/Login";
import Main from "./Components/Main/Main";
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';

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
        {localStorage.getItem('user')
          ? <Route path='/main' component={Main}/>
          : <Route path='/signIn'/>}
        <Redirect from='/' to='/signIn'/>
      </Switch>
    </div>
  );
}

export default App;
