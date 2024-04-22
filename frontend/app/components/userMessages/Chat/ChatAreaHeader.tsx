import { Image } from '@nextui-org/react';
import clsx from 'clsx';
import { FiArrowLeft } from 'react-icons/fi'; // Importa el ícono de retroceso
import { IChatAreaHeader } from '../interfaces';

export default function ChatAreaHeader({
  conversation, setSelectedConversation
}: IChatAreaHeader) {
  const profile_picture = conversation?.recipient?.profile_picture || '';
  const name = conversation?.recipient?.name || '';
  const status = conversation?.recipient?.status || ''; // Asegurarse de manejar el caso en que status esté vacío

  return (
    <div className="chat-area-header">
      <button onClick={() => setSelectedConversation(null)}>
        <FiArrowLeft className="w-20 h-6 mr-0 back-arrow"/>
      </button>
        <div className={clsx('msg','online', status === 'online'?'online':'')}>
          <Image
            className="w-[2.75rem] h-[2.75rem] rounded-full"
            src={profile_picture || `https://picsum.photos/30/30?r=${Math.random()}`}
            alt={name}
          />
      </div>
      <div className="chat-area-title">{name}</div>
    </div>
  );
}
