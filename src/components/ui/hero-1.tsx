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
        "relative mx-auto w-full pt-32 md:pt-40 px-6 text-center md:px-8",
        "min-h-screen flex flex-col items-center justify-center overflow-hidden",
        "bg-[linear-gradient(to_bottom,#000_0%,#1a1a1a_30%,#4a4a4a_60%,#8a8a8a_80%,#ffffff_100%)]",
        className
      )}
    >
      {/* Grid BG */}
      <div
        className="absolute inset-0 opacity-40 w-full h-full
        bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]
        bg-[size:6rem_5rem] 
        [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,#000_60%,transparent_100%)]"
      />

      {/* Radial Accent at bottom */}
      <div
        className="absolute left-1/2 bottom-0 
        h-[400px] w-[800px] md:h-[600px] md:w-[1200px] lg:h-[800px] lg:w-[1600px] 
        -translate-x-1/2 translate-y-1/2 rounded-[50%]
        bg-[radial-gradient(closest-side,#ffffff_0%,#e8e8e8_20%,#8a8a8a_50%,#2a2a2a_75%,#000_100%)]"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Eyebrow */}
        {eyebrow && (
          <div className="group mb-8 inline-block">
            <span
              className="text-xs md:text-sm text-gray-400 font-medium mx-auto px-4 md:px-5 py-2 md:py-2.5
              bg-gradient-to-tr from-white/5 via-white/10 to-transparent  
              border border-white/10 hover:border-white/20
              rounded-full tracking-wider uppercase inline-flex items-center justify-center
              transition-all duration-300"
            >
              {eyebrow}
              <ChevronRight className="inline w-3 h-3 md:w-4 md:h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        )}

        {/* Title */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
          font-bold leading-[1.1] tracking-tight
          text-white font-gilroy
          mb-6 md:mb-8 px-4"
          style={{
            textShadow: '0 2px 20px rgba(0,0,0,0.3)'
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl
          leading-relaxed tracking-tight 
          text-gray-400 
          mb-10 md:mb-12 max-w-4xl mx-auto px-4"
        >
          {subtitle}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4">
          {ctaLabel && (
            <Button
              asChild={!onCtaClick}
              onClick={onCtaClick}
              size="lg"
              className="w-full sm:w-auto min-w-[200px] h-12 md:h-14 text-base md:text-lg
              bg-white hover:bg-gray-100 text-black font-semibold
              rounded-full shadow-lg hover:shadow-xl
              transition-all duration-300 hover:scale-105"
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
              size="lg"
              className="w-full sm:w-auto min-w-[200px] h-12 md:h-14 text-base md:text-lg
              border-2 border-white/30 bg-transparent text-white font-semibold
              hover:bg-white/10 hover:border-white/50
              rounded-full
              transition-all duration-300 hover:scale-105"
            >
              {onSecondaryCtaClick ? (
                <span>{secondaryCtaLabel}</span>
              ) : (
                <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
              )}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
