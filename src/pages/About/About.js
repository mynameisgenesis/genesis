import React, { Fragment } from 'react';
import Title from '../../components/Title/Title';
import { Row, Col } from 'react-bootstrap';

const About = () => {
    return(
        <Fragment>
            <Title>About</Title>
            <Row>
                <Col className="text-center">
                    <p>I am 27-years-old. I am a Software Developer living in Colorado.</p>
                </Col>
            </Row>
        </Fragment>
        
    );
}

export default About;