import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import Admin from './Adminschema.js';


const app = express();
app.use(express.json());
app.use(cors());

const mongoURI = process.env.mongoURI;


mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Error connecting to MongoDB:", err));


// app.post('/Login', async (req, res) => {
//   const { username, password } = req.body;

//   try {

//     const user = await Admin.findOne({ username });
//     if (!user || user.password !== password) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }

//     return res.status(200).json({ message: 'Login successful', user });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Internal Server Error', error });
//   }
// });




// app.get('/Get-Appointments', async (req, res) => {
//   try {
     
//       const appointments = await Appointment.find();
//       return res.status(200).json({ appointments });
//   } catch (error) {
//       console.log(error);
//       return res.status(500).json({ message: 'Internal Server Error', error });
//   }
// });






const Appoinment_schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Appointment = mongoose.model("Appointments", Appoinment_schema);


app.post('/Book-Appointments', async (req, res) => {
  const { username, phonenumber, email, date } = req.body;

  try {
    const appointment = await Appointment.create({ username, phonenumber, email, date });

    if (!appointment) {
      return res.status(400).json({ message: 'Error while booking appointment. Please try again.' });
    }

    return res.status(201).json({ message: 'Appointment booked successfully', appointment });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error', error });
  }
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
