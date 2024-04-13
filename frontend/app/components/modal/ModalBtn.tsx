'use client';

import { Button, useDisclosure } from '@nextui-org/react';
import { ModalBtnProps } from '../../models/button';
import ModalCtn from './ModalCtn';

export default function ModalBtn({ children, target, onClick }: ModalBtnProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onClick={onClick} onPress={onOpen}>
        {children}
      </Button>
      <ModalCtn isOpen={isOpen} onOpenChange={onOpenChange} content={target} />
    </>
  );
}
