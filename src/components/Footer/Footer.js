import "./Footer.css";

import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Footer() {
  return (
    // <Container>
    //   <Row>
    //     <Col style={{ maxHeight: "10px" }}>
          <Nav className="justify-content-center footer" activeKey="/home">
            <Nav.Item style={{width:"100px"}}>
              <Nav.Link target="_blank" href="https://github.com/demuelle">
                <Image src="/GitHub_Logo.png" fluid />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{width:"100px"}}>
              <Nav.Link target="_blank" href="https://www.linkedin.com/in/dan-mueller-0a73182/">
                <Image src="/LI-Logo.png" fluid />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{width:"50px"}}>
              <Nav.Link target="_blank" href="https://twitter.com/demuelle">
                <Image src="/2021 Twitter logo - blue.png" fluid />
              </Nav.Link>
            </Nav.Item>
          </Nav>
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default Footer;
