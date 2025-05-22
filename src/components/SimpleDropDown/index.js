import React, { useState, useRef, useEffect } from 'react';
import './style.css';
import ChevronDown from '../../assets/icons/chevron-down.svg';

const SimpleDropdown = ({ options = [], onChange }) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null); // 🔹 Track selected option
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (option) => {
        setSelected(option);
        onChange(option);
        setOpen(false);
    };

    return (
        <div className="dropdown-wrapper" ref={dropdownRef}>
            <div
                className="dropdown-toggle"
                onClick={() => setOpen(!open)}
                role="button"
                tabIndex={0}
            >
                <span>{selected || "Select a reason"}</span>
                <img
                    src={ChevronDown}
                    alt="dropdown"
                    className={`chevron-icon ${open ? 'rotate' : ''}`}
                />
            </div>

            {open && (
                <div className="dropdown-menu">
                    {options.map((option, i) => (
                        <div
                            key={i}
                            className="dropdown-item"
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

export default SimpleDropdown;
