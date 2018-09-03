import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

export default function Page(props) {
    return (
        <Container>
            <Row>
                <Col md={{ size: 4, offset: 4 }}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    );
}

Page.propTypes = {
    children: PropTypes.node
};