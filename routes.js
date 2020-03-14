import React from 'react';
import {NativeRouter, Route, Link,Switch} from 'react-router-native';
import Home from './src/Components/Home/Home';
import Profile from "./src/Components/Profile/Profile"
import History from "./src/Components/History/History"
import InGame from "./src/Components/InGame/InGame"
export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Profile} path="/profile/:user" />
    <Route component={History} path="/history/:accountId" />
    <Route component={InGame} path="/game/:id" />
  </Switch>
);
