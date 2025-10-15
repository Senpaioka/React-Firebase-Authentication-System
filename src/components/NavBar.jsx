import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import avatarUrl from '../assets/avatar.jpg';



function NavBar() {

  const {signOutUser, user} = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout(){
    signOutUser()
    .then(() => {
      console.log('logging out successful')
      navigate('/login');
    })
    .catch(error => {
      console.log(error);
    })
  }


  return(

    <div className="navbar bg-base-100 shadow-sm">

      <div className="flex-1">
        <NavLink to='/' className="btn btn-ghost text-xl">Demo-Auth</NavLink>
      </div>


      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          
            {
              user ? <li><NavLink to='/dashboard'>Dashboard</NavLink></li> : 
              <>
              <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
              <li><NavLink to='/register'>Register</NavLink></li>
              <li><NavLink to='/login'>Login</NavLink></li>
              </>
            }

        </ul>
      </div>


      {
        user && (
        <div className="flex-none px-10">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              { user.photoURL ? <img alt="user photo" src={user.photoURL} /> : <img alt="default photo" src={avatarUrl} /> }
            </div>
          </div>

          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <NavLink to='/profile' className="justify-between">
                Profile
                <span className="badge badge-error text-white">New</span>
              </NavLink>
            </li>
            <li><a onClick={handleLogout}>Logout</a></li>
          </ul>
        </div>
      </div>
      )
      }

    </div>

  )
}

export default NavBar;