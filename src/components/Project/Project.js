import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProjectList() {
  const projects = [
    {
      title: "About me",
      image: "what_i_like.jpg",
      githubUrl: "https://github.com/demuelle/demuelle.github.io",
      deployedUrl: "https://demuelle.github.io/",
    },
    {
      title: "Oh, Snap!",
      image: "oh_snap.jpg",
      githubUrl: "https://github.com/demuelle/photo-port",
      deployedUrl: "https://demuelle.github.io/photo-port/",
    },
    {
      title: "Pet Pals",
      image: "pet_pals.jpg",
      githubUrl: "https://github.com/demuelle/Pet_Pals",
      deployedUrl: "https://pet-pals-2021.herokuapp.com/",
    },
    {
      title: "The Force",
      image: "the_force.jpg",
      githubUrl: "https://github.com/demuelle/examples-fullstack",
      deployedUrl: "https://intense-citadel-89254.herokuapp.com/",
    },
    {
      title: "Hot Restaurant",
      image: "hot_restaurant.jpg",
      githubUrl: "https://github.com/demuelle/heroku_magic",
      deployedUrl: "https://hot-restaurant-demuelle.herokuapp.com/",
    },
    {
      title: "Chatty Watty",
      image: "chatty_watty.jpg",
      githubUrl: "https://github.com/demuelle/udemy_node_chat_app",
      deployedUrl: "https://mueller-chat-application.herokuapp.com/",
    },
  ];
  return (
      <Row>
        {projects.map((p) => {
          return (
            <Col xs={12} sm={6} md={4} className="mb-3">
              <Card >
                <Card.Img variant="top" src={require(`../../assets/project-screenshots/${p.image}`).default} alt={p.title} />
                <Card.Body>
                  <Card.Title>{p.title}</Card.Title>
                  <Card.Link target="_blank" href={p.deployedUrl}>Check it out</Card.Link>
                  <Card.Link target="_blank" href={p.githubUrl}>Source</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
  );
}


export default ProjectList;
