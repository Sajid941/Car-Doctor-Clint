import { Link } from "react-router-dom";
import loginSVG from "../../assets/login.svg"
import useAuth from './../../hooks/useAuth';
const Register = () => {
    const {createUser}=useAuth()

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name,email, password)
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error);
        })

    }
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="">
                    <img src={loginSVG} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm border p-10">
                    <form onSubmit={handleRegister} className="">
                        <h1 className="text-3xl text-center font-bold  text-[#444444]">Register</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-primary-color hover:bg-primary-color text-white ">Register</button>
                        </div>
                    </form>
                    <div className="mt-5 text-center space-y-4">
                        <p className="font-medium text-[#444444]">Or Register With</p>
                        <div className="flex gap-4 justify-center">
                            <img className="w-8 h-8" src="https://i.postimg.cc/MT52v3Th/social.png" alt="" />
                            <img className="w-8 h-8" src="https://i.postimg.cc/tJvKz1Fk/social-1.png" alt="" />
                            <img className="w-8 h-8" src="https://i.postimg.cc/90X2b5Km/google.png" alt="" />
                        </div>
                        <p className="font-medium text-[#757575]">Already have a account? <Link to={"/login"} className="font-bold text-primary-color">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;