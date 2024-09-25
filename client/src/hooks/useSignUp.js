import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const URL =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_SERVER_API
      : "http://localhost:4000";

  const signUp = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${URL}/user/signUp`, {
      //   credentials: "include", // Include credentials with the request
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save user info to local storage
      localStorage.setItem("user", JSON.stringify(json));

      //   Update auth context
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };

  return {
    signUp,
    isLoading,
    error,
  };
};
