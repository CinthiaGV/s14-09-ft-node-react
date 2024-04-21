import { Image } from '@nextui-org/react';
import { IChatArea } from '../interfaces';

export default function ChatAreaHeader({ conversation }: IChatArea) {
  const profile_picture = conversation?.recipient?.profile_picture || "";
  const name = conversation?.recipient?.name || "";

  return (
    <div className="chat-area-header">
      <div className="chat-area-profile">
        <Image src={profile_picture} alt={name} />
      </div>
      <div className="chat-area-title">{name}</div>
    </div>
  );
}
