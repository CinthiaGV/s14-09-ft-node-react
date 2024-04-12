'use client'
import Btn from '../Button/Btn';
import Register from '../auth/register/Register';
import Logo from './Logo';
import Navbar from './Navbar';

import { signIn } from 'next-auth/react';

export default function Header() {
  return (
    <header className="fixed w-full z-20 top-0 start-0 backdrop-filter backdrop-blur-sm bg-opacitclassNamey-10 glassmorphism">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <div className="flex gap-4 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Btn className='grayBtn' actionTarget="execCb" target={()=>signIn()}>
            Inciar sesion
          </Btn>
          <Btn className='yellowBtn' actionTarget="openModal" target={<Register/>}>
            Regístrate
          </Btn>
        </div>
        <Navbar />
      </div>
    </header>
  );
}
