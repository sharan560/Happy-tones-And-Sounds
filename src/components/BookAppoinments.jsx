import React, { useState } from 'react'
import './BookAppoinments.css'
import axios from 'axios';
import emailjs from 'emailjs-com';

const BookAppoinments = () => {

    const[username,setname]=useState('');
    const [email,setemail]=useState('');
    const [phonenumber,setphonenumber]=useState('');
    const [date,setdate]=useState('');

    const serviceId="service_iqomchd";
    const tempelateId="template_zwccbmw";
    const publickey="jIFOPxHm8c2crRXlH";


    const Submit =async(e) =>{
        e.preventDefault();
    
            const response=await axios.post('https://happytones-and-sounds-backend.onrender.com/Book-Appointments',{username,phonenumber,email,date});
            try{
            if(response.status===201)
            {
                alert('Appoinment booked')

                const tempelateparams={
                    from_name:"sharan",
                    from_email:email,
                    email:email,
                    to_name:"danista",
                    message:"hello",
                };

                emailjs.send(serviceId,tempelateId,tempelateparams,publickey)
                    .then((response)=>{
                        console.log('Email Sent')
                        setname('');
                        setemail('');
                        setphonenumber('');
                        setdate('');

                    })
                }
            }

            catch(error)
            {
                alert("Error occured")
            }

       
    }

    return (
        <div>
            <div className="Appoinments">
                <h1>Book Your Appoinments Now..!</h1>
                <div id="Appoinments">
                    <form onSubmit={Submit}>
                        <h1>Appoinmets Form</h1>
                        <div className="form-group">
                            <input type="text" id="name" name="Name" placeholder='Enter Your Name'  value={username} onChange={(e)=>setname(e.target.value)}  required/>
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" name="email" placeholder='Enter Your Email' value={email} onChange={(e)=>setemail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <input type="number" id="phonenumber" name="phone" placeholder='Enter Your Phonenumber' value={phonenumber} onChange={(e)=>setphonenumber(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <input type="date" id="date" name="date" placeholder='Appoinment date' value={date} onChange={(e)=>setdate(e.target.value)} required />
                        </div>
                        <button  type="submit">Book Appoinment</button>
                    </form>
                </div>
            </div>
            <br /><br /><br />

        </div>
    )
}

export default BookAppoinments