
import { ILastSentMessage } from "../interfaces";
export default function LastSentMsg({ message }: ILastSentMessage) {
  return (
        <div className="msg-content">
          <span className="msg-message">
            {message.content[0].text}
          </span>
          <span className="msg-date">
            {message.content[0].timestamp}
          </span>
        </div>
  );
}
