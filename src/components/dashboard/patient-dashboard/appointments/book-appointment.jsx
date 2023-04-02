// import "./BookAppointment.css"
import React, { useState, useEffect } from 'react';

function BookAppointment() {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [duration, setDuration] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/appointment/appointment/')
      .then(response => response.json())
      .then(data => {
        setPatients(data.map(appointment => appointment.patient));
        setDoctors(data.map(appointment => appointment.doctor));
      })
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    // Send POST request to create appointment
    const newAppointment = {
      patient: selectedPatient,
      doctor: selectedDoctor,
      date_time: dateTime,
      duration,
      message,
      status,
    };
    fetch('http://localhost:8000/appointment/appointment/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAppointment),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Appointment created:', data);
        // Reset form fields
        setSelectedPatient('');
        setSelectedDoctor('');
        setDateTime('');
        setDuration('');
        setMessage('');
        setStatus('');
      })
      .catch(error => console.error(error));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Patient:
        <select value={selectedPatient} onChange={event => setSelectedPatient(event.target.value)}>
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
        <select value={selectedDoctor} onChange={event => setSelectedDoctor(event.target.value)}>
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
        <input type="datetime-local" value={dateTime} onChange={event => setDateTime(event.target.value)} />
      </label>
      <br />
      <label>
        Duration (in minutes):
        <input type="number" value={duration} onChange={event => setDuration(event.target.value)} />
      </label>
      <br />
      <label>
        Message:
        <textarea value={message} onChange={event => setMessage(event.target.value)} />
      </label>
      <br />
      <label>
        Status:
        <select value={status} onChange={event => setStatus(event.target.value)}>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </label>
      <br />
      <button type="submit">Book Appointment</button>
    </form>
  );
}

export default BookAppointment;