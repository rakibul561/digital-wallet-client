import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton"; // skeleton import
import Logo from "@/assets/icons/Logo";
import img from "@/assets/image/bg.jpg";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

export const HeroSection = () => {
  const { data: user, isLoading } = useUserInfoQuery(undefined); // isLoading নিলাম
  const navigate = useNavigate();

  const handleClick = () => {
    if (user?.data) {
      navigate("/");
      toast.success("you are already create account");
    } else {
      navigate("/register");
    }
  };

  return (
    <section className="relative overflow-hidden py-32">
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
              <Logo />
            </div>

 
            {isLoading ? (
              <div className="flex flex-col items-center gap-4">
                <Skeleton className="h-10 w-[250px] rounded-md" />
                <Skeleton className="h-6 w-[300px] rounded-md" />
                <Skeleton className="h-6 w-[280px] rounded-md" />
                <div className="flex gap-3 mt-4">
                  <Skeleton className="h-10 w-32 rounded-md" />
                  <Skeleton className="h-10 w-32 rounded-md" />
                </div>
              </div>
            ) : (
              <>
                <div>
                  <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl">
                    Your Digital Payment{" "}
                    <span className="text-primary">Solution</span>
                  </h1>
                  <p className="mx-auto max-w-3xl text-muted lg:text-xl">
                    Send money, receive payments, and manage your finances with
                    ease. PayWave makes digital transactions simple, secure, and
                    instant. Mobile recharge, bill payments, online shopping -
                    everything in one place
                  </p>
                </div>
                <div className="mt-6 flex justify-center gap-3">
                  <Button
                    onClick={handleClick}
                    className="shadow-sm transition-shadow hover:shadow"
                  >
                    Get Started
                  </Button>
                  <Button variant="outline" className="group">
                    <Link to="/features"> Learn more </Link>
                    <ExternalLink className="ml-2 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
