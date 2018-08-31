import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { encode } from 'base-64';

import Login from './Login';
import Data from './Data';
import Page from './Page';
import LogoutLink from './LogoutLink';
import PrivateRoute from './PrivateRoute';
import { LOGIN, DATA } from './shared/routes';
import { CREDENTIALS, NO_CREDENTIALS, PENDING_CREDENTIALS } from './shared/constants';

export default class App extends Component {

  state = {
    credentials: PENDING_CREDENTIALS
  }

  componentDidMount() {
    this.setState({
      credentials: localStorage.getItem(CREDENTIALS) || NO_CREDENTIALS
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
      credentials: NO_CREDENTIALS
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
    <Router>
      <Page>
        <LogoutLink
          credentials={this.state.credentials}
          resetCredentials={this.resetCredentials}
        />
        <Switch>
          <Route path={LOGIN} render={this.loginRender} />
          <PrivateRoute
            credentials={this.state.credentials}
            path={DATA}
            render={this.dataRender}
          />
          <Redirect to={LOGIN} />
        </Switch>
      </Page>
    </Router>
}