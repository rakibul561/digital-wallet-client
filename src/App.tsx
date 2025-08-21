
import { Outlet } from "react-router"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"

function App() {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
       <Navbar/>
  
           <Outlet/>

   
    </div>
    <Footer/>
    </div>

  )
}

export default App