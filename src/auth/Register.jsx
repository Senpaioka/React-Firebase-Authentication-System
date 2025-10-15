import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import {AuthContext} from "../context/AuthContext";
import GmailLogin from "../components/GmailLogin";


function Register() {

    const { createUser, verifyUserViaEmail, updateUserInfo } = useContext(AuthContext);
    const [isUserCreated, setIsUserCreated] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();


    // register with email and password
    function handleSubmit(event){
        event.preventDefault()

        const email = event.target.email.value;
        const password = event.target.password.value;
        const username = event.target.username.value;
        const url = event.target.url.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;

            //updating info
            updateUserInfo({
                displayName: username,
                photoURL: url,
            })

            console.log(user);
            // email verification
            verifyUserViaEmail()
            .then(() => {
                console.log('verification email sent.')
            })
            .catch(error => {
                console.log(error.message);
                console.log('Something went wrong. operation failed.')
                setErrorMessage(error.message)
            })

            // redirects
            navigate('/login');
        })
        .catch(error => {
            console.log(error);
            setErrorMessage(error.message);

        })
    }


    useEffect(function(){
        setIsUserCreated('');
        setErrorMessage('');
    },[])

    return(

        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset">

                            <label className="label">Username</label>
                            <input type="text" className="input" name="username" placeholder="Username" />

                            <label className="label">Image URL</label>
                            <input type="text" className="input" name="url" placeholder="Image URL" />

                            <label className="label">Email</label>
                            <input type="email" className="input" name="email" placeholder="Email" />

                            <label className="label">Password</label>
                            <input type="password" className="input" name="password" placeholder="Password" />

                            <button className="btn btn-neutral mt-4">Register</button>

                        </fieldset>
                    </form>
                </div>

                <GmailLogin></GmailLogin>

                { isUserCreated && <p className="text-center text-green-500">Account Created Successfully.</p>}
                { errorMessage && <p className="text-center text-red-500">{ errorMessage }</p>}
                </div>
            </div>
        </div>

    )
}

export default Register;