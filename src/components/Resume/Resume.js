import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

function Resume() {
  return (
    <Row className="justify-content-sm-center">
      <Col sm={8} md={4} lg={3}>
        <Card className="text-center">
          <Card.Header style={{ fontWeight: "bold" }}>Skills</Card.Header>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Instruction</ListGroupItem>
            <ListGroupItem>Java</ListGroupItem>
            <ListGroupItem>JavaScript</ListGroupItem>
            <ListGroupItem>SQL</ListGroupItem>
            <ListGroupItem>Spring Boot</ListGroupItem>
            <ListGroupItem>React</ListGroupItem>
            <ListGroupItem>Node.js</ListGroupItem>
            <ListGroupItem>Linux</ListGroupItem>
            <ListGroupItem>Python</ListGroupItem>
            <ListGroupItem>MongoDB</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="/Dan Mueller Resume.pdf" download>
              Download That Resume
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Resume;
