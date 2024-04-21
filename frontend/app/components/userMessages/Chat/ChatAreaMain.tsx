import { Key, ReactNode } from 'react';
import { IChatArea, Message } from '../interfaces';
import ChatMsg from './ChatMsg';

export default function ChatAreaMain({ conversation }: IChatArea) {
  const messages = conversation?.messages
  return (
      <div>
      {messages.map(
        (message:Message, index:Key):ReactNode=>(<ChatMsg key={index} message={message}/>)
      )} 
      </div>
  );
}

/*<div className="overflow-y-auto">
        {conversation.map(
          (conversation: Conversation, index: Key): ReactNode => (
            <ChatMsg key={index} messages={messages} />
          )
        )}
      </div>*/
