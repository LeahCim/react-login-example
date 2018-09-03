import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FieldGroup } from './FieldGroup';
import { LoginButton } from './LoginButton';

export default class LoginForm extends Component {

    static propTypes = {
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        onUsernameChange: PropTypes.func.isRequired,
        onPasswordChange: PropTypes.func.isRequired,
        isFormValid: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired
    }

    render = () =>
        <form
            id="login-form"
            className="was-validated"
            onSubmit={this.props.onSubmit}
        >
            <FieldGroup
                label="Username"
                id="username"
                type="text"
                autoFocus
                value={this.props.username}
                onChange={this.props.onUsernameChange}
            />
            <FieldGroup
                label="Password"
                id="password"
                type="password"
                value={this.props.password}
                onChange={this.props.onPasswordChange}
            />
            <LoginButton
                disabled={!this.props.isFormValid()}
            />
        </form>
}