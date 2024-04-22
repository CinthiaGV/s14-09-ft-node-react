import { Key, ReactNode } from 'react';
import { Conversation, IConversationArea } from '../interfaces';
import LastConversation from './LastConversation';

export default function ConversationArea({
  conversations,
  setSelectedConversation,
}: IConversationArea) {
  return (
    <div>
      <span className="text-[#ACA5A5] px-5 mt-5 text-[18px] ">Mensajes</span>
      <div className="max-h-[calc(100vh-4rem)] max-w-full overflow-y-auto">
        {conversations.map(
          (conversation: Conversation, index: Key): ReactNode => {
            return (
              <LastConversation
                key={index}
                conversation={conversation}
                setSelectedConversation={setSelectedConversation}
              />
            );
          }
        )}
      </div>
    </div>
  );
}
