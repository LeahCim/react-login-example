import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DATA } from './shared/routes';
import { DEFAULT_USERNAME, DEFAULT_PASSWORD } from '../config';
import LoginForm from './LoginForm';

export default class Login extends Component {

    static propTypes = {
        setCredentials: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired
    }

    state = {
        username: DEFAULT_USERNAME,
        password: DEFAULT_PASSWORD
    }

    onUsernameChange = ({ target }) =>
        this.setState({
            username: target.value
        })

    onPasswordChange = ({ target }) =>
        this.setState({
            password: target.value
        })

    onSubmit = (event) => {
        event.preventDefault();

        const { username, password } = this.state;
        const { setCredentials, history } = this.props;

        setCredentials(username, password);
        history.push(DATA);
    }

    isFormValid = () =>
        this.state.username.length &&
        this.state.password.length

    render = () =>
        <LoginForm
            onSubmit={this.onSubmit}
            username={this.state.username}
            password={this.state.password}
            onUsernameChange={this.onUsernameChange}
            onPasswordChange={this.onPasswordChange}
            isFormValid={this.isFormValid}
        />
}