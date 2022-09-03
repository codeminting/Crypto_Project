import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  FormErrorIcon,
} from "@chakra-ui/react";

// Icons
import { IoMdLogIn } from "react-icons/io";
import { TiDeleteOutline } from "react-icons/ti";
import { MdPassword } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

interface LoginPropsTypes {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const Login = ({ isOpen, onClose }: LoginPropsTypes) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Input placeholder="Type here..." />
             */}
            <FormControl className="mb-5" isRequired isInvalid>
              <FormLabel>
                <HiOutlineMail className="inline mr-1" />
                Email Address
              </FormLabel>
              <Input type="email" />
              {/* <FormHelperText>Please Enter Your Email</FormHelperText> */}
              <FormErrorMessage>
                <FormErrorIcon />
                This field is required
              </FormErrorMessage>
            </FormControl>

            <FormControl className="mb-5" isRequired>
              <FormLabel>
                <MdPassword className="inline mr-1" /> Password
              </FormLabel>
              <Input type="password" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme={"red"} mr={5} size="lg" rightIcon={<TiDeleteOutline size={20} />}>
              Reset
            </Button>

            <Button colorScheme={"blue"} size="lg" rightIcon={<IoMdLogIn size={20} />}>
              Log In
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
