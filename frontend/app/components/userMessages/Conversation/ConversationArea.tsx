import { Key, ReactNode } from 'react';
import { Conversation, IConversationArea } from '../interfaces';
import LastConversation from './LastConversation';

export default function ConversationArea({
  conversations,
  handleShowMessage,
  handleUserID,
}: IConversationArea & {
  handleShowMessage: (status: boolean) => void;
  handleUserID: (id: number) => void;
}) {
  return (
    <div className="overflow-auto">
      {conversations.map(
        (conversation: Conversation, index: Key): ReactNode => {
          return (
            <LastConversation
              key={index}
              conversation={conversation}
              onClick={(id) => {
                handleShowMessage(false);
                handleUserID(id);
              }}
            />
          );
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
