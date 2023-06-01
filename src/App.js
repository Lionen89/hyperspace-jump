import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './App.css';
import BitBuster from './pages/BitBuster/BitBuster';
import Technologies from './pages/Technologies/Technologies';

function App() {
  let currentStar = 0;
  const starsCout = 239;
  let stars = [];
  let timeOut = 4300;

  while (currentStar <= starsCout) {
    stars.push(currentStar++);
  }

  const [isAnimationStart, setIsAnimationStart] = React.useState(false);
  const [isFirstLoad, setIsFirstLoad] = React.useState(true);
  const [path, setPath] = React.useState('');
  const navigate = useNavigate();

  function redirect() {
    navigate(path);
  }

  function animation() {
    setIsAnimationStart(true);
    setIsFirstLoad(false);
    setTimeout(() => {
      setIsAnimationStart(false);
      return redirect();
    }, timeOut);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <BitBuster
            stars={stars}
            isAnimationStart={isAnimationStart}
            animation={animation}
            setPath={setPath}
            isFirstLoad={isFirstLoad}
          />
        }
      />
      <Route
        path="/technologies"
        element={
          <Technologies
            stars={stars}
            isAnimationStart={isAnimationStart}
            animation={animation}
            setPath={setPath}
            isFirstLoad={isFirstLoad}
          />
        }
      />
    </Routes>
  );
}

export default App;
