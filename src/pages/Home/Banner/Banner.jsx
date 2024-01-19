import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
// import img5 from "../../../assets/images/banner/5.jpg";
// import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                <div className="absolute flex  items-center  left-0 top-0  h-full bg-gradient-to-r from-slate-800 to-[rgba(21, 21,21 ,0)] ">
                    <div className="pl-12 space-y-7 text-white w-3/6">
                        <h2 className="text-6xl font-bold ">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-active btn-primary bg-[#FF3811] mr-5">Primary</button>
                            <button className="btn btn-outline btn-secondary">Secondary</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-[#FF3811] text-black">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex  items-center  left-0 top-0  h-full bg-gradient-to-r from-slate-800 to-[rgba(21, 21,21 ,0)] ">
                    <div className="pl-12 space-y-7 text-white w-3/6">
                        <h2 className="text-6xl font-bold ">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-active btn-primary bg-[#FF3811] mr-5">Primary</button>
                            <button className="btn btn-outline btn-secondary">Secondary</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex  items-center  left-0 top-0  h-full bg-gradient-to-r from-slate-800 to-[rgba(21, 21,21 ,0)] ">
                    <div className="pl-12 space-y-7 text-white w-3/6">
                        <h2 className="text-6xl font-bold ">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-active btn-primary bg-[#FF3811] mr-5">Primary</button>
                            <button className="btn btn-outline btn-secondary">Secondary</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute flex  items-center  left-0 top-0  h-full bg-gradient-to-r from-slate-800 to-[rgba(21, 21,21 ,0)] ">
                    <div className="pl-12 space-y-7 text-white w-3/6">
                        <h2 className="text-6xl font-bold ">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-active btn-primary bg-[#FF3811]  mr-5">Primary</button>
                            <button className="btn btn-outline btn-secondary">Secondary</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-[#FF3811] border-[#FF3811]">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;