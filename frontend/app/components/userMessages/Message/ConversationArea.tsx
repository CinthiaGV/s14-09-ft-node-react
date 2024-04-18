import { Key, ReactNode } from "react";
import { IMessages, Message } from "../interfaces";
import MessageTxt from "./Msg";



export default function ConversationArea({messages}:IMessages){
  return(
    <div className="overflow-y-auto">
    {messages.map((message:Message, index:Key):ReactNode => (
      <MessageTxt key={index} message={message}/>
    ))}
  </div>
  )
}