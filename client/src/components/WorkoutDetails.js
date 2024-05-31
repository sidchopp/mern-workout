import { format } from "date-fns";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { Dialog } from "./Dialog";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const URL =
      "https://mern-workout-api-eight.vercel.app" || "http://localhost:4000";

    const response = await fetch(`${URL}/workouts/${workout._id}`, {
      method: "DELETE",
      credentials: "include",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Number of reps: </strong>
        {workout.reps}
      </p>
      <p>
        <strong>Created on: </strong>
        {format(new Date(workout.createdAt), "PP")}
        <Dialog handleClick={handleClick} />
      </p>
    </div>
  );
};

export { WorkoutDetails };
