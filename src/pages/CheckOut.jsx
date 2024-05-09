import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const CheckOut = () => {
    const service = useLoaderData()
    const {user} = useAuth()
    const handleSubmit = e =>{
        e.preventDefault()
        const form = e.target;
        const customerName = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;
        const order={
            customerName,
            date,
            phone,
            email,
            message,
            service_id:service._id,
            img:service.img,
            title:service.title
        }
        // console.log(order);

        fetch("https://car-doctor-server-lyart-nine.vercel.app/booking",{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }
    return (
        <div>
            <h1 className="text-5xl font-bold text-center mt-10">Check Out: {service.title}</h1>
            <div className="bg-[#F3F3F3] p-5 md:p-20 mt-10 rounded-xl">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" name="name" placeholder="Name" required defaultValue={user?.displayName} className="input  w-full" />
                        <input type="date" name="date" required className="input  w-full" />
                        <input type="text" name="phone" placeholder="Your Phone" required defaultValue={user?.phoneNumber} className="input  w-full" />
                        <input type="text" name="email" placeholder="Your Email" required defaultValue={user?.email} className="input  w-full" />
                    </div>
                    <textarea className="textarea w-full mt-6" required rows={5} name="message" placeholder="Your Message"></textarea>
                    <input type="submit" value="Order Submit" className="w-full btn mt-6 bg-primary-color text-white" />
                </form>
            </div>
        </div>
    );
};

export default CheckOut;