import { Key, ReactNode } from 'react';
import { IChatAreaMain, Message } from '../interfaces';
import ChatMsg from './ChatMsg';

export default function ChatAreaMain({ conversation }: IChatAreaMain) {
  const messages = conversation?.messages;
  
  return (
    <div className="hover:overflow-y-auto" style={{ maxHeight: 'calc(100vh - 4rem)' }}>
      {messages?.map((message: Message, index: Key): ReactNode => (
        <ChatMsg key={index} message={message} />
      ))}
    </div>
  );
}
