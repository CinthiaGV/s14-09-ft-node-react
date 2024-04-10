'use client'
import Btn from '../Button/Btn';
import FormikRegister from '../auth/register/RegisterF';
import Logo from './Logo';
import Navbar from './Navbar';

import { signIn } from 'next-auth/react';

export default function Header() {
  return (
    <header className="fixed w-full z-20 top-0 start-0 backdrop-filter backdrop-blur-sm bg-opacitclassNamey-10 backdrop-filter backdrop-blur-sm bg-opacity-40">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <div className="flex gap-4 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Btn actionTarget="execCb" target={()=>signIn()}>
            Inciar sesion
          </Btn>
          <Btn actionTarget="openModal" target={<FormikRegister />}>
            Regístrate
          </Btn>
        </div>
        <Navbar />
      </div>
    </header>
  );
}
