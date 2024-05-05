import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg"

import "../CSS/NavBar.css"
import useAuth from "../hooks/useAuth";
const NavBar = () => {
    const { user, logOut } = useAuth()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert("Logout successfully")
            })
            .catch(error => {
                alert(error.message)
            })
    }
    const navLink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <Link to={"/"} className="">
                    <img className="w-12 md:w-16" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-6 ">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user ?
                    <>
                    <Link to={"/cart"} className="btn  bg-primary-color mr-2 text-white">Cart</Link>
                    <a onClick={handleLogOut} className="btn btn-outline border-primary-color text-primary-color">Log out</a>
                    </>:
                    <Link to={'/login'}  className="btn btn-outline border-primary-color text-primary-color">Log in</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;