import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Api from '../api';

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
        const { data } = this.state;

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