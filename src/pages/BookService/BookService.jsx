
import { useLoaderData } from "react-router-dom";
import QuickNav from "../Share/QuickNav/QuickNav";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import imgBg from "../../assets/images/banner/3.jpg"
import axios from "axios";


const BookService = () => {
    const service = useLoaderData();
    
    const { price, title, img, _id, name, details} = service;

    const img2 = details.images[0]
    const {user}=useContext(AuthContext);
    
    const handleBookings = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.firstName.value;
        const serviceName = form.serviceName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const price = form.due.value;
        const bookings = {
            customerName : name,
            email,
            phone,
            date,
            img,
            img2,
            price,
            service_id: _id,
            service: serviceName


        } 

        Swal.fire({
            title: "Do you want to Confirm the Booking?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Confirm",
            denyButtonText: `Don't Booking`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire("Confirmed!", "", "success");

              axios.post('http://localhost:5000/bookings', bookings)
            .then(data =>{
                console.log(data);
                
            })

            } else if (result.isDenied) {
              Swal.fire("Booking are not confirmed", "", "info");
              return;
            }
          });
       
       
    }
    return (
        <div>
            <QuickNav
              title={'Booked Your Needs'}
              path={' bookings'}
              bgImg={imgBg}
            ></QuickNav>
            <div>

                <div>
                    <div className=" bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">

                            <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                                <h1 className="text-center text-3xl pt-4 font-bold text-[#FF3811]">{title}</h1>
                                <form className="card-body" onSubmit={handleBookings}>
                                    <div className="form-control w-full lg:flex-row gap-4">
                                        <div className="w-1/2">
                                            <label className="label">
                                                <span className="label-text">First Name</span>
                                            </label>
                                            <input type="text" placeholder="First Name" defaultValue={user?.displayName} name='firstName' className="input input-bordered w-full" required />
                                        </div>
                                        <div className="w-1/2">
                                            <label className="label">
                                                <span className="label-text">Service Name</span>
                                            </label>
                                            <input type="text" placeholder="Service Name" defaultValue={title||name} name="serviceName" className="input input-bordered w-full" required />
                                        </div>
                                    </div>
                                    <div className="form-control w-full lg:flex-row gap-4">
                                        <div className="w-1/2">
                                            <label className="label">
                                                <span className="label-text">Phone</span>
                                            </label>
                                            <input type="text" placeholder="Phone Number" defaultValue={user?.phoneNumber}  name="phone" className="input input-bordered w-full" required />
                                        </div>
                                        <div className="w-1/2">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" placeholder="Email" defaultValue={user?.email} name="email" className="input input-bordered w-full" required />
                                        </div>
                                    </div>
                                    <div className="form-control w-full lg:flex-row gap-4">
                                        <div className="w-1/2">
                                            <label className="label">
                                                <span className="label-text">Date</span>
                                            </label>
                                            <input type="date" placeholder="Phone Number" name="date" className="input input-bordered w-full" required />
                                        </div>
                                        <div className="w-1/2">
                                            <label className="label">
                                                <span className="label-text">Due</span>
                                            </label>
                                            <input type="text" placeholder="Email" defaultValue={price} name="due" className="input input-bordered w-full" required />
                                        </div>
                                    </div>
                                    <div className="form-control w-full lg:flex-row gap-4">

                                        <textarea className="textarea textarea-bordered w-full" placeholder="Your Message"></textarea>

                                    </div>

                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary bg-[#FF3811]">Booking Confirm</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default BookService;