import React from 'react';
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import {Switch, Route} from 'react-router-dom'
import EntryFieldStyles from './EntryFieldStyles.css';

function EntryField() {
  return (
    <div className="entry-field">
      <Switch>
        <Route path='/signUp'>
          <SignUp/>
        </Route>
        <Route path='/signIn'>
          <SignIn/>
        </Route>
      </Switch>
    </div>
  );
}

export default EntryField;
