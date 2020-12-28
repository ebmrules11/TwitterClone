
import './App.css';
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import './components/Posts/Post.js';
import Post from './components/Posts/Post.js';
import React from "react";
import Home from "./Pages/Home/Home.js";

function App() {
  return (



    <BrowserRouter>

      <Switch>
        <Route exact path="/" component = {Home}>
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
