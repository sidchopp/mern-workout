import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="heroText">
      <h1>Fitness Made Simple.</h1>
      <p>Create your account, add your workouts, and crush it every day!</p>
      <Link to="/login">
        <button>Start Now</button>
      </Link>
    </div>
  );
};

export { Hero };
