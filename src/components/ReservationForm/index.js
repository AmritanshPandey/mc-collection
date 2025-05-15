import React, { useState } from 'react';
import './style.css';
import Dropdown from '../Dropdown';
import DateSelectorModal from '../DateSelector';
import CalendarIcon from '../../assets/icons/calendar.svg';

const ReservationForm = ({
    guests, setGuests,
    date, setDate,
    selectedTime, setSelectedTime,
    specialRequest, setSpecialRequest
}) => {
    const [calendarOpen, setCalendarOpen] = useState(false);

    const times = ["5:00 pm", "5:30 pm", "6:30 pm", "6:45 pm", "7:15 pm", "8:30 pm", "8:45 pm", "9:00 pm", "9:15 pm"];

    const unavailableDates = [
        "2025-05-12",
        "2024-10-15",
        "2024-10-18",
        "2024-10-22"
    ];

    return (
        <div className='reservation-card'>
            <div className="form-section">
                <div className="form-row">
                    {/* Guests */}
                    <div className="dropdown-container">
                        <span className='subheading-medium'>Guests</span>
                        <Dropdown
                            options={[2, 4, 6, 7, 8, 9, 10]}
                            value={guests}
                            onChange={setGuests}
                        />
                    </div>

                    {/* Date */}
                    <div className="dropdown-container">
                        <span className='subheading-medium'>Date</span>
                        <div className="date-pill" onClick={() => setCalendarOpen(true)}>
                            <span>
                                {date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </span>
                            <img src={CalendarIcon} alt="calendar" className="calendar-icon" />
                        </div>
                    </div>
                </div>

                {/* Time slots */}
                <div className="available-times">
                    <span className="subheading-medium">Available times for selected date</span>
                    <div className="time-grid">
                        {times.map((time, index) => (
                            <button
                                key={index}
                                className={`time-btn ${selectedTime === time ? 'selected' : ''}`}
                                onClick={() => setSelectedTime(time)}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Special request */}
                <div className="special-request">
                    <span className="subheading-medium">Add special requests (optional)</span>
                    <textarea
                        placeholder="Special occasion or dietary needs? Just let us know."
                        value={specialRequest}
                        onChange={e => setSpecialRequest(e.target.value)}
                    ></textarea>
                </div>
            </div>

            {/* Calendar modal */}
            {calendarOpen && (
                <DateSelectorModal
                    selectedDate={date}
                    onDateSelect={(selected) => {
                        setDate(selected);
                        setCalendarOpen(false);
                    }}
                    onClose={() => setCalendarOpen(false)}
                    unavailableDates={unavailableDates}
                />
            )}
        </div>
    );
};

export default ReservationForm;
