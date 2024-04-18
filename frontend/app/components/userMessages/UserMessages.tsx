'use client'

import Contacts from "./Message/ConversationArea";
import UserProfile from "./User/UserProfile";
import { IUserMessages } from "./interfaces";


export default function UserMessages({ user, messages }:IUserMessages) {
  return (
    <div className='w-1/3 grid grid-row-3 wrapper'>
      <div className='row-span-1 border-b-1 border-white justify-center'>
      <UserProfile user={user}/>
      </div>
      <div className='row-start-2'>
      <Contacts messages={messages}/>
      </div>
    </div>
  );
};
