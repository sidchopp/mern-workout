import { Link } from "react-router-dom";
import { useLogOut, useAuthContext } from "../hooks";
import { Dumbbell } from "../icons";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logOut } = useLogOut();

  const handleClick = () => logOut();

  return (
    <header>
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
    </header>
  );
};

export { Navbar };
