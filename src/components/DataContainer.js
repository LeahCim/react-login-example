import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Data from './Data';
import { getData } from '../api';

export default class DataContainer extends Component {

    static propTypes = {
        credentials: PropTypes.string.isRequired,
        resetCredentials: PropTypes.func.isRequired
    }

    state = {
        data: []
    }

    getData = async () => {
        const { credentials, resetCredentials } = this.props;

        try {
            const { Results } = await getData(credentials);

            this.setState({
                data: Results
            });

        } catch (error) {
            resetCredentials();
        }
    }

    render() {
        return (
            <Data
                data={this.state.data}
                getData={this.getData}
            />
        );
    }
}