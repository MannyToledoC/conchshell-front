import { Button, Col, Container, ListGroupItem, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import ReactDOM from "react-dom";
import Message from "../Message/Message";
import "./MessageInput.scss";
function MessageInput() {
  const handleSubmit = (props) => {
    const element = <Message from="client" text={props.value} />;
    ReactDOM.render(element, document.getElementByClass("message-box"));
  };
  return (
    <div className="myContainer">
      <Form className="message-form">
        <Form.Control
          className="message-input"
          placeholder="Message"
          defaultValue="Message"
          onSubmit={handleSubmit}
        />
        <Button className="send-button bg-dark" variant="dark" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
}
export default MessageInput;
