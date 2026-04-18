'use client'

import Image from 'next/image'

const partnerLogos = [
  { src: '/partners/1.png', alt: 'Trường đối tác 1' },
  { src: '/partners/2.png', alt: 'Trường đối tác 2' },
  { src: '/partners/3.png', alt: 'Trường đối tác 3' },
  { src: '/partners/4.png', alt: 'Trường đối tác 4' },
  { src: '/partners/5.png', alt: 'Trường đối tác 5' },
  { src: '/partners/6.png', alt: 'Trường đối tác 6' },
  { src: '/partners/7.png', alt: 'Trường đối tác 7' },
  { src: '/partners/8.png', alt: 'Trường đối tác 8' },
  { src: '/partners/9.png', alt: 'Trường đối tác 9' },
  { src: '/partners/10.png', alt: 'Trường đối tác 10' },
  { src: '/partners/11.png', alt: 'Trường đối tác 11' },
  { src: '/partners/12.png', alt: 'Trường đối tác 12' },
  { src: '/partners/13.png', alt: 'Trường đối tác 13' },
  { src: '/partners/14.png', alt: 'Trường đối tác 14' },
]

function LogoRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex shrink-0 items-center gap-6 md:gap-8 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {[...partnerLogos, ...partnerLogos].map((logo, i) => (
          <div
            key={i}
            className="shrink-0 w-44 h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 hover:scale-105 transition-all duration-300 flex items-center justify-center p-1.5"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={200}
              sizes="(max-width: 768px) 160px, (max-width: 1024px) 192px, 208px"
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function PartnerLogosMarquee() {
  return (
    <div className="space-y-6 md:space-y-8">
      <LogoRow />
      <LogoRow reverse />
    </div>
  )
}
