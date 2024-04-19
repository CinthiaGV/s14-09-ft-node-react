import { Key } from 'react';
import { IChatMsg, MsgTxt } from '../interfaces';

export default function ChatMsg({ message }: IChatMsg) {
  return (
    <div className="chat-msg owner">
      <div className="chat-msg-content">
        {message.content.map((msgTxt: MsgTxt, index: Key) => (
          <div key={index} className="chat-msg-text">
            {msgTxt.text}
          </div>
        ))}
      </div>
    </div>
  );
}
