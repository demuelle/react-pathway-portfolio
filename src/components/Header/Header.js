import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Header({currentSection, setCurrentSection }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Dan Mueller</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about-me" onClick={() => setCurrentSection("about-me")} className={currentSection === 'about-me' ? 'active' : ''}>About Me</Nav.Link>
            <Nav.Link href="#portfolio" onClick={() => setCurrentSection("portfolio")}  className={currentSection === 'portfolio' ? 'active' : ''}>Portfolio</Nav.Link>
            <Nav.Link href="#contact" onClick={() => setCurrentSection("contact")} className={currentSection === 'contact' ? 'active' : ''}>Contact</Nav.Link>
            <Nav.Link href="#resume" onClick={() => setCurrentSection("resume")} className={currentSection === 'resume' ? 'active' : ''}>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
