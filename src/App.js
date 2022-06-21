import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" />
        <Route path="about" />
      </Routes>
    </div>
  );
}

export default App;
