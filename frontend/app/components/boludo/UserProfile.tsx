import { Image } from "@nextui-org/react";
import { IUserProfile } from "./interfaces";


export default function UserProfile({user}:IUserProfile){
  return(
    <div className="p-4 flex items-center">
          <Image
            className="w-10 h-10 rounded-full mr-2"
            src={user.profile_picture || "https://via.placeholder.com/40"}
            alt={user.name}
          />
          <div>
            <div className="font-bold">{user.name}</div>
            <div className="text-sm">Status...</div>
          </div>
        </div>
  )
}