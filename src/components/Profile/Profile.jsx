import "./Profile.scss";
import {
  Card,
  Button,
  Placeholder,
  Container,
  Row,
  Col,
  Accordion,
  AccordionButton,
  PlaceholderButton,
} from "react-bootstrap";
function Profile() {
  return (
    <div>
      <Container>
        <Row>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <Placeholder>Chatter User</Placeholder>
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Col>
                  <Col>
                    <PlaceholderButton bg="primary">Go To</PlaceholderButton>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <Placeholder>Chatter User</Placeholder>
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Col>
                  <Col>
                    <PlaceholderButton bg="primary">Go To</PlaceholderButton>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </Container>
    </div>
  );
}
export default Profile;
