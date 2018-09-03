import React, { Component } from 'react';
import { encode } from 'base-64';

import App from './App';
import { CREDENTIALS, NO_CREDENTIALS, PENDING_CREDENTIALS } from './shared/constants';

export default class AppContainer extends Component {

    state = {
        credentials: PENDING_CREDENTIALS
    }

    componentDidMount() {
        this.loadCredentials();
    }

    loadCredentials = () => {
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

    render = () =>
        <App
            credentials={this.state.credentials}
            setCredentials={this.setCredentials}
            resetCredentials={this.resetCredentials}
        />
}