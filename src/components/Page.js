import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';

export const Page = (props) =>
    <Grid>
        <Row>
            <Col mdOffset={4} md={4}>
                {props.children}
            </Col>
        </Row>
    </Grid>;

Page.propTypes = {
    children: PropTypes.node
};