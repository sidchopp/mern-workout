import { useAuthContext } from "./useAuthContext";

export const useLogOut = () => {
  const { dispatch } = useAuthContext();

  const logOut = () => {
    //remove logged in user from local storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
  };

  return { logOut };
};
