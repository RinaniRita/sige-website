'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { ArrowRight, MapPin } from "lucide-react"
import { programs } from "@/lib/programs-data"

export function ProgramsCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 5000)

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
          {programs.map((program) => (
            <CarouselItem key={program.slug} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Link href={`/chuong-trinh/${program.slug}`}>
                  <Card className="overflow-hidden border-0 shadow-lg rounded-2xl group relative h-96 cursor-pointer">
                    <Image
                      src={program.heroImage}
                      alt={program.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                      <div className="flex items-center gap-1.5 text-blue-300 text-sm mb-2">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{program.country}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 leading-tight">{program.name}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed line-clamp-2 mb-3">
                        {program.highlights[0]} &bull; {program.highlights[1]}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-300 group-hover:text-blue-200 transition-colors">
                        Xem chi tiết
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Card>
                </Link>
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
