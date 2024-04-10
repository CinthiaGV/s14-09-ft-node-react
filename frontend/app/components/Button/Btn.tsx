"use client";
import { Button } from "@nextui-org/react";
import { BtnProps } from "../../models/button";
import ModalBtn from "../modal/ModalBtn";

export default function Btn({ target, actionTarget, children, className,...props }: BtnProps) {
  return (
    <div className='yellowBtn polygon glitch' {...props}>
      {actionTarget === "openModal" && (
        <ModalBtn target={target}>{children}</ModalBtn>
      )}
      {actionTarget === "execCb" && <Button onPress={target}>{children}</Button>}
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