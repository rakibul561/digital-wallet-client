import { Outlet } from "react-router"
import CommonLayout from "./layout/CommonLayout"
import Footer from "./layout/Footer"

import config from "@/config";

console.log("Config baseUrl:", config.baseUrl);
console.log("VITE_BASE_URL:", import.meta.env.VITE_BASE_URL);
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