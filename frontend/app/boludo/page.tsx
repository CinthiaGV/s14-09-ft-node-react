import UserConversations from '../components/userMessages/UserConversations';
import * as data from './../components/userMessages/user_1.json';
export default function Page() {
  return (
    <div className="mt-[5.5rem]">
      <div className="h-screen w-screen bg-black flex">
        <div className="w-2/3 h-full bg-red-500 flex items-center justify-center">
          <h1 className="text-white">sector Matias</h1>
        </div>
          <UserConversations user={data.user} conversations={data.conversations}/>
      </div>
    </div>
  );
}
