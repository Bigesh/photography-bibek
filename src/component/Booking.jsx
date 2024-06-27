import React, { useState } from "react";
import "../css/booking.css";
import { db } from "../Config/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";
function Booking() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [services, setServices] = useState([]);
  
    const saveBookingHandler = async (event) => {
      event.preventDefault();
      const newBooking = {
        Email:email,
        Name:name,
        Phone:phone,
        book_date:date,
        services:services
      };
      try {
        const docRef = await addDoc(collection(db, 'bookings'), newBooking);
        console.log("Document written with ID: ", docRef.id);
        setName('');
        setEmail('');
        setPhone('');
        setDate('');
        setServices([]);
        toast.success("Booking successful");

      } catch (e) {
        toast.error("Problem in Booking");
      }
      console.log({ name, email, phone, date, services });
    };
  
    const handleServiceChange = (event) => {
      const { value, checked } = event.target;
      setServices((prevServices) => {
        if (checked) {
          return [...prevServices, value];
        } else {
          return prevServices.filter(service => service !== value);
        }
      });
    };
  return (
    <div className="wrapper">
    <form action="" className="bookingForm" onSubmit={saveBookingHandler}>
      <h2>Book Now for our services</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone number</label>
        <input
          type="number"
          name="phone"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Select date</label>
        <input
          type="date"
          name="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-group grid-full">
        <label>Services</label>
        <div className="checkboxitems">
          <div className="checkbox-group">
            <label htmlFor="pre-wedding">Pre Wedding (NRs. 35000/-)</label>
            <input
              type="checkbox"
              id="pre-wedding"
              value="Pre Wedding (NRs. 35000/-)"
              checked={services.includes("Pre Wedding (NRs. 35000/-)")}
              onChange={handleServiceChange}
            />
          </div>
          <div className="checkbox-group">
            <label htmlFor="birthday-party">Birthday Party (NRs. 20000/-)</label>
            <input
              type="checkbox"
              id="birthday-party"
              value="Birthday Party (NRs. 20000/-)"
              checked={services.includes("Birthday Party (NRs. 20000/-)")}
              onChange={handleServiceChange}
            />
          </div>
          <div className="checkbox-group">
            <label htmlFor="videography">Videography (NRs. 20000/-)</label>
            <input
              type="checkbox"
              id="videography"
              value="Videography (NRs. 20000/-)"
              checked={services.includes("Videography (NRs. 20000/-)")}
              onChange={handleServiceChange}
            />
          </div>
          <div className="checkbox-group">
            <label htmlFor="baby-shower">Baby Shower (NRs. 15000/-)</label>
            <input
              type="checkbox"
              id="baby-shower"
              value="Baby Shower (NRs. 15000/-)"
              checked={services.includes("Baby Shower (NRs. 15000/-)")}
              onChange={handleServiceChange}
            />
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className="submitBtn" type="submit">Submit</button>
        <button className="cancelBtn" type="button">Cancel</button>
      </div>
    </form>
    </div>
  );
}

export default Booking;
