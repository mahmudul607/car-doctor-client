

const Testimonial = () => {
    return (
        <div className="my-6">
            <div className="text-center">
                <h4 className="font-bold text-[#FF3811] text-4xl">Testimonial</h4>
                <h2 className="text-2xl font-bold ">What Customer Says</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>

            </div>
            <div>
                <div className="carousel w-full h-[350px] my-6">
                    <div id="item1" className="carousel-item relative w-full">
                        <div className="carousel-item w-1/2">
                            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" />
                        </div>
                        <div className="carousel-item w-1/2">
                            <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="w-full" />
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#item4" className="btn btn-circle">❮</a>
                            <a href="#item2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="item2" className="carousel-item relative w-full">
                        <div className="carousel-item w-1/2">
                            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" />
                        </div>
                        <div className="carousel-item w-1/2">
                            <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="w-full" />
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#item1" className="btn btn-circle">❮</a>
                            <a href="#item3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="item3" className="carousel-item relative w-full">
                        <div className="carousel-item w-1/2">
                            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" />
                        </div>
                        <div className="carousel-item w-1/2">
                            <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="w-full" />
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#item2" className="btn btn-circle">❮</a>
                            <a href="#item4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="item4" className="carousel-item relative w-full">
                        <div className="carousel-item w-1/2">
                            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" />
                        </div>
                        <div className="carousel-item w-1/2">
                            <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="w-full" />
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#item3" className="btn btn-circle">❮</a>
                            <a href="#item1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Testimonial;