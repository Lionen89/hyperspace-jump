import { Route, Routes } from 'react-router-dom';
import './App.css';
import Destination from './pages/Destination/Destination';
import Hyperspace from './pages/Hyperspace/Hyperspace';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hyperspace />} />
      <Route path="/destination" element={<Destination />} />
    </Routes>
  );
}

export default App;
