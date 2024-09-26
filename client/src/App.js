import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks";
import { Home, LogIn, SignUp } from "./pages";
import { Navbar } from "./components";
import { Footer } from "./components";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            ></Route>
            <Route
              path="/login"
              element={!user ? <LogIn /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/signup"
              element={!user ? <SignUp /> : <Navigate to="/" />}
            ></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
