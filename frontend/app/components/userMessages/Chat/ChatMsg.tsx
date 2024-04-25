import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import { Key } from 'react';
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
        {message?.content?.map((content:MsgTxt, index:Key)=>(
          <div key={index} className="chat-msg-text">{content.text}</div>
        ))}
      </div>
    </div>
  );
}
