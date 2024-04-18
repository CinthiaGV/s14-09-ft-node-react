
import { ILastSentMessage } from "../interfaces";
export default function LastSentMsg({ message }: ILastSentMessage) {
  return (
        <div className="msg-content">
          <span className="msg-message">
            {message.text}
          </span>
          <span className="msg-date">
            {message.timestamp}
          </span>
        </div>
  );
}
