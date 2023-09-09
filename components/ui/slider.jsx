"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center group", className)}
    {...props}>
    <SliderPrimitive.Track
      className="relative h-1 w-full grow overflow-hidden rounded-full bg-sXlGray">
      <SliderPrimitive.Range className="absolute h-full group-hover:bg-sGreen bg-white" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className="group-hover:block hidden h-3 w-3 rounded-full bg-white transition-colors focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
