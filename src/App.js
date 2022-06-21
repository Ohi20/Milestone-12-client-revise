import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../src/Pages/Shared/Navbar';
import Home from '../src/Pages/Home/Home';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="about" />
      </Routes>
    </div>
  );
}

export default App;
