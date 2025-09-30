"use client"

import React from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeroProps {
  eyebrow?: string
  title: string | React.ReactNode
  subtitle: string
  ctaLabel?: string
  ctaHref?: string
  onCtaClick?: () => void
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  onSecondaryCtaClick?: () => void
  className?: string
}

export function Hero({
  eyebrow = "Innovate Without Limits",
  title,
  subtitle,
  ctaLabel = "Explore Now",
  ctaHref = "#",
  onCtaClick,
  secondaryCtaLabel,
  secondaryCtaHref,
  onSecondaryCtaClick,
  className,
}: HeroProps) {
  return (
    <section
      id="hero"
      className={cn(
        "relative mx-auto w-full pt-40 px-6 text-center md:px-8",
        "min-h-[calc(100vh-40px)] overflow-hidden",
        "bg-[linear-gradient(to_bottom,#000,#0000_30%,#898e8e_78%,#ffffff_99%_50%)]",
        "rounded-b-xl",
        className
      )}
    >
      {/* Grid BG */}
      <div
        className="absolute -z-10 inset-0 opacity-80 h-[600px] w-full 
        bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]
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
        <div className="group">
          <span
            className="text-sm text-gray-400 font-geist mx-auto px-5 py-2 
            bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  
            border-[2px] border-white/5 
            rounded-3xl w-fit tracking-tight uppercase flex items-center justify-center"
          >
            {eyebrow}
            <ChevronRight className="inline w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      )}

      {/* Title */}
      <h1
        className="animate-fade-in -translate-y-4 text-balance 
        bg-gradient-to-br from-white from-30% to-white/40 
        bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter 
        text-transparent opacity-0 sm:text-6xl md:text-7xl lg:text-8xl font-gilroy"
      >
        {title}
      </h1>

      {/* Subtitle */}
      <p
        className="animate-fade-in mb-12 -translate-y-4 text-balance 
        text-lg tracking-tight text-gray-400 
        opacity-0 md:text-xl"
      >
        {subtitle}
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
        {ctaLabel && (
          <Button
            asChild={!onCtaClick}
            onClick={onCtaClick}
            className="mt-[-20px] w-fit md:w-52 z-20 font-geist tracking-tighter text-center text-lg"
          >
            {onCtaClick ? (
              <span>{ctaLabel}</span>
            ) : (
              <a href={ctaHref}>{ctaLabel}</a>
            )}
          </Button>
        )}
        
        {secondaryCtaLabel && (
          <Button
            asChild={!onSecondaryCtaClick}
            onClick={onSecondaryCtaClick}
            variant="outline"
            className="mt-[-20px] w-fit md:w-52 z-20 font-geist tracking-tighter text-center text-lg border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white"
          >
            {onSecondaryCtaClick ? (
              <span>{secondaryCtaLabel}</span>
            ) : (
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            )}
          </Button>
        )}
      </div>

      {/* Bottom Fade */}
      <div
        className="animate-fade-up relative mt-32 opacity-0 [perspective:2000px] 
        after:absolute after:inset-0 after:z-50 
        after:bg-[linear-gradient(to_top,#1B2033_10%,transparent)]"
      />
    </section>
  )
}
