'use client';

import ConversationArea from './Message/ConversationArea';
import UserProfile from './User/UserProfile';
import { IUserMessages } from './interfaces';

export default function UserMessages({ user, messages }: IUserMessages) {
  return (
    <div className="w-1/3 grid grid-row-3">
      <div className="flex justify-center items-center row-span-1 border-b-2 border-l-2 border-[#49454F] bg-[#131212] h-[300px] ">
        <div className="flex flex-col justify-center items-center">
          <UserProfile user={user} />
          <p className="text-[#FDF7F7] mt-5 text-[24px]">{user.name}</p>
          <p className="text-[#ACA5A5] text-[18px] mt-2">Descripcion</p>
        </div>
      </div>
      <div className="hover:overflow-auto w-full h-auto bg-[#131212] border-l-2 border-[#49454F]">
        <p className="text-[#ACA5A5] px-10 mt-5 text-[18px] ">Mensajes</p>
        <div className="row-start-2">
          <ConversationArea messages={messages} />
        </div>
      </div>
    </div>
  );
}
