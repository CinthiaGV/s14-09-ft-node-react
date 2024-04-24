import { IUserProfile } from '../interfaces';
import { signOut } from 'next-auth/react';
import NoProfilePhoto from './NoProfilePhoto';
import { TbLogout } from 'react-icons/tb';
import { getProfile } from '../../../api/actions/messages';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

export default function UserProfile({ user }: IUserProfile) {
  const { data: session, status } = useSession();
  const [userGet, setUserGet] = useState();

  useEffect(() => {
    const fetchProfile = async () => {
      if (session) {
        try {
          const convos = await getProfile(session);
          console.log(convos);
          setUserGet(convos.data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    console.log(userGet);
    fetchProfile();
  }, [session]);

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
      <a href="/profile">
        <div className="flex flex-col justify-center items-center">
          {!userGet?.image ? (
            <NoProfilePhoto name={user.username} />
          ) : (
            <img src={`${userGet.image}`} alt={`${user.username}`} />
          )}
          <p className="text-[#FDF7F7] mt-5 text-[24px]">{user.username}</p>
        </div>
      </a>
    </div>
  );
}
