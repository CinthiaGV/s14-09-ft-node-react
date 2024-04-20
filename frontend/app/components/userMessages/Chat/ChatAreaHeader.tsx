import { IChatArea } from '../interfaces';

export default function ChatAreaHeader({ conversation }: IChatArea) {
  return (
    <div className="chat-area-header">
      <div className="chat-area-title">{conversation.recipient.name}</div>
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
