import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export const FieldGroup = ({ id, label, ...rest }) =>
    <FormGroup controlId={id} bsSize="large">
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...rest} />
    </FormGroup>;

FieldGroup.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};