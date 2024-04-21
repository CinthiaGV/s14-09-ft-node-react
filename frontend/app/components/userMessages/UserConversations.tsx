'use client';

import { ReactNode, useState } from 'react';
import ConversationArea from './Conversation/ConversationArea';
//import ChatArea from './Chat/ChatArea';
import ChatArea from './Chat/ChatArea';
import UserProfile from './User/UserProfile';
import { Conversation, IUserConversations } from './interfaces';

export default function UserConversations({
  user,
  conversations,
}: IUserConversations): ReactNode {
  const [selectedConversation, setSelectedConversation] = useState<
    Conversation | null
  >();

  return (
    <>
      {!selectedConversation ? (
        <div className="w-1/3 grid grid-rows-3">
          <UserProfile user={user} />
          <div className="bg-[#131212] border-l-2 border-[#49454F]">
            {/*<p className="text-[#ACA5A5] px-10 mt-5 text-[18px] ">Mensajes</p>*/}
            <div className="row-start-2">
              <ConversationArea
                conversations={conversations}
                setSelectedConversation={setSelectedConversation}
              />
            </div>
          </div>
        </div>
      ) : (
        <ChatArea conversation={selectedConversation} setSelectedConversation={setSelectedConversation}/>
      )}
    </>
  );
}
