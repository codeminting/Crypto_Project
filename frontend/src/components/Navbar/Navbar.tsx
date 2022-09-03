import { useState } from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
// Routes
import { NavLink as Link } from "react-router-dom";
// Redux
import { useSelector } from "react-redux";
import { RootState } from "../../configs/store";
import Login from "./Login";

const Navbar = () => {
  // Hooks
  const { isLoggedIn } = useSelector((store: RootState) => store.user);
  const drawerManager = useDisclosure();

  return (
    <nav className="flex w-full h-20 px-20 justify-between items-center">
      <div>
        <Link to="/" className="font-bold text-2xl text-center">
          Code Minting
        </Link>
      </div>
      <div className="flex justify-evenly">
        <Link to="/" className="mx-2">
          Home
        </Link>
        {isLoggedIn && (
          <Link to="/trade" className="mx-2">
            Trade
          </Link>
        )}
      </div>
      <div>
        {!isLoggedIn && (
          <div className="flex ">
            <div className="mx-2">
              <Button>Sign Up</Button>
            </div>
            <div className="mx-2">
              <Button onClick={drawerManager.onOpen}>Log In</Button>
              <Login
                isOpen={drawerManager.isOpen}
                onOpen={drawerManager.onOpen}
                onClose={drawerManager.onClose}
              />
            </div>
          </div>
        )}
        {isLoggedIn && (
          <Link to="/log-in" className="mx-2">
            <Button>Log Out</Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
