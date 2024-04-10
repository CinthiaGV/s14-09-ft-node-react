"use client";
import { BtnProps } from "../../models/button";
import ModalBtn from "../modal/ModalBtn";

export default function Btn({ target, actionTarget, children, className, onClick }: BtnProps) {
  return (
    <div className='yellowBtn polygon glitch'>
      {actionTarget === "openModal" && (
        <ModalBtn target={target}>{children}</ModalBtn>
      )}
    </div>
  );
}

/*onClick={handleLoginButtonClick}
[9:03]
import { signIn, signOut, useSession } from 'next-auth/react';
 const { data: session, status } = useSession();

  const handleLoginButtonClick = () => {
    signIn();
  };*/