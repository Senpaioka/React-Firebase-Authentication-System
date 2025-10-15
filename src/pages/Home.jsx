import { useContext } from "react";
import {AuthContext} from '../context/AuthContext';
import { Link } from "react-router";


function Home() {

    const { user } = useContext(AuthContext);

    return(
       <div className="hero bg-base-200 min-h-[500px]">
            <div className="hero-content text-center">
                <div className="max-w-md">
                {
                    user ? <h1 className="text-5xl font-bold">Hello {(user.displayName).toUpperCase()} !!</h1>
                    : <h1 className="text-5xl font-bold">Hello there!!</h1>
                }
                <p className="py-6">Welcome to our web application.</p>
                <Link to='/dashboard' className="btn btn-primary">Dashboard</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;