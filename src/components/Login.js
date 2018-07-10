import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import { FieldGroup } from './FieldGroup';

export default class Login extends Component {

    static propTypes = {
        setCredentials: PropTypes.func.isRequired
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

        this.props.setCredentials(username, password);
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