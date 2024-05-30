import { useEffect } from "react";
import { WorkoutDetails, WorkoutForm } from "../components";
import { useWorkoutsContext } from "../hooks";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  const URL =
    "https://mern-workout-api-eight.vercel.app" || "http://localhost:4000";

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch(`${URL}/workouts`, {
          credentials: "include", // Include credentials with the request
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

    fetchWorkouts();
  }, [URL, dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
