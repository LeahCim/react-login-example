import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Api from '../api';
import { LOGIN } from './shared/routes';

export default class Data extends Component {

    static propTypes = {
        credentials: PropTypes.string.isRequired,
        resetCredentials: PropTypes.func.isRequired
    }

    state = {
        data: []
    }

    async componentDidMount() {
        const { credentials, resetCredentials } = this.props;

        if (!credentials) return;

        try {
            const { Results } = await Api.getData(credentials);

            this.setState({
                data: Results
            });

        } catch (error) {
            resetCredentials();
        }
    }

    render() {
        const { credentials } = this.props;
        const { data } = this.state;

        if (!credentials.length)
            return <Redirect to={LOGIN} />;

        return (
            <ul id="data">
                {data.map(
                    ({ Id, Name }) =>
                        <li key={Id}>{Name}</li>
                )}
            </ul>
        );
    }
}