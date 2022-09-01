import { Routes, Route, Navigate } from "react-router-dom";
// Redux
import { useSelector } from "react-redux";
import { RootState } from "./configs/store";
// Pages
import Home from "./pages/Home";
// Components
import Navbar from "./components/Navbar/Navbar";

function App() {
  // Hooks
  const { isLoggedIn } = useSelector((store: RootState) => store.user);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/trade"
          element={isLoggedIn ? <h1>Trade</h1> : <Navigate to="/" replace />}
        />
      </Routes>
    </>
  );
}

export default App;
