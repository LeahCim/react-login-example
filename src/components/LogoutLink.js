import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { LOGIN } from './shared/routes';

export default function LogoutLink({ credentials, resetCredentials }) {
    return !!credentials &&
        <Link to={LOGIN} onClick={resetCredentials}>
            Log out
         </Link>;
}

LogoutLink.propTypes = {
    credentials: PropTypes.string,
    resetCredentials: PropTypes.func.isRequired
}