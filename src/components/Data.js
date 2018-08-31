import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Data extends Component {

    static propTypes = {
        data: PropTypes.arrayOf(
            PropTypes.shape({
                Id: PropTypes.string.isRequired,
                Name: PropTypes.string.isRequired
            })
        ).isRequired,
        getData: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getData();
    }

    render() {
        const { data } = this.props;

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