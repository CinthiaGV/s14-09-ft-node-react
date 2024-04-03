"use client"

import { Button, useDisclosure } from "@nextui-org/react";
import { ModalBtnProps } from "../../models/button";
import ModalCtn from "./ModalCtn";

export default function ModalBtn(
  {
    children,
    target
  }:ModalBtnProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
    <Button onPress={onOpen}>{children}</Button>
    <ModalCtn isOpen={isOpen} onOpenChange={onOpenChange} content={target}/>
    </>
  );
}