import { IUserProfile } from '../interfaces';
import NoProfilePhoto from './NoProfilePhoto';

export default function UserProfile({ user }: IUserProfile) {
  return (
    <div className="flex justify-center items-center row-span-1 border-b-2 border-l-2 border-[#49454F] bg-[#131212] h-[18.75rem] ">
      <div className="flex flex-col justify-center items-center">
        {!user.image ? <NoProfilePhoto name={user.username} /> : <>fgdfgh</>}
        <p className="text-[#FDF7F7] mt-5 text-[24px]">{user.username}</p>
      </div>
    </div>
  );
}
