'use client'

import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Quote } from "lucide-react"
import { DEFAULT_HOME_CONTENT, type TestimonialItemContent } from "@/lib/home-content"

const DEFAULT_TESTIMONIALS: TestimonialItemContent[] = DEFAULT_HOME_CONTENT.testimonials

interface TestimonialSliderProps {
  items?: TestimonialItemContent[]
}

export function TestimonialSlider({ items = DEFAULT_TESTIMONIALS }: TestimonialSliderProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    api.on("select", onSelect)

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 6000)

    return () => {
      clearInterval(interval)
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <div className="relative max-w-4xl mx-auto">
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {items.map((t, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col items-center text-center px-4 md:px-16 py-8">
                <div className="mb-8 relative">
                  {t.image ? (
                    <div className="w-24 h-24 relative rounded-full overflow-hidden ring-4 ring-white/20 shadow-2xl">
                      <Image src={t.image} alt={t.name} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 ring-4 ring-white/20 shadow-2xl flex items-center justify-center text-3xl font-bold text-white">
                      {t.initials}
                    </div>
                  )}
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center shadow-lg">
                    <Quote className="w-5 h-5 text-amber-900" />
                  </div>
                </div>
                <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed font-light italic max-w-2xl mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-bold text-lg text-white tracking-wide">{t.name}</p>
                  <p className="text-blue-200 text-sm mt-1">{t.program}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-4 md:-left-12 bg-white/10 border-white/20 text-white hover:bg-white/20" />
        <CarouselNext className="absolute -right-4 md:-right-12 bg-white/10 border-white/20 text-white hover:bg-white/20" />
      </Carousel>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === i ? "w-8 bg-amber-400" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
