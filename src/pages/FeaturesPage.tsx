
import { FaMoneyBillWave, FaWallet, FaShieldAlt, FaMobileAlt, FaBolt, FaHistory } from "react-icons/fa";
import { Banner } from "./Banner";
import { Button } from "@/components/ui/button";
import {  useNavigate } from "react-router";
import { toast } from "sonner";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

const features = [
  {
    icon: <FaMoneyBillWave className="text-4xl text-indigo-600 mb-4" />,
    title: "Send Money",
    description: "Transfer funds instantly to friends and family using phone/email.",
  },
  {
    icon: <FaWallet className="text-4xl text-indigo-600 mb-4" />,
    title: "Deposit / Withdraw",
    description: "Add or withdraw money via agents seamlessly.",
  },
  {
    icon: <FaHistory className="text-4xl text-indigo-600 mb-4" />,
    title: "Transaction History",
    description: "Track all transactions with detailed history and filters.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-indigo-600 mb-4" />,
    title: "Secure & Private",
    description: "Advanced encryption ensures your money is safe.",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-indigo-600 mb-4" />,
    title: "Mobile Friendly",
    description: "Access your wallet anytime, anywhere.",
  },
  {
    icon: <FaBolt className="text-4xl text-indigo-600 mb-4" />,
    title: "Fast Payments",
    description: "Enjoy instant payments without delays.",
  },
];

const FeaturesPage = () => {

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
    <div className="min-h-screen ">
      
     <Banner/>

      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className=" p-8 rounded-lg shadow hover:shadow-lg border transition text-center"
            >
              {feature.icon}
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-4 00">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 ">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Experience Seamless Digital Payments?
        </h2>
        <Button onClick={handleClick} className="shadow-sm transition-shadow hover:shadow">
               
                Get Started Today
          
              </Button>
              
      </section>
    </div>
  );
};

export default FeaturesPage;
