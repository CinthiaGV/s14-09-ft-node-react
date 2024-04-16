'use client'

import Contacts from "./Contacts";
import UserProfile from "./UserProfile";
import { Props } from "./interfaces";


export default function UserMessages({ user, messages }:Props) {
  return (
    <div>
      <UserProfile user={user}/>
      <Contacts messages={messages}/>
    </div>
  );
};
