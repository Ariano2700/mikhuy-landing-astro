import { forwardRef, useRef } from "react"

import { AnimatedBeam } from "./AnimatedBeam";

import { cn } from "../../lib/utils";
import LucideLayoutDashboard from "../../assets/icons/lucide/LucideLayoutDashboard";
import FaStore from "../../assets/icons/font-awesome-solid/FaStore";
import MaterialSymbolsProductionQuantityLimitsOutlineRounded from "../../assets/icons/material-symbols/MaterialSymbolsProductionQuantityLimitsOutlineRounded";
import RadixIconsBorderSplit from "../../assets/icons/radix-icons/RadixIconsBorderSplit";
import BxsCategory from "../../assets/icons/boxIcons-solid/BxsCategory";
import MaterialSymbolsOutlinePayments from "../../assets/icons/material-symbols/MaterialSymbolsOutlinePayments";
import GameIconsArtificialIntelligence from "../../assets/icons/games-icons/GameIconsArtificialIntelligence";

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className,
        )}
      >
        {children}
      </div>
    )
  },
)

Circle.displayName = "Circle"

export default function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)

  return (
    <div
      className="relative flex h-[350px]  w-full items-center justify-center overflow-hidden p-10 "
      ref={containerRef}
    >
      <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between text-3xl">
          <Circle ref={div1Ref}>
            <Icons.product />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.category />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between text-3xl">
          <Circle ref={div2Ref}>
            <Icons.dashboard />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <Icons.store />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.payments />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between text-3xl">
          <Circle ref={div3Ref}>
            <Icons.whatsapp />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.ia />
          </Circle>
        </div>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} curvature={-75} endYOffset={-10} />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} curvature={75} endYOffset={10} />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} reverse />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  )
}

const Icons = {
  dashboard: () => (
    <LucideLayoutDashboard/>
  ),
  store: () => (
    <FaStore/>
  ),
    product: () => (
    <MaterialSymbolsProductionQuantityLimitsOutlineRounded/>
  ),
  whatsapp: () => (
    <RadixIconsBorderSplit/>
  ),
  category: () => (
   <BxsCategory/>
  ),
  payments: () => (
    <MaterialSymbolsOutlinePayments/>
  ),
  ia: () => (
    <GameIconsArtificialIntelligence/>
  ),
}