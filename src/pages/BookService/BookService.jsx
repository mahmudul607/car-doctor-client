
import { useLoaderData } from "react-router-dom";
import QuickNav from "../Share/QuickNav/QuickNav";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const BookService = () => {
    const service = useLoaderData();
    const { price, title, img, _id } = service;
    const {user}=useContext(AuthContext);
    
    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const name1 = form.firstName.value;
        const name2 = form.lastName.value;
        const name = name1 +' '+ name2;
        const email = form.email.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const bookings = {
            customerName : name,
            email,
            phone,
            date,
            img,
            service_id: _id,
            service: title


        } 
        console.log(bookings);
        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
        .then(res => res.json())

        .then(data =>{
            console.log(data);
        })
    }
    return (
        <div>
            <QuickNav></QuickNav>
            <div>

                <div>
                    <div className=" bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">

                            <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                                <h1 className="text-center text-3xl pt-4 font-bold text-[#FF3811]">{title}</h1>
                                <form className="card-body" onSubmit={handleOrder}>
                                    <div className="form-control w-full lg:flex-row gap-4">
                                        <div className="w-1/2">
                                            <label className="label">
                                                <span className="label-text">First Name</span>
                                            </label>
                                            <input type="text" placeholder="First Name" defaultValue={user?.displayName} name='firstName' className="input input-bordered w-full" required />
                                        </div>
                                        <div className="w-1/2">
                                            <label className="label">
                                                <span className="label-text">Last Name</span>
                                            </label>
                                            <input type="text" placeholder="Last Name" name="lastName" className="input input-bordered w-full" required />
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