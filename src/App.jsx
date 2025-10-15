import NavBar from './components/NavBar';
import { Outlet } from 'react-router';


function App() {

  return(
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  )
}

export default App;