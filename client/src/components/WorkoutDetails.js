import { format } from "date-fns";

const WorkoutDetails = ({ workout }) => {
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
        {/* {workout.createdAt} */}
      </p>
    </div>
  );
};

export { WorkoutDetails };
