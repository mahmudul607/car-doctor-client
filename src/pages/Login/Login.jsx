
import {  useState } from "react";
import img from "../../assets/images/login/login.svg"
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuthData from "../../Hooks/useAuthData";

const Login = () => {
    const {loginUser, logOut} = useAuthData();
    const [loginError, setLoginError] = useState(null)
    const location = useLocation();
    const navigate = useNavigate();
  



    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        
        setLoginError(null)
       
        loginUser(email, password)
        .then(result=>{
            // console.log(loggedInUser);
            if(result.user.emailVerified){
                const user = result.user;
                console.log(user)
                
                navigate(location?.state?  location.state : '/' )
                
            // axios.post('https://car-doctor-server-one-gamma-38.vercel.app/jwt', user, {withCredentials: true})
            // .then(res => {
                
            //     if(res.data.success){
                    
            //     }
            // })

            }
            else{
                logOut();
                setLoginError("Please verify your account and try again")
                
            }
            
            
        })
        .catch(err =>{
            console.log(err);
            
            setLoginError("Please verify your account and try again")

        })


    };

    if(loginError){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: loginError,
        
      });
    }
    
    
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