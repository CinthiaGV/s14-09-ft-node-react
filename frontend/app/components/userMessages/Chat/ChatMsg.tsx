import clsx from 'clsx';
import { Key } from 'react';
import { useSession } from 'next-auth/react';
import { IChatMsg, MsgTxt } from '../interfaces';

export default function ChatMsg({ message }: IChatMsg) {
  const { data: session, status } = useSession();
  const owner = message.userId;

  return (
    <div
      className={clsx(
        'chat-msg',
        owner === session?.user.id ? 'owner' : 'owner-not'
      )}
    >
      <div className="chat-msg-content">
        <div className="chat-msg-text">{message.text}</div>
      </div>
    </div>
  );
}
