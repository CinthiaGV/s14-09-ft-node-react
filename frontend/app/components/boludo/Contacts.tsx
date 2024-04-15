import { Key, ReactNode } from "react";
import MessageTxt from "./MessageTxt";
import { IMessages, Message } from "./interfaces";



export default function Contacts({messages}:IMessages){
  return(
    <div className="overflow-y-auto">
    {messages.map((message:Message, index:Key):ReactNode => (
      <MessageTxt key={index} message={message}/>
    ))}
  </div>
  )
}