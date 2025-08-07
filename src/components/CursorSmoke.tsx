import React from 'react';
import { useCursorSmoke } from '../hooks/useCursorSmoke';

const CursorSmoke: React.FC = () => {
  const canvasRef = useCursorSmoke();

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-screen"
    />
  );
};

export default CursorSmoke;