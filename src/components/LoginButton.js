import React from 'react';
import { Button } from 'reactstrap';

export const LoginButton = ({ ...props }) =>
    <Button
        type="submit"
        size="lg"
        block
        {...props}
    >
        Log in
    </Button>;