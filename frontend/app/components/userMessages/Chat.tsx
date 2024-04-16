import Image from "next/image";
import { Key, ReactNode } from "react";
import { IMessages, Message } from "./interfaces";


export default function Chat({messages}:IMessages){
  return(
    <div className="flex-1 flex flex-col">
        <div className="border-b border-gray-300 p-4">
          <div className="font-bold text-lg">Chat</div>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((message:Message, index:Key):ReactNode => (
            <div key={index} className="mb-4">
              <div className="flex items-center mb-2">
                <Image
                  className="w-8 h-8 rounded-full mr-2"
                  src={message.sender.profile_picture || "https://via.placeholder.com/40"}
                  alt={message.sender.name}
                />
                <div className="font-bold">{message.sender.name}</div>
              </div>
              {message.content.map((msg, idx) => (
                <div key={idx} className="bg-blue-500 text-white rounded p-2 max-w-xs break-words">
                  {msg.text}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
  )
}