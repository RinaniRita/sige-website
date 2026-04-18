'use client'

import * as React from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { DEFAULT_HOME_CONTENT, type ActivityItemContent } from "@/lib/home-content"

const DEFAULT_ACTIVITIES: ActivityItemContent[] = DEFAULT_HOME_CONTENT.activityItems

interface ActivitySliderProps {
  items?: ActivityItemContent[]
}

export function ActivitySlider({ items = DEFAULT_ACTIVITIES }: ActivitySliderProps) {
  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [api])

  return (
    <div className="w-full relative px-12">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {items.map((activity, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="overflow-hidden border-0 shadow-lg rounded-2xl group relative h-80">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                     <h3 className="text-xl font-bold mb-1.5 leading-tight">{activity.title}</h3>
                     <p className="text-slate-200 text-sm leading-relaxed">{activity.description}</p>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-12 lg:-left-16" />
        <CarouselNext className="absolute -right-12 lg:-right-16" />
      </Carousel>
    </div>
  )
}
