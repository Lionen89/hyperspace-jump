import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Hyperspace.scss';

function Hyperspace() {
  const [isAnimationStart, setIsAnimationStart] = React.useState(false);
  const navigate = useNavigate();

  let currentStar = 0;
  const starsCout = 239;
  let stars = [];
  let timeOut = 4300;

  while (currentStar <= starsCout) {
    stars.push(currentStar++);
  }

  function redirect() {
    navigate('/destination');
  }

  function animation() {
    setIsAnimationStart(true);
    setTimeout(redirect, timeOut);
  }

  React.useEffect(() => {
    window.addEventListener('wheel', animation, { once: true });
    return () => window.removeEventListener('wheel', animation);
  });

  return (
    <main className={`hyperspace ${isAnimationStart ? 'hyperspace__animation' : ''}`}>
      <h1 className="hyperspace__title">Bit&nbsp;Buster</h1>
      {stars.map((item) => (
        <div
          className={`hyperspace__star ${isAnimationStart ? 'hyperspace__star-animation' : ''}`}
          key={item}></div>
      ))}
    </main>
  );
}

export default Hyperspace;
