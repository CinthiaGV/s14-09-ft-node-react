import { IChatArea } from '../interfaces';
import ChatAreaFooter from './ChatAreaFooter';
import ChatAreaHeader from './ChatAreaHeader';
import ChatAreaMain from './ChatAreaMain';

export default function ChatArea({ conversation, setSelectedConversation}: IChatArea) {
  return (
    <div className='grid grid-rows-10'>
      <div className='row-span-1'>
        <ChatAreaHeader conversation={conversation} setSelectedConversation={setSelectedConversation}/>
      </div>
      <div className='row-start-2 row-span-8 w-full'>
        <div className='max-h-[calc(100vh-4rem)] overflow-y-auto'>
          <ChatAreaMain conversation={conversation}/> 
        </div>
      </div>
      <ChatAreaFooter/>
    </div>
  );
}
