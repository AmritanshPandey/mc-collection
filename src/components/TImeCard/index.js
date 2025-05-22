
import './style.css';

const TimeGrid = ({ times, selectedTime, onSelectTime }) => {
  return (
    <div className="time-grid">
      <p>Available times for selected date</p>
      <div className="time-grid-buttons">
        {times.map((time, index) => (
          <button
            key={index}
            className={`time-button ${selectedTime === time ? 'selected' : ''}`}
            onClick={() => onSelectTime(time)}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeGrid;
