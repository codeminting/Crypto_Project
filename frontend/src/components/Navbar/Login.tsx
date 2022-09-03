import React from "react";
import {
  Input,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  FormErrorIcon,
} from "@chakra-ui/react";

// Icons
import { IoMdLogIn } from "react-icons/io";
import { TiDeleteOutline } from "react-icons/ti";
import { MdPassword } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

// Interface
interface LoginPropsTypes {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const Login = ({ isOpen, onClose }: LoginPropsTypes) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"sm"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Log In</DrawerHeader>

        <DrawerBody>
          {/* <Input placeholder="Type here..." />
           */}
          <FormControl className="mb-5" isRequired isInvalid>
            <FormLabel>
              <HiOutlineMail className="inline mr-1" />
              Email Address
            </FormLabel>
            <Input type="email" />
            {/* <FormHelperText>Please Enter Your Email</FormHelperText> */}
            {/* <FormErrorMessage>
              <FormErrorIcon />
              This field is required
            </FormErrorMessage> */}
          </FormControl>

          <FormControl className="mb-5" isRequired>
            <FormLabel>
              {" "}
              <MdPassword className="inline mr-1" /> Password
            </FormLabel>
            <Input type="password" />
          </FormControl>

          <div className="flex justify-end">
            
          </div>
        </DrawerBody>

        <DrawerFooter>
          <Button mr={5} size="lg" rightIcon={<TiDeleteOutline size={20} />}>
              Reset
            </Button>

            <Button size="lg" rightIcon={<IoMdLogIn size={20} />}>
              Log In
            </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Login;
