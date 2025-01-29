import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Appoinmentslist.css';  

const AppointmentsList = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      
        const fetchAppointments = async () => {
            try {
                const response = await axios.get('http://localhost:5000/appointments');
                setAppointments(response.data.appointments); 
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch appointments');
                setLoading(false);
            }
        };

        fetchAppointments();
    }, []);


    
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="appointments-list">
            <h2>All Appointments</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment, index) => (
                        <tr key={index}>
                            <td>{appointment.username}</td>
                            <td>{appointment.phonenumber}</td>
                            <td>{appointment.email}</td>
                            <td>{new Date(appointment.date).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentsList;
