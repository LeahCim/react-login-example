import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const LoginButton = ({ onSubmit, isEnabled }) =>
    <Button
        type="submit"
        bsSize="large"
        block
        onClick={onSubmit}
        disabled={!isEnabled()}
    >
        Login
    </Button>;

LoginButton.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    isEnabled: PropTypes.func.isRequired
}