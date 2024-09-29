import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks";
import { Home, Workouts, LogIn, SignUp } from "./pages";
import { Navbar, Footer } from "./components";

function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/workouts"
            element={user ? <Workouts /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/login"
            element={!user ? <LogIn /> : <Navigate to="/workouts" />}
          ></Route>
          <Route
            path="/signup"
            element={!user ? <SignUp /> : <Navigate to="/workouts" />}
          ></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
