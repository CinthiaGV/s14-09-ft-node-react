import clsx from 'clsx';
import { Key } from 'react';
import { IChatMsg, MsgTxt } from '../interfaces';

export default function ChatMsg({ message }: IChatMsg) {
  const owner = message.owner
  return (
    <div className={clsx('chat-msg', owner?'owner':'owner-not')}>
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
