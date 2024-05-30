import { useEffect, useState } from "react";
import { WorkoutDetails, WorkoutForm } from "../components";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  const URL =
    "http://localhost:4000" || "https://mern-workout-api-eight.vercel.app";

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch(`${URL}/workouts`, {
          credentials: "include", // Include credentials with the request
        });
        const json = await response.json();

        if (response.ok) {
          setWorkouts(json);
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
  }, []);

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
