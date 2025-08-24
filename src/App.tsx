import { Outlet } from "react-router"
import CommonLayout from "./layout/CommonLayout"
import Footer from "./layout/Footer"


function App() {
  return (
    <div>

    <div className="max-w-7xl mx-auto">
      <CommonLayout>
      <Outlet/>
    </CommonLayout>
    </div>
    <Footer/>
    </div>
  )
}

export default App