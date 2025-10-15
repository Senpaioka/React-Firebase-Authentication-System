import { useNavigate, useLocation } from "react-router";
import { useState, useContext } from "react";
import GmailLogin from "../components/GmailLogin";
import {AuthContext} from "../context/AuthContext";


function Login() {

    const { loginUserManually, resetPasswordViaEmail } = useContext(AuthContext);

    const [error, setError] = useState('');
    const [isEmail, setIsEmail] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    // login with email & password
    function handleLoginWithInfo(event){
        
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        loginUserManually(email, password)
        .then(result => {
            console.log(result.user);
            navigate(location.state || '/');
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
        })
    }


    // sending email for password reset.(forgot password)
  const handleResetPassword = () => {
    console.log(isEmail)
    if (!isEmail) {
      console.log("Please enter your email first");
      return;
    }

    resetPasswordViaEmail(isEmail)
    .then(() => {
        console.log('email sent for resetting password.')
    })
    .catch(error => {
        console.log(error);
        setError(error.message);
    })
  };


    return(
        
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleLoginWithInfo}>
                        <fieldset className="fieldset">

                            <label className="label">Email</label>
                            <input type="email" className="input" name="email" placeholder="Email" value={isEmail} onChange={e => setIsEmail(e.target.value)}/>

                            <label className="label">Password</label>
                            <input type="password" className="input" name="password" placeholder="Password" />

                            <div><a onClick={handleResetPassword} className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>

                        </fieldset>

                    </form>
                    
                </div>
                    <GmailLogin></GmailLogin>

                    { error && <p className="text-center text-red-500">{ error }</p>}
                </div>
            </div>
        </div>

    )
}


export default Login;