import { IChatArea } from '../interfaces';
import ChatAreaFooter from './ChatAreaFooter';
import ChatAreaHeader from './ChatAreaHeader';
import ChatAreaMain from './ChatAreaMain';

export default function ChatArea({
  conversation,
  setSelectedConversation,
}: IChatArea) {
  return (
    <div>
      <div className="row-span-1">
        <ChatAreaHeader
          conversation={conversation}
          setSelectedConversation={setSelectedConversation}
        />
      </div>
      <div className="row-start-2 row-span-1 max-h-[calc(100vh-18rem)]">
        <div className="overflow-y-auto">
          <ChatAreaMain conversation={conversation} />
        </div>
      </div>
      <div className="row-start-3 absolute">
        <div className='absolute top-0'>
          <div className="relative mt-[calc(100vh-27.5rem)] ">
            <ChatAreaFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
