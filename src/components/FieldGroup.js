import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';

export const FieldGroup = ({ label, ...rest }) =>
    <FormGroup>
        <Label>{label}</Label>
        <Input
            bsSize="lg"
            required
            {...rest}
        />
    </FormGroup>;

FieldGroup.propTypes = {
    label: PropTypes.string.isRequired
};