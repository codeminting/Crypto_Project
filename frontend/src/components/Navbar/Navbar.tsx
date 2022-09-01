import { Button } from "@chakra-ui/react";
// Routes
import { NavLink as Link } from "react-router-dom";
// Redux
import { useSelector } from "react-redux";
import { RootState } from "../../configs/store";

const Navbar = () => {
  // Hooks
  const { isLoggedIn } = useSelector((store: RootState) => store.user);

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
          <>
            <Link to="/sign-up" className="mx-2">
              <Button>Sign Up</Button>
            </Link>
            <Link to="/log-in" className="mx-2">
              <Button>Log In</Button>
            </Link>
          </>
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
