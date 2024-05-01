import Carousel from "./Carousel";

const Banner = () => {
    return (
        <div className="carousel w-full md:h-[600px] mt-5">
            <Carousel
                slideID="slide1"
                imageSrc="https://i.postimg.cc/JhnwRMcw/5.jpg"
                prevSlide="#slide6"
                nextSlide="#slide2"
            ></Carousel>
            <Carousel
                slideID="slide2"
                imageSrc="https://i.postimg.cc/hG3kj6pX/1.jpg"
                prevSlide="#slide1"
                nextSlide="#slide3"
            ></Carousel>
            <Carousel
                slideID="slide3"
                imageSrc="https://i.postimg.cc/Vk0Mpbp2/2.jpg"
                prevSlide="#slide2"
                nextSlide="#slide4"
            ></Carousel>
            <Carousel
                slideID="slide4"
                imageSrc="https://i.postimg.cc/Dw7kYqSw/3.jpg"
                prevSlide="#slide3"
                nextSlide="#slide5"
            ></Carousel>
            <Carousel
                slideID="slide5"
                imageSrc="https://i.postimg.cc/SKpXP1Wz/4.jpg"
                prevSlide="#slide4"
                nextSlide="#slide6"
            ></Carousel>
            <Carousel
                slideID="slide6"
                imageSrc="https://i.postimg.cc/G2W6PY0r/6.jpg"
                prevSlide="#slide5"
                nextSlide="#slide1"
            ></Carousel>
        </div>
    );
};

export default Banner;