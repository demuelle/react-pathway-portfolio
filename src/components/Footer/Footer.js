import "./Footer.css";

import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

function Footer() {
  return (
    // <Container>
    //   <Row>
    //     <Col style={{ maxHeight: "10px" }}>
          <Nav className="justify-content-center footer" activeKey="/home">
            <Nav.Item style={{width:"100px"}}>
              <Nav.Link target="_blank" href="https://github.com/demuelle">
                <Image src={require(`../../assets/logos/GitHub_Logo.png`).default} alt="GitHub" fluid />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{width:"100px"}}>
              <Nav.Link target="_blank" href="https://www.linkedin.com/in/dan-mueller-0a73182/">
                <Image src={require(`../../assets/logos/LI-Logo.png`).default} alt="LinkedIn" fluid />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{width:"50px"}}>
              <Nav.Link target="_blank" href="https://twitter.com/demuelle">
                <Image src={require(`../../assets/logos/2021 Twitter logo - blue.png`).default} alt="Twitter" fluid />
              </Nav.Link>
            </Nav.Item>
          </Nav>
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default Footer;
