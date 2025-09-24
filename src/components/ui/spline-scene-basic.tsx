'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] relative overflow-hidden rounded-2xl border border-white/10">
      {/* Fondo dinámico con gradiente y blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#b5ff5a]/20 via-black to-black">
        <div className="absolute w-[500px] h-[500px] bg-[#b5ff5a]/20 rounded-full blur-3xl -top-40 left-20 animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] bg-white/10 rounded-full blur-2xl bottom-0 right-20"></div>
      </div>
      {/* Spotlight de luz */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="flex h-full relative z-10">
        {/* Contenido derecho con el robot 3D */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
