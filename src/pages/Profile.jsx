import { useContext } from "react";
import {AuthContext} from '../context/AuthContext';
import avatarUrl from '../assets/avatar.jpg';

function Profile() {

    const {user} = useContext(AuthContext);

    return(
            <section className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-5">

              <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">

                <div className="relative h-40 bg-gradient-to-r from-indigo-500 to-purple-500">
                  <img
                    src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=80"
                    alt="Banner"
                    className="absolute inset-0 w-full h-full object-cover opacity-60" />
                </div>


                <div className="relative -mt-16 flex justify-center">
                  {
                    user.photoURL ?
                    <img src={user.photoURL} alt="User avatar" className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover" />
                    :
                    <img src={avatarUrl} alt="Default avatar" className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover" />
                  }
                </div>

                  {console.log(user.photoURL)}
              
                <div className="text-center px-6 py-4">
                  <h2 className="text-2xl font-semibold text-gray-800">{user.displayName}</h2>
                  <p className="text-gray-500 text-sm mt-1">{user.providerData[0].email}</p>        
                  <p className="text-gray-500 text-sm mt-1">{`Verified: ${user.emailVerified}`}</p>        
                  <p className="text-gray-500 text-sm mt-1">{`Phone: ${user.phoneNumber}`}</p>        
                </div>
            </div>
          </section>
    )
}

export default Profile;
