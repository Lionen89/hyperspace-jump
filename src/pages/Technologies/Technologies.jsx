import React from 'react';

import './Technologies.scss';

function Technologies({ stars, isAnimationStart, animation, setPath, isFirstLoad }) {
  React.useEffect(() => {
    window.addEventListener(
      'wheel',
      () => {
        setPath('/');
        return animation();
      },
      { once: true },
    );
    return () =>
      window.removeEventListener('wheel', () => {
        setPath('/');
        return animation();
      });
  });

  return (
    <main
      className={`technologies ${
        isAnimationStart ? 'bit-buster__animation' : !isFirstLoad ? 'technologies__animation' : ''
      }`}>
      <h1 className="bit-buster__title">Современные технологии</h1>
      {stars.map((item) => (
        <div
          className={`bit-buster__star ${isAnimationStart ? 'bit-buster__star-animation' : ''}`}
          key={item}></div>
      ))}
    </main>
  );
}

export default Technologies;
