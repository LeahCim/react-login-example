import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { LOGIN } from './shared/routes';

export default function LogoutLink({ credentials, resetCredentials }) {
    if (credentials)
        return <Link to={LOGIN} onClick={resetCredentials}>Log out</Link>

    return null;
}

LogoutLink.propTypes = {
    credentials: PropTypes.string.isRequired,
    resetCredentials: PropTypes.func.isRequired
}