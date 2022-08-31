import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/menu-link1" element={<h1>Home</h1>} />
        <Route path="/menu-link2" element={<h1>about</h1>} />
        <Route path="/menu-link3" element={<h1>contact</h1>} />
      </Routes>
    </>
  );
}

export default App;
