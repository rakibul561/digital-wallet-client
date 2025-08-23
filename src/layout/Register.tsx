import Logo from "@/assets/icons/Logo"
import { RegisterForm } from "@/modules/Authantication/RegisterForm"
import registerImg from "@/assets/image/login.jpg"
import { Link } from "react-router"


export default function RegitsetPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">

        <div className="bg-muted relative hidden lg:block">
        <img
          src={registerImg}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover "
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
