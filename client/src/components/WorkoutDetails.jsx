import { format } from "date-fns";
import { useWorkoutsContext, useAuthContext } from "../hooks";
import { Dialog } from "./Dialog";
import { URL } from "../config";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    try {
      const response = await fetch(`${URL}/workouts/${workout._id}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
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
