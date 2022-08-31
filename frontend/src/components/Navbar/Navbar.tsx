import { Box, Button } from '@chakra-ui/react';
import { NavLink as Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box className="flex w-full h-20 px-20 justify-between items-center">
      <Box>
        <Link to="/" className="font-bold text-2xl text-center">
          Code Minting
        </Link>
      </Box>
      <Box className="flex justify-evenly">
        <Link to="/menu-link1" className="mx-2">
          Menu Link
        </Link>
        <Link to="/menu-link2" className="mx-2">
          Menu Link
        </Link>
        <Link to="/menu-link3" className="mx-2">
          Menu Link
        </Link>
      </Box>
      <Box>
        <Link to="/sign-up" className="mx-2">
          <Button>Sign Up</Button>
        </Link>
        <Link to="/log-in" className="mx-2">
          <Button>Log In</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
