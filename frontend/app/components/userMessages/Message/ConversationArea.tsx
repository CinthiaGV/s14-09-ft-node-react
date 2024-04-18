import { Key, ReactNode } from 'react';
import { Conversation, IConversationArea } from '../interfaces';
import LastConversation from './LastConversation';

export default function ConversationArea({ conversations }: IConversationArea) {
  return (
    <div className="overflow-y-auto">
      {conversations.map(
        (conversation: Conversation, index: Key): ReactNode => {
          return <LastConversation key={index} conversation={conversation} />;
        }
      )}
    </div>
  );
}
