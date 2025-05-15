import React from 'react';
import { useLocation } from 'react-router-dom';

const ReviewPage = () => {
  const location = useLocation();
  const reservation = location.state;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Step 2: Review Your Booking</h2>

      {reservation ? (
        <div>
          <p><strong>Guests:</strong> {reservation.guests}</p>
          <p><strong>Date:</strong> {reservation.date}</p>
          <p><strong>Time:</strong> {reservation.time || "Not selected"}</p>
          <p><strong>Special Request:</strong> {reservation.specialRequest || "None"}</p>
        </div>
      ) : (
        <p>No reservation data found. Please go back.</p>
      )}
    </div>
  );
};

export default ReviewPage;
