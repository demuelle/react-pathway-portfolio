import { useState } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContactForm() {
  const [contactInfo, setContactInfo] = useState({});
  const [validated, setValidated] = useState(false);

  console.log(contactInfo);

  const updateContactInfo = (e) => {
    setValidated(true);
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Row>
        <Col style={{ textAlign: "center" }}>
          <h2>Say hi.</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form validated={validated} >
            <Form.Group className="mb-3" controlId="contactForm.name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Your Name"
                name="name"
                value={contactInfo.name}
                onChange={updateContactInfo}
              />
              <Form.Control.Feedback type="invalid">
                Name is required.
              </Form.Control.Feedback>{" "}
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactForm.email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="name@example.com"
                name="email"
                value={contactInfo.email}
                onChange={updateContactInfo}
              />
              <Form.Control.Feedback type="invalid">
                A properly formed email address is required.
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                Thanks.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactForm.message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={3}
                name="message"
                value={contactInfo.message}
                onChange={updateContactInfo}
              />
              <Form.Control.Feedback type="invalid">
                Message is required.
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default ContactForm;
