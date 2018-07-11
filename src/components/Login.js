import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import { FieldGroup } from './FieldGroup';
import { DATA } from '../Routes';

export default class Login extends Component {

    static propTypes = {
        setCredentials: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired
    }

    state = {
        username: 'User',
        password: 'Password'
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

    render = () =>
        <form id="login-form">
            <FieldGroup
                label="Username"
                id="username"
                autoFocus="autoFocus"
                value={this.state.username}
                onChange={this.onUsernameChange}
            />
            <FieldGroup
                label="Password"
                id="password"
                type="password"
                value={this.state.password}
                onChange={this.onPasswordChange}
            />
            <Button type="submit" onClick={this.onSubmit}>
                Submit
            </Button>
        </form>
}