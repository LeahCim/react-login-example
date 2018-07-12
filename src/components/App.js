import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { encode } from 'base-64';

import './App.css';
import Login from './Login';
import Data from './Data';
import { Page } from './Page';
import LogoutLink from './LogoutLink';
import { LOGIN, DATA } from '../Routes';

const CREDENTIALS = "credentials";

export default class App extends Component {

  state = {
    credentials: null
  }

  componentDidMount() {
    this.setState({
      credentials: localStorage.getItem(CREDENTIALS) || ''
    });
  }

  setCredentials = (username, password) => {
    const credentials = encode(`${username}:${password}`);

    this.setState({
      credentials
    });

    localStorage.setItem(CREDENTIALS, credentials);
  }

  resetCredentials = () => {
    this.setState({
      credentials: ''
    });

    localStorage.removeItem(CREDENTIALS);
  }

  loginRender = (props) =>
    <div>
      <Login setCredentials={this.setCredentials} {...props} />
      <Link to={DATA}>Data</Link>
    </div>

  dataRender = (props) =>
    <Data
      credentials={this.state.credentials}
      resetCredentials={this.resetCredentials}
      {...props}
    />

  render = () =>
    this.state.credentials !== null &&
    <Router>
      <Page>
        <LogoutLink
          credentials={this.state.credentials}
          resetCredentials={this.resetCredentials}
        />
        <Switch>
          <Route path={LOGIN} render={this.loginRender} />
          <Route path={DATA} render={this.dataRender} />
          <Redirect to={LOGIN} />
        </Switch>
      </Page>
    </Router>
}