import React from 'react';
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
        <Route path='/main'>
          <Main/>
        </Route>
      </Switch>
      {localStorage.getItem('user')
        ? <Switch><Redirect to='/main'/></Switch>
        : <Switch><Redirect from='/' to='/signIn'/></Switch>
      }
    </div>
  );
}

export default App;
