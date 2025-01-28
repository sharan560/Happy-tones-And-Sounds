import React, { useState } from 'react'
import './BookAppoinments.css'
import axios from 'axios';


const BookAppoinments = () => {

    const[username,setname]=useState('');
    const [email,setemail]=useState('');
    const [phonenumber,setphonenumber]=useState('');
    const [date,setdate]=useState('');


    const Submit =async(e) =>{
        e.preventDefault();
    
            const response=await axios.post('http://localhost:5000/Book-Appointments',{username,phonenumber,email,date});
            try{
            if(response.status===201)
            {
                alert('Appoinment booked')
                setname('');
                setemail('');
                setphonenumber('');
                setdate('');
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