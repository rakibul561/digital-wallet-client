
import { Button } from "@/components/ui/button";
import Logo from "@/assets/icons/Logo";
import img from "@/assets/image/bg1.jpg"
import {  useNavigate } from "react-router";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";

export const Banner = () => {
    const {data:user} = useUserInfoQuery(undefined);
   const navigate = useNavigate();
  
   const handleClick = () =>{
       if(user?.data){
        navigate("/")
        toast.success("you are already create account")
       }
       else{
        navigate("/register")
       }
   }
  
  return (
    <section className="relative overflow-hidden mt-20 py-32">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <img
          alt="background"
          src={img}
          className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90"
        />
      </div>
      <div className="relative z-10 container">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="rounded-xl bg-background/30 p-4 shadow-sm backdrop-blur-sm">
              <Logo/>
            </div>
            <div>
              <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl">
             Powerful Features to Simplify Your Digital Wallet Experience {" "}
                <span className="text-primary">Wallet Experience </span>
              </h1>
              <p className="mx-auto max-w-3xl text-white lg:text-xl">
              From secure transactions to real-time tracking, we’ve got you covered.

              </p>
            </div>
            <div className="mt-6 flex justify-center gap-3">
              <Button onClick={handleClick} className="shadow-sm transition-shadow hover:shadow">
                 
                Get Started Today
               
              </Button>
              
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};


