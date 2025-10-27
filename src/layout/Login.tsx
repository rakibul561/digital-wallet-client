"use client";

import Logo from "@/assets/icons/Logo";
import { LoginForm } from "@/modules/Authantication/LoginForm";
import { Link } from "react-router";
import Lottie from "lottie-react";
import bgAnimation from "../../public/login.json"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 bg-background">
      
      {/* ===== Left Side: Login Form ===== */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">
              Welcome Back
            </h1>
            <p className="text-muted-foreground text-center lg:text-left mb-6">
              Log in to access your secure digital wallet account.
            </p>
            <LoginForm />
          </div>
        </div>
      </div>

      {/* ===== Right Side: Lottie Animation ===== */}
      <div className="relative hidden lg:flex items-center justify-center bg-muted">
        <Lottie
          animationData={bgAnimation}
          loop={true}
          autoplay={true}
          className="w-[350px] md:w-[450px] lg:w-[500px]"
        />
      </div>
      
    </div>
  );
}
