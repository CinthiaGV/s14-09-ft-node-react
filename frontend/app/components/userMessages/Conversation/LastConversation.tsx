import { Image } from '@nextui-org/react';
import clsx from 'clsx';
import { ILastConversation } from '../interfaces';
import LastSentMsg from './LastSentMsg';
import { useSession } from 'next-auth/react';

export default function LastConversation({
  conversation,
  setSelectedConversation,
}: ILastConversation) {
  const { data: session, status } = useSession();

  const profile_picture = conversation.userEmisor.image;
  const name =
    conversation.userEmisor.id === session?.user.id
      ? conversation.userReceptor.username
      : conversation.userEmisor.username;
  const lastMsg = conversation.messages[conversation.messages.length - 1];

  return (
    <div
      className={clsx('msg', status === 'online' ? 'online' : '')}
      onClick={() => setSelectedConversation(conversation)}
    >
      <Image
        className="msg-profile"
        src={
          profile_picture || `https://picsum.photos/30/30?r=${Math.random()}`
        }
        alt={name}
      />
      <div className="msg-detail">
        <div className="msg-username">{name}</div>
        <LastSentMsg message={lastMsg} />
      </div>
    </div>
  );
}
