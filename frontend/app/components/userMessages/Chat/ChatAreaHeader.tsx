import { Image } from '@nextui-org/react';
import { IChatAreaHeader } from '../interfaces';

export default function ChatAreaHeader({
  conversation, setSelectedConversation
}: IChatAreaHeader) {
  const profile_picture = conversation?.recipient?.profile_picture || '';
  const name = conversation?.recipient?.name || '';

  return (
    <div className="chat-area-header">
      <div className="chat-area-profile">
        <button onClick={() =>setSelectedConversation(null)}>Atrás</button>
        <Image src={profile_picture} alt={name} />
      </div>
      <div className="chat-area-title">{name}</div>
    </div>
  );
}
