import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { messageActions } from "./../../store/actions";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useState } from "react";
import { useSelector } from "react-redux";

import "./MessageInput.scss";

function MessageInput() {
  const [message, setMessage] = useState("");
  const [sampleCounter, setSampleCounter] = useState(0);
  const messages = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  const { appendMessage } = bindActionCreators(messageActions, dispatch);

  const handleSubmit = () => {
    setSampleCounter(messages.data.length + 1);
    appendMessage({ id: sampleCounter, from: "Employee", message });
    setMessage("");
  };
  const handleEnterSubmit = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <div className="myContainer">
      <div className="message-form">
        <Form.Control
          className="message-input"
          placeholder="Message"
          value={message}
          onInput={(e) => setMessage(e.target.value)}
          onKeyDown={handleEnterSubmit}
        />
        <Button
          className="send-button bg-dark"
          variant="dark"
          onClick={handleSubmit}
        >
          Send
        </Button>
      </div>
    </div>
  );
}
export default MessageInput;
