import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const Cart = () => {
    const { user } = useAuth()
    const [services, setServices] = useState([])
    const url = `http://localhost:3000/booking?email=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [url])

    const handleDelete = id => {
        fetch(`http://localhost:3000/booking/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                }
            })
    }
    const handleConform = id => {
        fetch(`http://localhost:3000/booking/${id}`, {
            method: "PATCH",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:'conform'})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = services.filter(service => service._id !== id)
                    const updated = services.find(service => service._id === id)
                    updated.status = 'conform'
                    const newBookings = [updated,...remaining]
                    setServices(newBookings)
                }
            })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Action</th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        services.map(service =>
                            <tr key={service._id}>
                                <th>
                                    <button onClick={() => handleDelete(service._id)} className="btn btn-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={service.img} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{service.title}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{service.email}</td>
                                <td>{service.date}</td>
                                <th>
                                    {
                                        service.status == "conform"?
                                        <button  className=" text-purple-700">Conformed</button>:
                                        <button onClick={()=>handleConform(service._id)} className="btn btn-ghost btn-xs">Conform</button>
                                    }
                                </th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Cart;