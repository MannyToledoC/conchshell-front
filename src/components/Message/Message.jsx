import { Form } from "react-bootstrap";
import "./Message.scss";
function Message({ message, from }) {
  return (
    <div className="message">
      <div className="message-profile" />
      <div className="message-content">
        <Form.Label className="message-user">{from}</Form.Label>
        <Form.Control
          className="message-text"
          placeholder=""
          value={message}
          readOnly
        />
      </div>
    </div>
  );
}
export default Message;
