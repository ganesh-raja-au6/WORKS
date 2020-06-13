import React, { Component, Fragment } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from "axios";
import "./App.css";

import Navbar from "./components/layouts/Navbar";
import Alert from "./components/layouts/alert"
import Search from "./components/users/search";
import Users from "./components/users/users";
import User from './components/users/User'
import About from './components/layouts/about'

class App extends Component {
  state = {
    users: [],
    user : {},
    loading: false,
    alert : null
  };
  // async componentDidMount(){
  //   this.setState({ loading: true })
  //   const response = await axios.get(`https://api.github.com/users?client=${process.env.GITHUB_CLIENT_ID}&clientSecret=${process.env.GITHUB_CLIENT_SECRET}`)
  //   this.setState({ users: response.data, loading: false})
  // }
  getUser = async (username) => {
    this.setState({loading: true})
    const response = await axios.get(`https://api.github.com/users/${username}?client=${process.env.GITHUB_CLIENT_ID}&clientSecret=${process.env.GITHUB_CLIENT_SECRET}`)
    this.setState({user : response.data, loading : false})
  }
  onSearch = async (text) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client=${process.env.GITHUB_CLIENT_ID}&clientSecret=${process.env.GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: response.data.items, loading: false });
  };
  onClearUsers = (_) => this.setState({ loading: false, users: [] });
  setAlert  = (msg, type) => {
    this.setState({alert :{msg, type} })
    setTimeout(() => this.setState({alert : null}), 2000)
  }
  render() {
    const { users, user, loading } = this.state;
    return (
      <Router>
        <Navbar title="Github Finder" icon="fa fa-github" />
        <div className="container">
          <Alert alert={this.state.alert}/>
          <Switch>
            <Route exact path="/" render={props => (
              <Fragment>
                <Search
                  searchItem={this.onSearch}
                  clearUsers={this.onClearUsers}
                  showClear={this.state.users.length > 0 ? true : false}
                  setAlert={this.setAlert}
                />
                <Users users={users} loading={loading} />
              </Fragment>
            )} />
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:username' render={props => (
              <User {...props} getUser={this.getUser} user={user} />
            )} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
