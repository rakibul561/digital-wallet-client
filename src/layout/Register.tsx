import Logo from "@/assets/icons/Logo"
import { RegisterForm } from "@/modules/Authantication/RegisterForm"
import { Link } from "react-router"
import bgAnimation from "../../public/login.json"
import Lottie from "lottie-react"


export default function RegitsetPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">

        <div className="relative hidden lg:flex items-center justify-center bg-muted">
        <Lottie
          animationData={bgAnimation}
          loop={true}
          autoplay={true}
          className="w-[350px] md:w-[450px] lg:w-[500px]"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to='/'> 
          <Logo/>
          </Link>
        </div>


        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <RegisterForm />
          </div>
        </div>


        
      </div>
    
    </div>
  )
}
