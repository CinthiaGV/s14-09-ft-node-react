'use client';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import RegisterForm from './RegisterForm';
import AuthTitle from './RegisterTitle';
import ThirdPartyRegister from './ThirdPartyRegister';

export default function Register() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        size="sm"
        className="btn yellowBtn glitch overflow-hidden"
        onPress={onOpen}
      >
        Regístrate
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        backdrop="blur"
        isKeyboardDismissDisabled={true}
        isDismissable={false}
        size="sm"
        className="glassmorphism overflow-hidden"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <AuthTitle>Regístrate</AuthTitle>
              </ModalHeader>
              <ModalBody>
                <RegisterForm />
              </ModalBody>
              <ModalFooter className="flex justify-center">
                <ThirdPartyRegister/>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
