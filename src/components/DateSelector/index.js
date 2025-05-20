import React from 'react';
import './style.css';
import CloseIcon from '../../assets/icons/black-close.svg'

const DateSelectorModal = ({ selectedDate, onDateSelect, onClose }) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    const monthNames = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const formatDate = (d) => {
        return new Date(d).toISOString().split('T')[0];
    };

    const days = getDaysInMonth(year, month);
    const firstDayIndex = new Date(year, month, 1).getDay();

    // ✅ NEW: Generate random unavailable dates
    const getRandomUnavailableDates = (count) => {
        const unavailable = new Set();
        while (unavailable.size < count) {
            const randomDay = Math.floor(Math.random() * days) + 1;
            const date = new Date(year, month, randomDay);
            unavailable.add(formatDate(date));
        }
        return Array.from(unavailable);
    };

    const unavailableDates = getRandomUnavailableDates(12);

    return (
        <div className="date-modal-overlay">
            <div className="date-modal">
                <div className="date-modal-header">
                    <span className='title-medium'>{monthNames[month]} {year}</span>
                    <button className="close-btn" onClick={onClose}>
                        <img src={CloseIcon} alt='close' />
                    </button>
                </div>

                <div className="calendar-grid">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, idx) => (
                        <div key={idx} className="calendar-header">{d}</div>
                    ))}

                    {Array.from({ length: firstDayIndex }).map((_, idx) => (
                        <div key={`empty-${idx}`} />
                    ))}

                    {Array.from({ length: days }).map((_, idx) => {
                        const date = new Date(year, month, idx + 1);
                        const dateStr = formatDate(date);
                        const isUnavailable = unavailableDates.includes(dateStr);
                        const isSelected = formatDate(selectedDate) === dateStr;

                        return (
                            <div
                                key={idx}
                                className={`calendar-day ${isUnavailable ? 'unavailable' : ''} ${isSelected ? 'selected' : ''}`}
                                onClick={() => !isUnavailable && onDateSelect(date)}
                            >
                                {idx + 1}
                            </div>
                        );
                    })}
                </div>

                {/* ✅ Legend */}
                <div className="calendar-legend">
                    <div className="legend-item">
                        <div className="legend-box available"></div>
                        <span>Dates with availability</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-box unavailable"></div>
                        <span>No availability</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DateSelectorModal;
