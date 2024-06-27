import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../Config/firebaseConfig";
import { toast } from "react-toastify";

function CustomerBookings() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
      const fetchBookings = async () => {
        const querySnapshot = await getDocs(collection(db, "bookings"));
        const bookingsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setBookings(bookingsData);
      };
  
      fetchBookings();
    }, []); 

    const handleDelete = async (id) => {
        try {
          await deleteDoc(doc(db, 'bookings', id));
          setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== id));
          toast.success('Booking deleted successfully');
        } catch (error) {
          console.error('Error deleting booking: ', error);
          toast.error('Failed to delete booking');
        }
    };
  return (
    <div className="customerBookings wrapper">
      <h2>Customers Bookings</h2>
      <div className="responsive">
          <table className="customerBookings__table">
            <thead>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone Number</td>
                <td>Booking Date</td>
                <td>services</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
                {
                    bookings.map((book)=>(
                        <tr key={book.id}>
                            <td>{book.Name}</td>
                            <td>{book.Email}</td>
                            <td>{book.Phone}</td>
                            <td>{book.book_date}</td>
                            <td>
                            <div className="ls">
                                {
                                    book?.services?.map((service)=>(  <span className="service">{service}</span>))
                                }
                            </div>
                            </td>
                            <td>
                                <button className="cancelBtn" onClick={()=>handleDelete(book.id)}>Remove</button>
                            </td>
                      </tr>
                    ))
                }
            </tbody>
          </table>
      </div>
    </div>
  );
}

export default CustomerBookings;
