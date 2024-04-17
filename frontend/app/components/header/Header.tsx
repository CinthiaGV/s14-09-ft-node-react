'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Login from '../auth/loginw/Login';
import Register from '../auth/register/Register';
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
      <header className="fixed w-full z-20 top-0 start-0 backdrop-filter backdrop-blur-sm bg-opacitclassNamey-10 glassmorphism">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Logo />
          <div className="flex gap-4 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button className='btn yellowBtn' onClick={handleButtonLogout}>
              Logout
            </button>
          </div>
          <Navbar />
        </div>
      </header>
    );
  }
  return (
    <header className="fixed w-full z-20 top-0 start-0 backdrop-filter backdrop-blur-sm bg-opacitclassNamey-10 glassmorphism">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <div className="flex gap-4 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button className='btn grayBtn' onClick={handleButtonLogin}>
            Inciar sesion
          </button>
          <Login/>
          <Register/>
        </div>
        <Navbar />
      </div>
    </header>
  );
}