import React from 'react';
import { Route, Redirect } from 'react-router';
import PropTypes from 'prop-types';

import { PENDING_CREDENTIALS, NO_CREDENTIALS } from './shared/constants';
import { LOGIN } from './shared/routes';

export default function PrivateRoute({ credentials, ...rest }) {
    switch (credentials) {
        case PENDING_CREDENTIALS: return false;
        case NO_CREDENTIALS: return <Redirect to={LOGIN} />
        default: return <Route {...rest} />
    }
}

PrivateRoute.propTypes = {
    credentials: PropTypes.string
}