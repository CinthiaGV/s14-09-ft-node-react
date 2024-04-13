'use client'
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

export default function Register() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
  return (
    <>
      <Button className='yellowBtn glitch' onPress={onOpen}>Regístrate</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
        backdrop="blur"
        isKeyboardDismissDisabled={true}
        isDismissable={false}
        className="glassmorphism p-0 m-0"
        size="sm"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <RegisterTitle/>
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
                <div className="flex flex-col items-center gap-2">
                  <button>
                    <GoogleIcon />
                  </button>
                  <button>
                    <FacebookRoundedIcon />
                  </button>
                  <div className="flex gap-2">
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Action
                    </Button>
                  </div>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
