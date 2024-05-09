import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://car-doctor-server-lyart-nine.vercel.app',
    withCredentials: true
})
const useAxiosSecure = () => {
    const { logOut } = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        axiosSecure.interceptors.response.use((res) => {
            return res;
        }, (error) => {
            if (error.response.status === 401 || error.response.status === 401) {
                logOut()
                    .then(() => {
                        navigate('/login')
                    })
                    .catch(error => {
                        alert(error.message)
                    })
            }
        })
    }, [logOut,navigate])
    return axiosSecure;
};

export default useAxiosSecure;