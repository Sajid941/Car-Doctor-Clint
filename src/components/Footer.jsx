import logo from "../assets/logo.svg"
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#151515] text-white mt-20">
            <aside>
               <img className="text-white" src={logo} alt="" />
                <p>Edwin Diaz is a software and web technologies engineer, <br /> a life coach trainer who is also a serial .</p>
                <div className="flex gap-2">
                    <FcGoogle size={30}/>
                    <FaTwitterSquare size={30}/>
                    <FaInstagramSquare size={30}/>
                    <FaLinkedin size={30}/>
                </div>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;