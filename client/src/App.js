import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks";
import { Home, Workouts, LogIn, SignUp } from "./pages";
import { AnimatedPage, Navbar, Footer } from "./components";

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
            element={
              user ? (
                <AnimatedPage>
                  <Workouts />
                </AnimatedPage>
              ) : (
                <AnimatedPage>
                  <Navigate to="/login" />
                </AnimatedPage>
              )
            }
          ></Route>
          <Route
            path="/login"
            element={
              !user ? (
                <AnimatedPage>
                  <LogIn />
                </AnimatedPage>
              ) : (
                <AnimatedPage>
                  <Navigate to="/workouts" />
                </AnimatedPage>
              )
            }
          ></Route>
          <Route
            path="/signup"
            element={
              !user ? (
                <AnimatedPage>
                  <SignUp />
                </AnimatedPage>
              ) : (
                <AnimatedPage>
                  <Navigate to="/workouts" />
                </AnimatedPage>
              )
            }
          ></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
