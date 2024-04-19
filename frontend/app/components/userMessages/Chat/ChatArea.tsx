import { Key, ReactNode } from "react";
import { IMessages, Message } from "../interfaces";
import ChatMsg from "./ChatMsg";



export default function ChatArea({messages}:IMessages){
  return(
    <div className='chat-area'>
      <div className='chat-area-header'>
      <div className="chat-area-title">CodePen Group</div>
      </div>
    <div className="overflow-y-auto">
    {messages.map((message:Message, index:Key):ReactNode => (
      <ChatMsg key={index} messages={messages}/>
    ))}
  </div>
  </div>
  )
}