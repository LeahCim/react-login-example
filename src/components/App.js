import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { encode } from 'base-64';

import './App.css';
import Login from './Login';
import Data from './Data';
import { Page } from './Page';

export default class App extends Component {

  state = {
    credentials: ''
  }

  setCredentials = (username, password) => {
    this.setState({
      credentials: encode(`${username}:${password}`)
    });
  }

  loginRender = (props) =>
    <div>
      <Login setCredentials={this.setCredentials} {...props} />
      <Link to="/data">Data</Link>
    </div>


  dataRender = (props) => {
    var { credentials } = this.state;

    if (!credentials.length)
      return <Redirect to="/login" />;

    return <Data credentials={credentials} {...props} />;
  }

  render = () =>
    <Page>
      <Router>
        <Switch>
          <Route path="/login" render={this.loginRender} />
          <Route path="/data" render={this.dataRender} />
          <Redirect to="/login" />
        </Switch>
      </Router>
    </Page>
}