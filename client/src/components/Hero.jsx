import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.7, duration: 1.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const Hero = () => {
  return (
    <motion.div
      className="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>Fitness Made Simple.</h1>
      <p>Create your account, add your workouts, and crush it every day!</p>
      <Link to="/login">
        <button>Start Now</button>
      </Link>
    </motion.div>
  );
};

export { Hero };
