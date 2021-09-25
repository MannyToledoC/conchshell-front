import { ListGroup } from "react-bootstrap";
import Message from "./../Message";
import MessageInput from "./../MessageInput";
import "./MessageBox.scss";
function MessageBox(props) {
  let msg1 = { from: "from-username", text: "lorem ipsum..." };
  let msgarray = [msg1, msg1, msg1, msg1];
  return (
    <div className="message-box">
      {msgarray.map((msg) => (
        <Message from={msg.from} text={msg.text} />
      ))}
      <MessageInput />
    </div>
  );
}
export default MessageBox;
