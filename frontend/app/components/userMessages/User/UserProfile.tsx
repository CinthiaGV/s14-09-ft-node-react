import { IUserProfile } from '../interfaces';
import { signOut } from 'next-auth/react';
import NoProfilePhoto from './NoProfilePhoto';
import { TbLogout } from 'react-icons/tb';

export default function UserProfile({ user }: IUserProfile) {
  return (
    <div className="flex justify-center items-center row-span-1 border-b-2 border-l-2 border-[#49454F] bg-[#131212] h-[18.75rem] ">
      <div className="absolute right-0 top-0 mt-2 mr-2">
        <button
          className="btn yellowBtn"
          onClick={() => signOut({ callbackUrl: '/' })}
        >
          <TbLogout />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        {!user.image ? <NoProfilePhoto name={user.username} /> : <>fgdfgh</>}
        <p className="text-[#FDF7F7] mt-5 text-[24px]">{user.username}</p>
      </div>
    </div>
  );
}
