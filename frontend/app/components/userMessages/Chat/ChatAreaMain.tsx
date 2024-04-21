'use client'
import { Key, ReactNode } from 'react';
import { IChatAreaMain, Message } from '../interfaces';
import ChatMsg from './ChatMsg';

export default function ChatAreaMain({ conversation }: IChatAreaMain) {
  const messages = conversation?.messages
  return (
      <div>
      {messages?.map(
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
