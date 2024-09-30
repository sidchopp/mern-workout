import { useEffect } from "react";
import { motion } from "framer-motion";
import { WorkoutDetails, WorkoutForm } from "../components";
import { useWorkoutsContext, useAuthContext } from "../hooks";
import { URL } from "../config";

const Workouts = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch(`${URL}/workouts`, {
          credentials: "include", // Include credentials with the request
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: "SET_WORKOUTS", payload: json });
        } else {
          // Handle error response
          console.error("Failed to fetch workouts:", json);
        }
      } catch (error) {
        // Handle fetch error
        console.error("Error fetching workouts:", error);
      }
    };

    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="workouts">
        {workouts ? (
          workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout?._id} />
          ))
        ) : (
          <p>Loading Workouts...</p>
        )}
      </div>
      <WorkoutForm />
    </motion.div>
  );
};

export default Workouts;
