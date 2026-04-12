import { cn } from "@/lib/utils";
import * as React from "react";

const gradientVars = `
  [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
  [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
  [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
`;

/** Local CSS vars (no global Tailwind color flatten on :root). */
const auroraLayerStyle = {
  "--white": "#ffffff",
  "--black": "#000000",
  "--transparent": "transparent",
  "--blue-500": "#3b82f6",
  "--indigo-300": "#a5b4fc",
  "--blue-300": "#93c5fd",
  "--violet-200": "#ddd6fe",
  "--blue-400": "#60a5fa",
} as React.CSSProperties;

const auroraShellLight = cn(
  gradientVars,
  `[background-image:var(--white-gradient),var(--aurora)]
   dark:[background-image:var(--dark-gradient),var(--aurora)]
   [background-size:300%,_200%]
   [background-position:50%_50%,50%_50%]
   filter blur-[10px] invert dark:invert-0
   after:content-[''] after:absolute after:inset-0
   after:[background-image:var(--white-gradient),var(--aurora)]
   after:dark:[background-image:var(--dark-gradient),var(--aurora)]
   after:[background-size:200%,_100%]
   after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
   pointer-events-none absolute -inset-[10px] opacity-50 will-change-transform`
);

const auroraShellDark = cn(
  gradientVars,
  `[background-image:var(--dark-gradient),var(--aurora)]
   [background-size:300%,_200%]
   [background-position:50%_50%,50%_50%]
   filter blur-[10px] invert-0
   after:content-[''] after:absolute after:inset-0
   after:[background-image:var(--dark-gradient),var(--aurora)]
   after:[background-size:200%,_100%]
   after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
   pointer-events-none absolute -inset-[10px] opacity-50 will-change-transform`
);

export interface AuroraBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  showRadialGradient?: boolean;
  /** `dark` = always-on dark aurora (p. ej. hero Proceso). `light` = 21st + `prefers-color-scheme`. */
  appearance?: "light" | "dark";
}

export function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
  appearance = "light",
  ...props
}: AuroraBackgroundProps) {
  const isDark = appearance === "dark";

  const auroraLayerClass = cn(
    isDark ? auroraShellDark : auroraShellLight,
    showRadialGradient &&
      `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
  );

  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full flex-col overflow-hidden transition-colors",
        isDark
          ? "bg-zinc-900 text-slate-50"
          : "bg-zinc-50 text-slate-950 dark:bg-zinc-900 dark:text-slate-50",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className={auroraLayerClass} style={auroraLayerStyle} />
      </div>
      <div className="relative z-10 flex w-full flex-1 flex-col">{children}</div>
    </div>
  );
}
