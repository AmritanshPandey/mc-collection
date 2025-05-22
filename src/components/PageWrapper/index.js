import React, { useEffect, useRef } from 'react';


const PageWrapper = ({ children }) => {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.classList.add('page-animated');
    }
  }, []);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
};

export default PageWrapper;