import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";
import Swal from "sweetalert2";



const Bookings = () => {

  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([])
  
  useEffect(() => {
    const url = (`http://localhost:5000/bookings?email=${user?.email}`);
    axios.get(url, { withCredentials: true })
      .then(res => {
     
        setBookings(res.data)
      })
    // fetch(url)
    // .then(res => res.json())
    // .then(data => setBookings(data))
  }, [user])

  const handleDelete = id => {

    Swal.fire({
      title: "Do you want to Delete?",
      
      showCancelButton: true,
      confirmButtonText: "Delete",
     
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Delete!", "", "success");

        fetch(`http://localhost:5000/bookings/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.deletedCount > 0) {
            
            const remaining = bookings.filter(booking => booking._id !== id)
            setBookings(remaining);
          }

        })



      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });

   
    


  }
  const handleBookingUpdate = id => {

    fetch(`http://localhost:5000/bookings/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ status: 'confirm' })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter(booking => booking._id !== id);
          const updated = bookings.find(booking => booking._id === id);
          updated.status = 'confirm';
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      })
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>

              </label>
            </th>

            <th>Service img</th>
            <th>Name</th>
            <th>Price</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            bookings.map(booking => <BookingRow
              key={booking._id}
              booking={booking}
              handleDelete={handleDelete}
              handleBookingUpdate={handleBookingUpdate}
            ></BookingRow>)
          }
        </tbody>


      </table>
    </div>
  );
};

export default Bookings;