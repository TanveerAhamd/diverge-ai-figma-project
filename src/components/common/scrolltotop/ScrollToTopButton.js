import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'react-bootstrap-icons';
import './ScrollToTopButton.css'
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 450) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  return (
    <a href='#navbar'>
      <div className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}>
        <button>
          <ArrowUp size={20} />
        </button>
      </div>;
    </a>
  );
}
export default ScrollToTopButton;