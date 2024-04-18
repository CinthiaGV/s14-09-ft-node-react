'use client'

//import ConversationArea from "./Message/ConversationArea";
import UserProfile from "./User/UserProfile";
import { IUserMessages } from "./interfaces";


export default function UserMessages({ user, messages }:IUserMessages) {
  return (
    <div className='w-1/3 grid grid-row-3'>
      <div className='row-span-1 border-b-1 border-white'>
      <UserProfile user={user}/>
      </div>
      <div className="hover:overflow-auto w-full h-auto">
      <div className='row-start-2'>
      {/*<ConversationArea messages={messages}/>*/}
      </div>
      </div>
    </div>
  );
};
