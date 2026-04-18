"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { programs } from "@/lib/programs-data"

export function PartnerSchools() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-5">
      {programs.map((program) => (
        <Link key={program.slug} href={`/chuong-trinh/${program.slug}`}>
          <div className="cursor-pointer group flex flex-col items-center justify-start p-4 bg-white rounded-2xl text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden hover:-translate-y-1">
            <div className="relative w-full h-32 mb-4 overflow-hidden rounded-xl bg-slate-50">
              <Image
                src={program.thumbnailImage}
                alt={program.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2">
                <span className="text-white text-xs font-medium bg-blue-600/80 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1">
                  <ArrowRight className="w-3 h-3" />
                  Xem chi tiết
                </span>
              </div>
            </div>
            <h3 className="font-semibold text-slate-800 text-sm leading-snug line-clamp-2">{program.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}
