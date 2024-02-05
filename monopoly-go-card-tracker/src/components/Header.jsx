import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MONOPOLY_GO_LOGO = "https://monopoloygotracker.s3.us-east-2.amazonaws.com/MonopolyGoLogo.PNG"
const examplePercent = 50;
const examplePercentageString = `${examplePercent} / 100`;
let seasonEndDate = new Date("03/28/2024");

let currentDate = new Date();
let differenceInTime = seasonEndDate.getTime() - currentDate.getTime();
let days = Math.round(differenceInTime / (1000 * 3600 * 24));

const Header = () => {
  return (
    <div>
      <Image className="headerImage" src={MONOPOLY_GO_LOGO} fluid />
      <Container>
        <Row className="headerValues">
          <Col className="headerCountDown">Time Left: <b>{days}</b> days</Col>
          <Col className="headerProgressBar">
            <ProgressBar now={examplePercent} variant="overall_progress" label={examplePercentageString} />
          </Col>

        </Row>
      </Container>

    </div>
  )
}

export default Header;