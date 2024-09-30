import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLogOut, useAuthContext } from "../hooks";
import { Dumbbell } from "../icons";

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
      <div className="container">
        <Link to="/">
          <h2 className="fitTrack">
            <Dumbbell />
            FitTrack
          </h2>
        </Link>
        <nav>
          {user && (
            <div className="logged-in">
              <span>{user.email}</span>
              <button onClick={handleClick}>Log Out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Log In</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          )}
        </nav>
      </div>
    </motion.header>
  );
};

export { Navbar };
