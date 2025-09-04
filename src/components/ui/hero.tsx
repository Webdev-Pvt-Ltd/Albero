'use client'

import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeroProps {
    eyebrow?: string
    title: string
    subtitle: string
    ctaLabel?: string
    ctaHref?: string
}

export function Hero({ eyebrow = 'Innovate Without Limits', title, subtitle, ctaLabel = 'Explore Now', ctaHref = '#' }: HeroProps) {
    return (
        <div className="bg-black/80">
            <section
                id="hero"
                className="relative mx-auto w-full pt-40 px-6 text-center md:px-8 
      min-h-[calc(100vh-40px)] overflow-hidden 
     bg-[linear-gradient(to_bottom,#000,#0000_30%,#898e8e_78%,#000000_99%_50%)] 
      rounded-b-xl">
                {/* Grid BG */}
                <div
                    className="absolute -z-10 inset-0 opacity-80 h-[600px] w-full 
                    bg-black
        bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
        bg-[size:6rem_5rem] 
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
                />

                {/* Radial Accent */}
                <div
                    className="absolute left-1/2 top-[calc(100%-90px)] lg:top-[calc(100%-150px)] 
        h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-[140%] 
        -translate-x-1/2 rounded-[100%] border-[#B48CDE] bg-black 
        bg-[radial-gradient(closest-side,#000_82%,#ffffff)] 
        animate-fade-up"
                />

                {/* Eyebrow */}
                {eyebrow && (
                    <a
                        href="#"
                        className="group">
                        <span
                            className="text-sm text-gray-400 font-geist mx-auto px-5 py-2 
            bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  
            border-[2px] border-white/5 
            rounded-3xl w-fit tracking-tight uppercase flex items-center justify-center">
                            {eyebrow}
                            <ChevronRight className="inline w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                    </a>
                )}

                {/* Title */}
                <h1
                    className="animate-fade-in -translate-y-4 text-balance 
        bg-gradient-to-br from-30% 
        bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter 
        text-transparent sm:text-6xl md:text-7xl lg:text-8xl 
        from-white to-white/40">
                    {title}
                </h1>

                {/* Subtitle */}
                <p
                    className="animate-fade-in mb-12 -translate-y-4 text-balance 
        text-lg tracking-tight text-gray-400 
        md:text-xl">
                    {subtitle}
                </p>

                {/* CTA */}
                {ctaLabel && (
                    <div className="flex justify-center">
                        <Button
                            asChild
                            className="mt-[-20px] w-fit md:w-52 z-20 font-geist tracking-tighter text-center text-lg">
                            <a href={ctaHref}>{ctaLabel}</a>
                        </Button>
                    </div>
                )}

                {/* Bottom Fade */}
                <div
                    className="animate-fade-up relative mt-32 opacity-0 [perspective:2000px] 
        after:absolute after:inset-0 after:z-50 
        after:[background:linear-gradient(to_top,hsl(var(--background))_10%,transparent)]"
                />
            </section>
        </div>
    )
}
