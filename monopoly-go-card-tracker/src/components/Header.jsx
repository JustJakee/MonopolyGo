import React from 'react';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MONOPOLY_GO_LOGO = "https://monopoloygotracker.s3.us-east-2.amazonaws.com/MonopolyGoLogo.PNG";
const seasonEndDate = new Date("09/26/2024");

const Header = ({ progress = 0 }) => {
    const currentDate = new Date();
    const differenceInTime = seasonEndDate.getTime() - currentDate.getTime();
    const days = Math.round(differenceInTime / (1000 * 3600 * 24));

    const totalCards = 207;
    const progressBarPercentage = (progress / totalCards) * 100;

    return (
        <div>
            <Image className="headerImage" src={MONOPOLY_GO_LOGO} fluid />
            <Container>
                <Row className="headerValues">
                    <Col className="headerCountDown">Time Left: <b>{days}</b> days</Col>
                    <Col className="headerProgressBar">
                      <ProgressBar now={progressBarPercentage} variant="overall_progress" label={`${progress} / ${totalCards}`} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;