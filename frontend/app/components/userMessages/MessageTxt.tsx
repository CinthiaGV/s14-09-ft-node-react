import { Image } from "@nextui-org/react"
import { IMessage } from "./interfaces"



export default function MessageTxt({message}:IMessage){
  return(
    <div className="p-4 hover:bg-gray-700 cursor-pointer">
        <Image
          className="w-10 h-10 rounded-full mr-2"
          src={message.sender.profile_picture || `https://picsum.photos/30/30?r=${Math.random()}`}
          alt={message.sender.name}
        />
        <div>
          <div className="font-bold">{message.sender.name}</div>
          <div className="text-sm">{message.content[message.content.length - 1].text}
          </div>
        </div>
      </div>
  )
}