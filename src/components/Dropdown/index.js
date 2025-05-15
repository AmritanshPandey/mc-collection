import React, { useState, useRef, useEffect } from 'react';
import './style.css';
import ChevronDown from '../../assets/icons/chevron-down.svg';

const Dropdown = ({ options = [], value, onChange }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setOpen(!open);
    }
  };

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <div
        className="custom-dropdown-toggle"
        onClick={() => setOpen(!open)}
        onKeyDown={handleKeyDown}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        tabIndex={0}
      >
        <span>{value}</span>
        <img
          src={ChevronDown}
          className={`chevron ${open ? 'rotate' : ''}`}
          alt="toggle dropdown"
        />
      </div>

      {open && (
        <div className="custom-dropdown-menu" role="listbox">
          {options.map((option, index) => (
            <div
              key={index}
              className="custom-dropdown-item"
              role="option"
              aria-selected={value === option}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
