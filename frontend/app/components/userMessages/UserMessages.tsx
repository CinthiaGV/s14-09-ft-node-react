'use client'
import React from 'react';
import Contacts from "./Contacts";
import UserProfile from "./UserProfile";
import { Props } from "./interfaces";


export default function UserMessages({ user, messages }:Props) {
  return (
    <div className='w-1/3 overflow-y-auto grid grid-row-3'>
      <div className='row-span-1 border-b-1 border-white'>
      <UserProfile user={user}/>
      </div>
      <div className='row-start-2'>
      <Contacts messages={messages}/>
      </div>
    </div>
  );
};
