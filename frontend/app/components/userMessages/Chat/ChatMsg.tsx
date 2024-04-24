import clsx from 'clsx';
import { Key } from 'react';
import { IChatMsg, MsgTxt } from '../interfaces';

export default function ChatMsg({ message }: IChatMsg) {
  const owner = message.owner;
  return (
    <div className={clsx('chat-msg', owner ? 'owner' : 'owner-not')}>
      <div className="chat-msg-content">
        <div className="chat-msg-text">{message.text}</div>
      </div>
    </div>
  );
}
