import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginFormContainer from './LoginFormContainer';
import DataContainer from './DataContainer';
import Page from './Page';
import LogoutLink from './LogoutLink';
import PrivateRoute from './PrivateRoute';
import { LOGIN, DATA } from './shared/routes';

export default class App extends Component {

  static propTypes = {
    credentials: PropTypes.string,
    loadCredentials: PropTypes.func.isRequired,
    setCredentials: PropTypes.func.isRequired,
    resetCredentials: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.loadCredentials();
  }

  loginRender = (props) =>
    <div>
      <LoginFormContainer setCredentials={this.props.setCredentials} {...props} />
      <Link to={DATA}>Data</Link>
    </div>

  dataRender = (props) =>
    <DataContainer
      credentials={this.props.credentials}
      resetCredentials={this.props.resetCredentials}
      {...props}
    />

  render() {
    const { credentials, resetCredentials } = this.props;

    return (
      <Router>
        <Page>
          <LogoutLink
            credentials={credentials}
            resetCredentials={resetCredentials}
          />
          <Switch>
            <Route path={LOGIN} render={this.loginRender} />
            <PrivateRoute
              credentials={credentials}
              path={DATA}
              render={this.dataRender}
            />
            <Redirect to={LOGIN} />
          </Switch>
        </Page>
      </Router>
    );
  }
}