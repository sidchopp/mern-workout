import { format } from "date-fns";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { Dialog } from "./Dialog";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const URL =
      process.env.NODE_ENV === "production"
        ? process.env.REACT_APP_SERVER_API
        : "http://localhost:4000";

    try {
      const response = await fetch(`${URL}/workouts/${workout._id}`, {
        method: "DELETE",
        credentials: "include",
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "DELETE_WORKOUT", payload: json });
      } else {
        console.error("Failed to delete the workout");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout?.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout?.load}
      </p>
      <p>
        <strong>Number of reps: </strong>
        {workout?.reps}
      </p>
      <p>
        <strong>Created on: </strong>
        {format(new Date(workout?.createdAt), "PP")}
        <Dialog handleClick={handleClick} title={workout.title} />
      </p>
    </div>
  );
};

export { WorkoutDetails };
