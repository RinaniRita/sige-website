'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { MapPin, Phone, Mail, Globe } from "lucide-react"
import { DEFAULT_HOME_CONTENT, type FooterContent } from "@/lib/home-content"

interface SiteFooterProps {
  content?: FooterContent
}

export function SiteFooter({ content = DEFAULT_HOME_CONTENT.footer }: SiteFooterProps) {
  const pathname = usePathname()
  const isHome = pathname === "/"

  function href(anchor: string) {
    return isHome ? anchor : `/${anchor}`
  }

  const hotlineHref = `tel:${content.hotlineNumber.replace(/\s+/g, "")}`

  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <Image
              src="/logo-sige-white-transparent.png"
              alt="SIGE Logo"
              width={140}
              height={70}
              className="h-14 w-auto mb-6"
            />
            <p className="text-sm leading-relaxed text-slate-400">
              {content.description}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">{content.servicesTitle}</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {content.services.map((service) => (
                <li key={service}><Link href="#" className="hover:text-blue-400 transition-colors">{service}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">{content.linksTitle}</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href={href("#gioi-thieu")} className="hover:text-blue-400 transition-colors">{content.links.about}</Link></li>
              <li><Link href={href("#chuong-trinh")} className="hover:text-blue-400 transition-colors">{content.links.programs}</Link></li>
              <li><Link href={href("#tin-tuc")} className="hover:text-blue-400 transition-colors">{content.links.news}</Link></li>
              <li><Link href={href("#lien-he")} className="hover:text-blue-400 transition-colors">{content.links.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">{content.contactTitle}</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-blue-500" />
                <span className="leading-relaxed">{content.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-blue-500" />
                <a href={hotlineHref} className="hover:text-blue-400 transition-colors">{content.hotlineLabel} {content.hotlineNumber}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-blue-500" />
                <span>{content.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-5 w-5 flex-shrink-0 text-blue-500" />
                <span>{content.website}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500 flex flex-col items-center justify-between md:flex-row gap-4">
          <p>{content.copyright}</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">{content.privacyText}</Link>
            <Link href="#" className="hover:text-white transition-colors">{content.termsText}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
