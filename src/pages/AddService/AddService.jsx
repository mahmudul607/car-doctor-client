
import { Link } from "react-router-dom";
import QuickNav from "../Share/QuickNav/QuickNav";


const AddService = () => {
    return (
        <div>
            <div>
                <QuickNav
                    title={'Add a new service'}
                    path={'addservice'}
                ></QuickNav>
            </div>
            <div>
                <div className="hero min-h-screen bg-[#f3f3f3]">
                    <div className="hero-content w-4/5  ">

                        <div className="card shrink-0 w-full  shadow-2xl bg-base-100 p-8">
                            <form className="card-body space-y-4">
                                <div className="w-full flex gap-4 ">
                                    <div className="form-control w-1/2">

                                        <input type="text" placeholder="Service Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control w-1/2">

                                        <input type="text" placeholder="Service Price" className="input input-bordered" required />

                                    </div>
                                </div>
                                <div className="w-full flex gap-4 ">
                                    <div className="form-control w-1/2">

                                        <input type="text" placeholder="Text Here" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control w-1/2">

                                        <input type="text" placeholder="Service Type" className="input input-bordered" required />

                                    </div>
                                </div>
                                <div className="form-control w-full">

                                    <textarea className="textarea textarea-bordered h-36" placeholder="Bio"></textarea>

                                </div>

                                <div className="form-control mt-6">
                                    <Link className="btn btn-primary">Add Service</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default AddService;