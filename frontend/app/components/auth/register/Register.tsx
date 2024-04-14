'use client';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
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
import RegisterTitle from './RegisterTitle';
import ThirdPartyTitle from './ThirdPartyTitle';

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
                <RegisterTitle />
              </ModalHeader>
              <ModalBody>
                <RegisterForm />
              </ModalBody>
              <ModalFooter className="flex justify-center">
                <ThirdPartyTitle>O regístrate con</ThirdPartyTitle>
                <div className="flex mt-8 gap-5">
                  <button>
                    <GoogleIcon />
                  </button>
                  <button>
                    <FacebookRoundedIcon />
                  </button>
          </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
