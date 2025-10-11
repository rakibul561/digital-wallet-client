"use client";

import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router'
import Lottie from "lottie-react"
import bgAnimation from "../../public/lotto.json"

export default function HeroSection() {
    const features = [
        "Instant Send Money",
        "Cash Out",
        "Bill Payment",
        "Mobile Recharge",
        "QR Pay",
        "Balance Check",
        "Transaction History",
        "Secure Login",
    ]

    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section className="relative py-20 lg:py-32 bg-background">
                    <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-12 gap-10">
                        
                        {/* ===== Left Side: Text Content ===== */}
                        <div className="flex-1 text-center lg:text-left">
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                                Manage Your <br /> Money Smartly
                            </h1>
                            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
                                A modern digital wallet for seamless payments, secure transactions, and real-time balance updates.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                                <Button
                                    asChild
                                    size="lg"
                                    className="h-12 rounded-full px-6 text-base bg-orange-500 hover:bg-orange-600">
                                    <Link to="#link">
                                        <span>Get Started</span>
                                        <ChevronRight className="ml-1" />
                                    </Link>
                                </Button>

                                <Button
                                    asChild
                                    size="lg"
                                    variant="ghost"
                                    className="h-12 rounded-full px-6 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5">
                                    <Link to="#link">
                                        <span>Learn More</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* ===== Right Side: Lottie Animation ===== */}
                        <div className="flex-1 flex justify-center lg:justify-end">
                            <Lottie
                                animationData={bgAnimation}
                                loop={true}
                                autoplay={true}
                                className="w-[350px] md:w-[450px] lg:w-[500px]"
                            />
                        </div>
                    </div>
                </section>

                {/* ===== Feature Marquee Section ===== */}
                <section className="bg-background pb-2">
                    <div className="group relative m-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm">Our Key Features</p>
                            </div>

                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider speedOnHover={20} speed={40} gap={80}>
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-center justify-center">
                                            <span className="text-lg font-medium text-[#F54A00] hover:text-orange-500 transition-all duration-300">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </InfiniteSlider>

                                {/* Fade / Blur effects */}
                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
