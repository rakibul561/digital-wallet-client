import { Button } from "@/components/ui/button";
import Logo from "@/assets/icons/Logo";
import img from "@/assets/image/about.jpg";
import { useNavigate } from "react-router";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";

export const Hero = () => {
  const { data: user } = useUserInfoQuery(undefined);
  const navigate = useNavigate();

  const handleClick = () => {
    if (user?.data) {
      navigate("/");
      toast.success("You already have an account");
    } else {
      navigate("/register");
    }
  };

  return (
    <section className="relative overflow-hidden py-32">
    
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center">
        <img
          alt="background"
          src={img}
          className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] h-full w-full opacity-90"
        />
       
        <div className="absolute inset-0 bg-white/40 dark:bg-black/40" />
      </div>

      
      <div className="relative z-10 container">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="rounded-xl bg-background/40 p-4 shadow-sm backdrop-blur-sm">
              <Logo />
            </div>
            <div>
              <h1 className="mb-6 text-2xl font-bold tracking-tight lg:text-5xl text-zinc-900 dark:text-zinc-100">
                “Your Trusted Digital Wallet{" "}
                <span className="text-primary">Partner”</span>
              </h1>
              <p className="mx-auto max-w-3xl lg:text-xl text-zinc-700 dark:text-gray-300">
                From sending money to managing transactions, we make digital
                finance simple and reliable for everyone.
              </p>
            </div>
            <div className="mt-6 flex justify-center gap-3">
              <Button
                onClick={handleClick}
                className="shadow-sm transition-shadow hover:shadow bg-primary text-white hover:bg-primary/90"
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
