import React from 'react';

import Api from '../api';

export default class Data extends React.Component {

    state = {
        data: []
    }

    async componentDidMount() {
        const { credentials } = this.props;

        try {
            const { Results } = await Api.getData(credentials);

            this.setState({
                data: Results
            });

        } catch (error) {
            alert(error);
        }
    }

    render = () =>
        <ul id="data">
            {this.state.data.map(
                ({ Name }, i) =>
                    <li key={i}>{Name}</li>
            )}
        </ul>

}