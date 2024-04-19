import { Key, ReactNode } from 'react';
import { IChatArea, Message } from '../interfaces';
import ChatAreaFooter from './ChatAreaFooter';
import ChatMsg from './ChatMsg';

export default function ChatArea({ conversation }: IChatArea) {
  return (
    <div className="chat-area">
      <div className="chat-area-header">
        <div className="chat-area-title">{conversation.recipient.name}</div>
      </div>
      <div className="chat-area-main">
      {conversation.messages.map(
        (message:Message, index:Key):ReactNode=>(<ChatMsg key={index} message={message}/>)
      )} 
      </div>
      <ChatAreaFooter/>
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
