'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Btn from '../Button/Btn';
import Logo from './Logo';
import Navbar from './Navbar';

function handleButtonLogin() {
  signIn();
}

const handleButtonLogout = async () => {
  await signOut({ callbackUrl: '/' });
};

export default function Header() {
  const { data: session, status } = useSession();
  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <header className="fixed w-full z-20 top-0 start-0 backdrop-filter backdrop-blur-sm bg-opacitclassNamey-10 backdrop-filter backdrop-blur-sm bg-opacity-40">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Logo />
          <div className="flex gap-4 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Btn actionTarget="openModal" onClick={handleButtonLogout}>
              Logout
            </Btn>
          </div>
          <Navbar />
        </div>
      </header>
    );
  }
  return (
    <header className="fixed w-full z-20 top-0 start-0 backdrop-filter backdrop-blur-sm bg-opacitclassNamey-10 backdrop-filter backdrop-blur-sm bg-opacity-40">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <div className="flex gap-4 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Btn actionTarget="openModal" onClick={handleButtonLogin}>
            Inciar sesion
          </Btn>
        </div>
        <Navbar />
      </div>
    </header>
  );
}
