import { useLoaderData } from "react-router-dom";
import QuickNav from "../Share/QuickNav/QuickNav";


const CheckOut = () => {
    const service = useLoaderData();
    return (
        <div>
            <QuickNav></QuickNav>
            <div>
                <h1>{service.title}</h1>
                <div>
                    <div className=" bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">

                            <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                                <form className="card-body">
                                    <div className="form-control w-full lg:flex-row gap-4">
                                        <div className="w-1/2">
                                            <label className="label">
                                                <span className="label-text">First Name</span>
                                            </label>
                                            <input type="text" placeholder="First Name" className="input input-bordered w-full" required />
                                        </div>
                                        <div className="w-1/2">
                                            <label className="label">
                                                <span className="label-text">Last Name</span>
                                            </label>
                                            <input type="text" placeholder="Last Name" className="input input-bordered w-full" required />
                                        </div>
                                    </div>
                                    <div className="form-control w-full lg:flex-row gap-4">
                                        <div className="w-1/2">
                                            <label className="label">
                                                <span className="label-text">Phone</span>
                                            </label>
                                            <input type="text" placeholder="Phone Number" className="input input-bordered w-full" required />
                                        </div>
                                        <div className="w-1/2">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" placeholder="Email" className="input input-bordered w-full" required />
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

export default CheckOut;