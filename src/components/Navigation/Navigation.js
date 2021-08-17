import Container from "react-bootstrap/Container";

import AboutMe from "../../components/AboutMe/AboutMe";
import ContactForm from "../../components/ContactForm/ContactForm";
import ProjectList from "../../components/ProjectList/ProjectList";
import Resume from "../../components/Resume/Resume";

function Navigation({currentSection}) {
  return (
      <Container>
        {currentSection === "about-me" ? (
          <AboutMe />
        ) : currentSection === "portfolio" ? (
          <ProjectList />
        ) : currentSection === "contact" ? (
          <ContactForm />
        ) : (
          <Resume />
        )}
      </Container>
  );
}

export default Navigation;
