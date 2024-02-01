import QuickNav from "../../Share/QuickNav/QuickNav";
import serviceImg1 from "../../../assets/images/services/6.jpg"



const ServiceDetails = () => {

    
    return (
        <div>
            <div>
                <QuickNav
                    title={'Service Details'}
                    path={'Services Details'}
                ></QuickNav>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 border p-4 gap-2">
                <div className="lg:col-span-2 md:col-span-2 sm:col-auto border p-4">
                    <div className="grid lg:grid-flow-row-8 md:grid-flow-row-8 sm:grid-flow-row-11 grid-cols-6">
                        <div className="col-span-6 p-4">
                            <img className="border rounded-xl h-72 w-full" src={serviceImg1} alt="images" />
                        </div>
                        <div className="col-span-6 p-4">
                            <div className="space-y-4">
                                <h1 className="text-4xl font-bold  pb-6">Unique Car Engine Service</h1>
                                <p className="text-left pb-6">{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`} </p>
                            </div>
                        </div>
                        <div className="lg:col-span-3 md:col-span-3 col-span-6 mr-2">
                            <div className="p-6 bg-[#f3f3f3] border-t-2 border-t-[#FF3811] rounded-2xl my-4">
                                <h2 className="text-2xl font-bold">Instant Car Services</h2>
                                <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                            </div>
                            <div className="p-6 bg-[#f3f3f3] border-t-2 border-t-[#FF3811] rounded-2xl my-4">
                                <h2 className="text-2xl font-bold">Easy Customer Service</h2>
                                <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                            </div>

                        </div>
                        <div className="lg:col-span-3 md:col-span-3 col-span-6 ml-2">
                            <div className="p-6 bg-[#f3f3f3] border-t-2 border-t-[#FF3811] rounded-2xl my-4">
                                <h2 className="text-2xl font-bold">24/7 Quality Service</h2>
                                <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                            </div>
                            <div className="p-6 bg-[#f3f3f3] border-t-2 border-t-[#FF3811] rounded-2xl my-4">
                                <h2 className="text-2xl font-bold">Quality Cost Service</h2>
                                <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                            </div>
                        </div>
                        <div className="col-span-6">
                            <p>
                           {` There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. `}
                            </p>
                        </div>
                        <div className="col-span-6">
                            <div>
                                <h1 className="text-2xl">3 Simple Steps to Process</h1>
                                <p>{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text`}</p>
                            </div>
                        </div>
                        <div className="lg:col-span-2 md:col-span-2 col-span-6">
                            <div>
                                <p>1</p>
                            </div>
                            <div>
                            <h2>STEP ONE</h2>
                            <p>It uses a dictionary of over 200 .</p>
                            </div>
                        </div>
                        <div className="lg:col-span-2 md:col-span-2 col-span-6">
                            <div>
                                <p>1</p>
                            </div>
                            <div>
                            <h2>STEP ONE</h2>
                            <p>It uses a dictionary of over 200 .</p>
                            </div>
                        </div>
                        <div className="lg:col-span-2 md:col-span-2 col-span-6">
                            <div>
                                <p>1</p>
                            </div>
                            <div>
                            <h2>STEP ONE</h2>
                            <p>It uses a dictionary of over 200 .</p>
                            </div>
                        </div>
                        
                        <div className="col-span-6">
                            
                            
                        </div>

                    </div>

                </div>
                <div className="lg:col-span-1 md:col-span-1 sm:col-auto border p-2">
                    <h1></h1>

                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;