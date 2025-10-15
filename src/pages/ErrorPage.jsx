import { Link } from "react-router";

function ErrorPage() {

    return(
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                <h1 className="text-5xl font-bold">404</h1>
                <p className="py-6 text-5xl">PAGE NOT FOUND!</p>
                <Link to='/' className="btn btn-primary">GO BACK</Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage;