import { IUserProfile } from '../interfaces';
import NoProfilePhoto from './NoProfilePhoto';

export default function UserProfile({ user }: IUserProfile) {
  return (
    <div className="">
      {!user.profile_picture ? (
        <NoProfilePhoto name={user.name} />
      ) : (
        <>fgdfgh</>
      )}
    </div>
  );
}
