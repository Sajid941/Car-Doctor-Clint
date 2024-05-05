import axios from "axios";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const OurServices = () => {
    const [services, setServices] = useState([])
    axios('http://localhost:3000/services')
        .then(data => {
            setServices(data.data)
        })
    return (
        <div>
            <div className="text-center mt-10 md:px-48 lg:px-72">
                <p className="text-primary-color font-bold">Services</p>
                <h1 className="text-4xl font-bold">Our Service Area</h1>
                <p className="text-[#737373] ">The majority have suffered alteration in some form, by injected humour, or randomised words which don,t look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 lg:px-20">
                {
                    services.map(service =>
                        <div key={service._id} className="bg-base-100 w-80  border p-5 rounded-md ">
                            <figure><img className="rounded-lg h-48 w-full object-cover" src={service.img} alt="Image" /></figure>
                            <div className="">
                                <h2 className="text-2xl font-bold my-4">{service.title}</h2>
                                <div className="flex justify-between text-primary-color font-bold">
                                    <p>Price: ${service.price} </p>
                                    <Link to={`/checkOut/${service._id}`}><FaArrowRight /></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default OurServices;