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

export default function Register() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
      <>
        <Button className='yellowBtn glitch' onPress={onOpen}>Regístrate</Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          isDismissable={false}
          isKeyboardDismissDisabled={true}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  <div className="flex flex-col justify-center items-center text-white">
                    <h2 className="text-2xl font-bold">Registrarme</h2>
                    <hr className="w-full border-b-1" />
                  </div>
                </ModalHeader>
                <ModalBody>
                  <RegisterForm />
                </ModalBody>
                <ModalFooter>
                  <div className="separator">
                    <div></div>
                    <span>O regístrate con</span>
                    <div></div>
                  </div>
                  <div className="inline">
                    <button>
                      <GoogleIcon />
                    </button>
                    <button>
                      <FacebookRoundedIcon />
                    </button>
                  </div>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
  );
}
