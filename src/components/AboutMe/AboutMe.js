import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

function AboutMe() {
  return (
      <Row>
        <Col xs={12} sm={4}>
          <Image
            src={require(`../../assets/dan-mueller-568.jpg`).default}
            alt="Dan Mueller"
            fluid
            rounded
          />
        </Col>
        <Col xs={12} sm={8}>
          <Card>
            <Card.Body>
              <Card.Text>
                <p>
                  While I was developer, I had a conversation with a buddy about
                  our dream jobs. I thought for a bit and came up with, "I'd
                  like to teach technical things to non-technical people." I had
                  no inkling that I would ever actually do that, but after 19
                  years of professional software development, I was solicited on
                  LinkedIn for a job as a software boot camp instructor.
                </p>
                <p>
                  Students in the boot camps I teach aren't necessarily
                  non-technical. In fact, it's a much easier road for those with
                  strong technical skills. However, there is no expectation of
                  prior software experience. And that makes it all the more
                  rewarding as an instructor when a student starts from zero
                  software development experience, and ends up with a
                  development job.
                </p>
                <p>
                  I started teaching software boot camps in 2019. I've taught
                  Java plus Spring Boot, full stack JavaScript (MERN), and Data
                  Science and Visualization, for Trilogy Education Services, a
                  2U Brand. I've taught (online) at Northwestern University, the
                  University of Denver, the University of Minnesota, and
                  Southern Methodist University.
                </p>
                <p>
                  Aside from students achieving their goals &ndash; employment,
                  or otherwise &ndash; I want my students to come out of a boot
                  camp with the understanding of what is possible, the skill to
                  overcome technical hurdles, and the confidence gained from
                  flexing their development muscles to complete their
                  coursework.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
  );
}

export default AboutMe;
