import React from 'react';

import './BitBuster.scss';

function BitBuster({ stars, isAnimationStart, animation, setPath, isFirstLoad }) {
  React.useEffect(() => {
    window.addEventListener(
      'wheel',
      () => {
        setPath('/technologies');
        return animation();
      },
      { once: true },
    );
    return () =>
      window.removeEventListener('wheel', () => {
        setPath('/technologies');
        return animation();
      });
  });

  return (
    <main
      className={`bit-buster ${
        isAnimationStart ? 'bit-buster__animation' : !isFirstLoad ? 'technologies__animation' : ''
      }`}>
      <h1 className="bit-buster__title">Bit&nbsp;Buster</h1>
      {stars.map((item) => (
        <div
          className={`bit-buster__star ${isAnimationStart ? 'bit-buster__star-animation' : ''}`}
          key={item}></div>
      ))}
    </main>
  );
}

export default BitBuster;
