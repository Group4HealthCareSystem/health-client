import React, { useState, useEffect } from 'react';
import "./book-appointment.css";
import Header from '../../../../reusables/header/header';

const BookAppointment = () => {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [duration, setDuration] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/appointment/appointment/');
        const data = await response.json();
        setPatients(data.map(appointment => appointment.patient));
        setDoctors(data.map(appointment => appointment.doctor));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const newAppointment = {
        patient: selectedPatient,
        doctor: selectedDoctor,
        date_time: dateTime,
        duration,
        message,
        status,
      };
      const response = await fetch('http://localhost:8000/appointment/appointment/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAppointment),
      });
      const data = await response.json();
      console.log('Appointment created:', data);
      setSelectedPatient('');
      setSelectedDoctor('');
      setDateTime('');
      setDuration('');
      setMessage('');
      setStatus('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <div className='book-appointment'>
        <Header />
        <form className="form" onSubmit={handleFormSubmit}>
          <label>
            Patient:
            <select value={selectedPatient} onChange={(event) => setSelectedPatient(event.target.value)}>
              {patients.map(patient => (
                <option key={patient.id} value={patient.id}>
                  {patient.name}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Doctor:
            <select value={selectedDoctor} onChange={(event) => setSelectedDoctor(event.target.value)}>
              {doctors.map(doctor => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Date and time:
            <input type="datetime-local" value={dateTime} onChange={(event) => setDateTime(event.target.value)} />
          </label>
          <br />
          <label>
            Duration (in minutes):
            <input type="number" value={duration} onChange={(event) => setDuration(event.target.value)} />
          </label>
          <br />
          <label>
            Message:
            <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
          </label>
          <br />
          <label>
            Status:
            <select value={status} onChange={(event) => setStatus(event.target.value)}>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </label>
          <br />
          <button type="submit">Book Appointment</button>
        </form>
        </div>
  );
};

export default BookAppointment;