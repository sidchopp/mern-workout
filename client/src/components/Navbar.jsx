import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLogOut, useAuthContext } from "../hooks";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logOut } = useLogOut();

  const handleClick = () => logOut();

  return (
    <motion.header
      initial={{ y: -250 }}
      animate={{ y: -10 }}
      transition={{ delay: 0.1, type: "spring", stiffness: 40 }}
    >
      <nav>
        <div className="name">
          <Link to="/">FitTrack</Link>
        </div>
        <div className="links">
          {user && (
            <div className="logged-in">
              <span>{user.email}</span>
              <button onClick={handleClick}>Log Out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">LogIn</Link>
              <Link to="/signup">SignUp</Link>
            </div>
          )}
        </div>
      </nav>
    </motion.header>
  );
};

export { Navbar };
