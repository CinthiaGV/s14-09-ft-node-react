import { Key, ReactNode } from 'react';
import { Conversation, IConversationArea } from '../interfaces';
import LastConversation from './LastConversation';
import NoConversations from './NoConversations';

export default function ConversationArea({
  conversations,
  setSelectedConversation,
}: IConversationArea) {
  return conversations?.length>0
      ?(<div>
      <span className="text-[#ACA5A5] px-5 mt-5 text-[18px] ">Mensajes</span>
      <div className="max-h-[calc(100vh-4rem)] max-w-full hover:overflow-y-auto">
        {conversations?.map(
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
    </div>):(
      <NoConversations/>
    )}
