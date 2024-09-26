export const URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_SERVER_API
    : "http://localhost:4000";
