import React, { useState } from 'react';
import '../styles/CursorAnimation.css';

const CursorAnimation = () => {
  const [cursorPosition, setCursorPosition] = useState(null);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="cursor-animation" onMouseMove={handleMouseMove}>
      {cursorPosition && (
        <div
          className="cursor-hole"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        ></div>
      )}
    </div>
  );
};

export default CursorAnimation;