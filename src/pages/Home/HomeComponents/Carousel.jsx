
const Carousel = ({slideID,imageSrc, prevSlide , nextSlide}) => {
    return (
        <div id={slideID} className="carousel-item relative w-full ">
            <img src={imageSrc} className="w-full  object-cover rounded-xl" />
            <div className="absolute flex flex-col md:justify-center  w-full h-full gap-2 md:gap-6 px-4 md:pr-96 lg:pr-[700px] md:pl-10  text-white  bg-gradient-to-r from-black/95 to-black/10 rounded-xl">
                <h1 className="text-xl md:text-5xl font-bold mt-2 md:mt-0">Affordable Price For Car Servicing</h1>
                <p className="text-xs">There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                <div className="flex gap-4 ">
                    <button className="md:btn border-none p-1 rounded-lg  md:bg-primary-color  md:text-white">Discover More</button>
                    <button className="md:btn md:btn-outline p-1 rounded-lg border md:border-white md:text-white">Latest Project</button>
                </div>
            </div>
            <div className="absolute flex gap-4 justify-between transform -translate-y-1/2 -bottom-3 md:bottom-3 right-3 ">
                <a href={prevSlide} className="btn btn-circle bg-opacity-20 border-none text-white">❮</a>
                <a href={nextSlide} className="btn btn-circle bg-primary-color border-none text-white">❯</a>
            </div>
        </div>
    );
};

export default Carousel;