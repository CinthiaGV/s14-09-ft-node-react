
import { Image } from "@nextui-org/react";
import clsx from 'clsx';
import { IConversation } from "../interfaces";
import LastSentMsg from "./LastSentMsg";
export default function LastConversation({ conversation }: IConversation) {
  const status = conversation.recipient.status
  const profile_picture = conversation.recipient.profile_picture
  const name = conversation.recipient.name
  const index = conversation.messages.length-1
  const lastMsg = conversation.messages[index]
  return (
    <div className={clsx('msg', status==='online'?'online':'')}>
      <Image
        className="msg-profile"
        src={profile_picture || `https://picsum.photos/30/30?r=${Math.random()}`}
        alt={name}
      />
      <div className="msg-detail">
        <div className="msg-username">{name}</div>
        <LastSentMsg message={lastMsg}/>
      </div>
    </div>
  );
}
