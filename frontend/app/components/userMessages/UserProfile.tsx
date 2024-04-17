import NoProfilePhoto from './NoProfilePhoto';
import { IUserProfile } from './interfaces';

export default function UserProfile({ user }: IUserProfile ) {
  return (
    <div className=''>
      {!user.profile_picture
      ?<NoProfilePhoto name={user.name}/>
    :<>fgdfgh</>}
    </div>
  );
}
