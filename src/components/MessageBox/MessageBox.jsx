import Message from "./../Message";
import MessageInput from "./../MessageInput";

import { useSelector } from "react-redux";

import "./MessageBox.scss";

function MessageBox(props) {
  // let msg1 = { from: "from-username", text: "lorem ipsum..." };
  const messages = useSelector((state) => state.messages);

  return (
    <div className="message-box">
      {messages.data.map((msg) => (
        <Message key={msg.id} from={msg.from} message={msg.message} />
      ))}
      <MessageInput />
    </div>
  );
}
export default MessageBox;
