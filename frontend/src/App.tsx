import { Routes, Route, Navigate } from "react-router-dom";
// Redux
import { useSelector } from "react-redux";
import { RootState } from "./configs/store";
// Components
import Navbar from "./components/Navbar/Navbar";

function App() {
  // Hooks
  const { isLoggedIn } = useSelector((store: RootState) => store.user);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route
          path="/trade"
          element={isLoggedIn ? <h1>Trade</h1> : <Navigate to="/" replace />}
        />
      </Routes>
    </>
  );
}

export default App;
