'use client';

import React, { useEffect, useState } from 'react';
import Btn from './components/Button/Btn';
import Login from './components/auth/loginw/Login';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import '../public/fonts/chakra-petch.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const [moved, setMoved] = useState(false);
  console.log({ session, status });

  const handleLoginButtonClick = () => {
    signIn();
    setIsOpen(true);
  };

  useEffect(() => {
    setMoved(true);
  }, []);

  return (
    <>
    <main className='h-screen'>
      <div
        className={`absolute top-10 left-0`}
        style={{
          transition: 'transform 2s ease',
          transform: moved ? 'translateX(0)' : 'translateX(-100%)',
        }}
      >
        <Image
          src="/Image2.png"
          width={355}
          height={376}
          alt="Imagen Inferior"
          className=""
        />
      </div>
      <div
        className={`absolute top-0 right-0`}
        style={{
          transition: 'transform 2s ease',
          transform: moved ? 'translateX(0%)' : 'translateX(100%)',
        }}
      >
        <Image
          src="/Image3.png"
          width={250}
          height={379}
          alt="Imagen Inferior"
          className=""
        />
      </div>
      <div className="text-center relative top-40 mt-10 ">
        <div>
          <h1 className="text-7xl font-bold text-white">NOA</h1>
          <h1 className="text-7xl font-bold text-white">CONEXION MATCHING</h1>
          <h2 className="text-lg font-medium text-gray-500 mt-4">
            Un espacio donde encontrar el Match Perfecto para jugar a tus
            partidas.
          </h2>
        </div>
        <div className="mt-1 mb-10">
          <Btn actionTarget="openModal" target={<Login />}>
            Boton
          </Btn>
        </div>
      </div>
      <div className="left-0 right-0 text-center mt-48"
      style={{
        transition: 'transform 2s ease',
        transform: moved ? 'translateY(0%)' : 'translateY(130%)',
      }}>
        <Image
          src="/Image1.png"
          width={194}
          height={183}
          alt="Imagen Inferior"
          className="inline-block"
        />
      </div>
    </main>
    </>
  );
};

export default Header;
