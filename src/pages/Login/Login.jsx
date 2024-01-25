
import { useContext } from "react";
import img from "../../assets/images/login/login.svg"
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
       
        loginUser(email, password)
        .then(() =>{
            // console.log(loggedInUser);
            const user = {email};
            alert('logged in successfully');
            
            // get access token
            axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
            .then(res => {
                console.log(res.data)
                if(res.data.success){
                    navigate(location?.state?  location.state : '/' )
                }
            })
            
        })
        .catch(err =>{
            console.log(err);
            console.log(err.message);
        })


    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12">
                    
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full p-4 max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-3xl text-center font-bold">Login now!</h1>
                    <form className="card-body" onSubmit={handleLogin}>
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
                            <button className="btn btn-primary">Login</button>
                            <span className="text-sm">Are You New in Here? Please <Link to={'/register'} className="font-bold text-green-600">Sign Up</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;