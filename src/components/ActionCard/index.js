import React, { useState, useEffect } from 'react';
import './style.css';
import InfoCard from '../../components/InfoCard';
import LocationIcon from '../../assets/icons/location.svg';
import PeopleIcon from '../../assets/icons/people.svg';
import ClockIcon from '../../assets/icons/clock.svg';
import ReservationForm from '../ReservationForm';

const ActionCard = ({ setFormData }) => {
    const [guests, setGuests] = useState(2);
    const [date, setDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');
    const [specialRequest, setSpecialRequest] = useState('');

    useEffect(() => {
        setFormData({
            guests,
            date: date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            time: selectedTime,
            specialRequest
        });
    }, [guests, date, selectedTime, specialRequest, setFormData]);

    const infoItems = [
        { icon: LocationIcon, text: "New York, New York" },
        { icon: PeopleIcon, text: "2 people" },
        { icon: ClockIcon, text: "2.5 hours" }
    ];

    return (
        <div className='action-card-container'>
            <InfoCard infoItems={infoItems} location="Peak at Hudson Yards" />
            <ReservationForm 
                guests={guests} setGuests={setGuests}
                date={date} setDate={setDate}
                selectedTime={selectedTime} setSelectedTime={setSelectedTime}
                specialRequest={specialRequest} setSpecialRequest={setSpecialRequest}
            />
        </div>
    );
};

export default ActionCard;
