import { Button } from "@chakra-ui/react";
import { NavLink as Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex w-full h-20 px-20 justify-between items-center">
      <div>
        <Link to="/" className="font-bold text-2xl text-center">
          Code Minting
        </Link>
      </div>
      <div className="flex justify-evenly">
        <Link to="/menu-link1" className="mx-2">
          Menu Link
        </Link>
        <Link to="/menu-link2" className="mx-2">
          Menu Link
        </Link>
        <Link to="/menu-link3" className="mx-2">
          Menu Link
        </Link>
      </div>
      <div>
        <Link to="/sign-up" className="mx-2">
          <Button>Sign Up</Button>
        </Link>
        <Link to="/log-in" className="mx-2">
          <Button>Log In</Button>
        </Link>
        {false && (
          <Link to="/log-in" className="mx-2">
            <Button>Log Out</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
