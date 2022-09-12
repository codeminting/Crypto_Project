import React, {useState} from "react";

// Firebase
import {auth} from "../../configs/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

// Redux
import {useDispatch} from "react-redux";
import {setLoggedIn, setUser} from "../../features/UserSlice";

// Chakra UI
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser(user.user));
      dispatch(setLoggedIn(true));
      onClose();
    }
    catch(error) {console.log(error);}
  }
  
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
              <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              {/* <FormHelperText>Please Enter Your Email</FormHelperText> */}
              <FormErrorMessage>
                <FormErrorIcon />
                This field is required
              </FormErrorMessage>
            </FormControl>

            <FormControl className="mb-5" isRequired>
              <FormLabel>
                <MdPassword className="inline mr-1" />
                Password
              </FormLabel>
              <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme={"blue"}
              mr={5}
              size="lg"
              rightIcon={<IoMdLogIn size={20} />}
              onClick={handleLogin}
            >
              Log In
            </Button>

            <Button
              colorScheme={"red"}
              size="lg"
              rightIcon={<TiDeleteOutline size={20} />}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
