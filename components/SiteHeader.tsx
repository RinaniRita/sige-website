'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { countries } from "@/lib/programs-data"
import { DEFAULT_HOME_CONTENT, type HeaderContent } from "@/lib/home-content"
import { Phone, Facebook, Menu, X, MessageCircle } from "lucide-react"

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
    <path d="M448 209.91a210.06 210.06 0 0 1 -122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h.05A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/>
  </svg>
)

const ZaloIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor">
    <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-2.5 28.5h-2.8l6.8-10.2H20v-2.8h8.5v2.2l-7 10.8zm10.5-3.5c0 2.5-2 3.5-4 3.5s-4-1-4-3.5v-4c0-2.5 2-3.5 4-3.5s4 1 4 3.5v4zm-4-5.5c-1 0-1.5.5-1.5 1.5v4c0 1 .5 1.5 1.5 1.5s1.5-.5 1.5-1.5v-4c0-1-.5-1.5-1.5-1.5z"/>
  </svg>
)

interface SiteHeaderProps {
  content?: HeaderContent
}

export function SiteHeader({ content = DEFAULT_HOME_CONTENT.header }: SiteHeaderProps) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  function href(anchor: string) {
    return isHome ? anchor : `/${anchor}`
  }

  const closeMobile = () => setMobileMenuOpen(false)
  const hotlineHref = `tel:${content.topBar.hotlineNumber.replace(/\s+/g, "")}`

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      <Link
        href="/gioi-thieu"
        onClick={mobile ? closeMobile : undefined}
        className={mobile
          ? "text-slate-800 hover:text-blue-600 font-semibold text-lg py-2 border-b border-slate-100 transition-colors"
          : "text-slate-600 hover:text-blue-600 font-medium transition-colors text-[15px] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
        }
      >
        {content.nav.about}
      </Link>
      {!mobile && (
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-slate-600 hover:text-blue-600 font-medium text-[15px] bg-transparent hover:bg-transparent data-[state=open]:bg-transparent focus:bg-transparent h-auto p-0 md:px-0 px-0">
                {content.nav.programs}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[300px] p-2">
                  {countries.map((country) => (
                    <li key={country.slug}>
                      <Link href={`/chuong-trinh/${country.slug}`}>
                        <NavigationMenuLink className="flex items-start gap-3 rounded-lg p-3 hover:bg-blue-50 transition-colors">
                          <span className="text-xl leading-none mt-0.5">{country.flag}</span>
                          <div>
                            <div className="text-sm font-semibold text-slate-900">{country.label}</div>
                            <p className="text-xs text-slate-500 mt-0.5">{country.description}</p>
                          </div>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}
      {mobile && (
        <div className="py-2 border-b border-slate-100">
          <p className="text-slate-800 font-semibold text-lg mb-2">{content.nav.programs}</p>
          <div className="pl-3 space-y-1">
            {countries.map((country) => (
              <Link
                key={country.slug}
                href={`/chuong-trinh/${country.slug}`}
                onClick={closeMobile}
                className="flex items-center gap-2 py-1.5 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <span className="text-base">{country.flag}</span>
                <span className="text-sm font-medium">{country.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
      <a
        href={content.links.activitiesUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={mobile ? closeMobile : undefined}
        className={mobile
          ? "text-slate-800 hover:text-blue-600 font-semibold text-lg py-2 border-b border-slate-100 transition-colors"
          : "text-slate-600 hover:text-blue-600 font-medium transition-colors text-[15px] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
        }
      >
        {content.nav.activities}
      </a>
      <a
        href={content.links.newsUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={mobile ? closeMobile : undefined}
        className={mobile
          ? "text-slate-800 hover:text-blue-600 font-semibold text-lg py-2 border-b border-slate-100 transition-colors"
          : "text-slate-600 hover:text-blue-600 font-medium transition-colors text-[15px] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
        }
      >
        {content.nav.news}
      </a>
      <Link
        href={href("#lien-he")}
        onClick={mobile ? closeMobile : undefined}
        className={mobile
          ? "text-slate-800 hover:text-blue-600 font-semibold text-lg py-2 transition-colors"
          : "text-slate-600 hover:text-blue-600 font-medium transition-colors text-[15px] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
        }
      >
        {content.nav.contact}
      </Link>
    </>
  )

  return (
    <div className="sticky top-0 z-50 w-full flex flex-col">
      {/* Top Info Bar — refined with better spacing and hover effects */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Left: Hotline with pulse indicator */}
          <a
            href={hotlineHref}
            className="flex items-center gap-2.5 hover:text-amber-300 transition-colors font-semibold group"
          >
            <span className="relative flex items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400/40 animate-ping"></span>
              <Phone className="relative w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
            </span>
            <span className="hidden sm:inline">{content.topBar.hotlineLabel}</span>
            <span className="font-bold tracking-wide">{content.topBar.hotlineNumber}</span>
          </a>

          {/* Right: Social icons with labels */}
          <div className="flex items-center gap-1">
            <a
              href={content.topBar.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full hover:bg-white/10 transition-all"
              title={content.topBar.tiktokLabel}
            >
              <TikTokIcon className="w-3.5 h-3.5" />
              <span className="text-xs hidden md:inline">{content.topBar.tiktokLabel}</span>
            </a>
            <a
              href={content.topBar.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full hover:bg-white/10 transition-all"
              title={content.topBar.facebookLabel}
            >
              <Facebook className="w-3.5 h-3.5" />
              <span className="text-xs hidden md:inline">{content.topBar.facebookLabel}</span>
            </a>
            <a
              href={content.topBar.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full hover:bg-white/10 transition-all"
              title={content.topBar.zaloLabel}
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="text-xs hidden md:inline">{content.topBar.zaloLabel}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo — larger with refined subtitle */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <Image
                src="/logo-sige-blue-transparent.png"
                alt="SIGE Logo"
                width={240}
                height={120}
                className="h-14 sm:h-16 md:h-20 lg:h-22 w-auto group-hover:scale-[1.03] transition-transform duration-300"
                priority
              />
              <div className="hidden sm:flex flex-col">
                <span className="text-[10px] md:text-[11px] lg:text-xs font-bold text-blue-900 tracking-[0.08em] uppercase leading-tight">
                  Viện Khoa học
                </span>
                <span className="text-[10px] md:text-[11px] lg:text-xs font-bold text-blue-900 tracking-[0.08em] uppercase leading-tight">
                  và Giáo dục Toàn cầu
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">
              <NavLinks />
              <Button asChild className="bg-blue-600 hover:bg-blue-500 rounded-full px-7 py-2.5 shadow-md shadow-blue-200/50 transition-all hover:shadow-lg hover:shadow-blue-300/60 hover:scale-[1.02] font-semibold">
                <Link href={href("#lien-he")}>{content.ctaText}</Link>
              </Button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl hover:bg-slate-100 transition-colors text-slate-700"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu — full overlay */}
        <div
          className={`lg:hidden fixed inset-x-0 bg-white border-t border-slate-100 shadow-2xl transition-all duration-300 ease-out overflow-y-auto ${
            mobileMenuOpen
              ? 'top-[calc(var(--header-offset,7.5rem))] opacity-100 visible'
              : 'top-[calc(var(--header-offset,7.5rem))] opacity-0 invisible -translate-y-4'
          }`}
          style={{
            '--header-offset': 'calc(5rem + 2rem + 4px)',
            maxHeight: 'calc(100dvh - 7.5rem)',
          } as React.CSSProperties}
        >
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-1">
            <NavLinks mobile />
          </nav>

          {/* Mobile CTA + contact info */}
          <div className="container mx-auto px-6 pb-8 space-y-4">
            <Button asChild className="w-full bg-blue-600 hover:bg-blue-500 rounded-xl py-6 text-base font-semibold shadow-lg shadow-blue-200/50">
              <Link href={href("#lien-he")} onClick={closeMobile}>{content.mobileCtaText}</Link>
            </Button>

            {/* Social row in mobile menu */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <a href={hotlineHref} className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold hover:bg-blue-100 transition-colors">
                <Phone className="w-4 h-4" />
                {content.topBar.hotlineNumber}
              </a>
              <a href={content.topBar.facebookUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-slate-100 text-slate-600 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={content.topBar.tiktokUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-slate-100 text-slate-600 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
