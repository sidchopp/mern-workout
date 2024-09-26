import { useEffect } from "react";
import { WorkoutDetails, WorkoutForm } from "../components";
import { useWorkoutsContext, useAuthContext } from "../hooks";
import { URL } from "../config";

const Home = () => {
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
    <div className="home">
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
    </div>
  );
};

export default Home;
