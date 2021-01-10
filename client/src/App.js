
import './App.css';
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import './components/Posts/Post.js';
import Post from './components/Posts/Post.js';
import React, { Profiler, useState } from "react";
import Home from "./Pages/Home/Home.js";
import Profile from './Pages/Profile/Profile';
import postTest from './Pages/PostTest/PostTest';

function App() {

  return (
    <BrowserRouter>

      <Switch>
        <Route exact path="/" component = {Home}></Route>
        <Route exact path="/profile" component = {Profile}></Route>
        <Route exact path="/testDB" component = {postTest}></Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
