import { Key, ReactNode } from 'react';
import { Conversation, IConversationArea } from '../interfaces';
import LastConversation from './LastConversation';

export default function ConversationArea({
  conversations,
  setSelectedConversation,
}: IConversationArea) {
  return (
    <div className="overflow-auto ">
      {conversations.map(
        (conversation: Conversation, index: Key): ReactNode => {
          return <LastConversation key={index} conversation={conversation} setSelectedConversation={setSelectedConversation}/>;
        }
      )}
    </div>
  );
}

{
  /*<div className="overflow-y-auto">
      {conversations.map(
        (conversation: Conversation, index: Key): ReactNode => {
          return <LastConversation key={index} conversation={conversation} />;
        }
      )}
    </div>*/
}
