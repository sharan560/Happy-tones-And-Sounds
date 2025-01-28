import React from 'react'
import './BookAppoinments.css'

const BookAppoinments = () => {
    return (
        <div>
            <div className="Appoinments">
                <h1>Book Your Appoinments Now..!</h1>
                <div id="Appoinments">
                    <form>
                        <h1>Appoinmets Form</h1>
                        <div className="form-group">
                            <input type="text" id="name" name="Name" placeholder='Enter Your Name'  required/>
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" name="email" placeholder='Enter Your Email' required />
                        </div>
                        <div className="form-group">
                            <input type="number" id="phonenumber" name="phone" placeholder='Enter Your Phonenumber' required />
                        </div>
                        <div className="form-group">
                            <input type="date" id="date" name="date" placeholder='Appoinment date' required />
                        </div>
                        <button type="submit">Book Appoinment</button>
                    </form>
                </div>
            </div>
            <br /><br /><br />

        </div>
    )
}

export default BookAppoinments