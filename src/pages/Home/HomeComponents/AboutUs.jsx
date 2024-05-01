
const AboutUs = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20">
            <div>
                <div className="relative">
                    <img className="md:w-[460px] md:h-[470px] object-cover rounded-lg" src="https://i.postimg.cc/Fz08TRmS/person.jpg" alt="" />
                    <img className="absolute w-[325px] h-[330px] object-cover rounded-lg border-8 border-white top-52 right-0 hidden md:block" src="https://i.postimg.cc/FsyXZPs6/parts.jpg" alt="" />
                </div>
            </div>
            <div className="space-y-6">
                <p className="text-primary-color font-bold">About Us</p>
                <h1 className="text-3xl md:text-5xl font-bold">We are qualified & of experience in this field</h1>
                <p className="text-[#737373] ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <p className="text-[#737373]  ">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                <button className="btn bg-primary-color border-none text-white">Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;