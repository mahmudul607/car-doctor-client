import { useEffect, useState } from "react";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import NoData from "../Share/NoData/NoData";
// import { useNavigate } from "react-router-dom";
import useAuthData from "../../Hooks/useAuthData";
// import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";




const Bookings = () => {

  // const { user } = useContext(AuthContext);
  const { user} = useAuthData();
const axiosSecure = useAxiosSecure();
 
  const [bookings, setBookings] = useState([])


  // const navigate = useNavigate();

  // if(bookings.length <= 0) {

  //   navigate('/nodata');

  // }

 
  const url = (`/bookings?email=${user?.email}`);
  useEffect(() => {
    
    axiosSecure.get(url)
      .then(res => {
     
        setBookings(res.data)
      })
    // fetch(url)
    // .then(res => res.json())
    // .then(data => setBookings(data))
  }, [url])

  const handleDelete = id => {

    Swal.fire({
      title: "Do you want to Delete?",
      
      showCancelButton: true,
      confirmButtonText: "Delete",
     
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Delete!", "", "success");

        fetch(`https://car-doctor-server-one-gamma-38.vercel.app/bookings/${id}`, {
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

    fetch(`https://car-doctor-server-one-gamma-38.vercel.app/bookings/${id}`, {
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
     <>
     { 
      bookings ?
      <div className="overflow-x-auto min-h-screen">
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
    </div>: <NoData></NoData> 
    }
    
     
     
     
     
     </>
  );
};

export default Bookings;