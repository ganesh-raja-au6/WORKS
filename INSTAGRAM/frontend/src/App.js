import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Navbar from './Components/Navbar'
import Home from './Components/Pages/Home'
import Login from './Components/Pages/Login'
import Register from './Components/Pages/Register'
import Profile from './Components/Pages/Profile'
import Post from './Components/Pages/Post'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/register"><Register /></Route>
        <Route exact path="/profile"><Profile /></Route>
        <Route exact path="/post"><Post /></Route>
      </Switch>
    </Router>
  );
}

export default App;
