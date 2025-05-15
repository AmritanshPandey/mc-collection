import React from 'react';

const Spacer = ({ height = 0, width = 0 }) => {
  return (
    <div style={{ height: `${height}px`, width: `${width}px` }} />
  );
};

export default Spacer;
