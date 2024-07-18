import React from 'react';

const CubeComponent: React.FC = () => {
  return (
    <div className="cube-container">
      {[...Array(3)].map((_, cubeIndex) => (
        <div key={cubeIndex} className="cube">
          {[...Array(3)].map((_, xIndex) => (
            <div key={xIndex} style={{ '--x': xIndex - 1, '--y': 0 } as React.CSSProperties}>
              {[...Array(3)].map((_, iIndex) => (
                <span key={iIndex} style={{ '--i': 3 - iIndex } as React.CSSProperties}></span>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CubeComponent;