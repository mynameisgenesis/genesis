import React, { Fragment } from 'react';
import Title from '../../components/Title/Title';
import { Row, Col, Image } from 'react-bootstrap';
import Avatar from '../../images/avatar.png';

const About = () => {
    return(
        <Fragment>
            <Title>About</Title>
            <Row>
                <Col className="text-center">
                    <p>I am 27-years-old.</p>
                </Col>
            </Row>
        </Fragment>
        
    );
}

export default About;