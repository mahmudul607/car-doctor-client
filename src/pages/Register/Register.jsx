import { useContext, useState } from "react";
import img from "../../assets/images/login/login.svg"
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import axios from "axios";



const Register = () => {
    const {createUser, sendVerificationEmail, logOut} = useContext(AuthContext);
    const [registerError, setRegisterError] = useState(null);
    const [registerSuccess, setRegisterSuccess] = useState(null);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const accountType = form.type.value;
        const user = {name, email, password, accountType  };
        console.log(user);
        setRegisterError(null);
        setRegisterSuccess(null);
        if(password.length < 6){
             setRegisterError('password must be at least 6 characters');
             console.log("com");
             return;

        }
        if(!/[A-Z]/.test(password)){
             setRegisterError('Please enter at least one Capital Letter');
             return;
        }

        createUser(email, password)
        .then((result) => {
            const user = result.user;
          
            updateProfile(result.user, {
                displayName: name, photoURL: "https://i.ibb.co/ygth6MP/1mh.png", role: accountType
            })
            .then(()=>{
                console.log("User updated");
            })
            sendVerificationEmail(result.user)
            .then(()=>{
                Swal.fire({
                    title: `Verification Email send successfully`,
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });

            })

            axios.post('http://localhost:5000/users',user)
            .then(res=>{
                console.log(res.data)
                setRegisterSuccess("Successfully registered")
                logOut()
                navigate("/login")
            })
           
          
          
            
            
        })
        .catch(err => {
           
            
            setRegisterError(err.message)
               
        })
    };
    if(registerError){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: registerError,
            footer: '<a href="#">Why do I have this issue?</a>'
          });

    }

    if(registerSuccess){
        
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: registerSuccess,
            showConfirmButton: false,
            timer: 3500
          });
    }
   
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12">

                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full p-4 max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center font-bold">Register now!</h1>
                    <form className="card-body" onSubmit={handleRegister}>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="email" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Account Type</span>
                            </label>
                            <input type="text" placeholder="Type of Account" name="type" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">SignUp</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;