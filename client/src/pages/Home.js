import { useEffect, useState } from "react";
import { WorkoutDetails } from "../components";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="workouts">
      {workouts &&
        workouts.map((workout) => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
    </div>
  );
};

export default Home;
