import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, GraduationCap } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getProgramsByCountry, getCountryBySlug } from "@/lib/programs-data"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"

export const metadata = {
  title: "Du học Đài Loan | SIGE",
  description: "Khám phá các chương trình du học Đài Loan với học bổng hấp dẫn tại các trường đại học uy tín.",
}

export default function TaiwanProgramsPage() {
  const country = getCountryBySlug("dai-loan")!
  const programs = getProgramsByCountry("Đài Loan")

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader />

      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-blue-200 text-sm font-semibold mb-6 backdrop-blur-sm border border-white/10">
              <GraduationCap className="w-4 h-4" />
              {country.label}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Chương trình du học Đài Loan {country.flag}
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Khám phá {programs.length} chương trình du học tại các trường đại học uy tín Đài Loan — với học bổng lên đến 100% học phí
            </p>
          </div>
        </div>
      </section>

      {/* Programs grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <Link key={program.slug} href={`/chuong-trinh/${program.slug}`}>
                <Card className="overflow-hidden border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 group rounded-2xl hover:-translate-y-1 cursor-pointer h-full">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={program.heroImage}
                      alt={program.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-1.5 text-blue-300 text-sm mb-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{program.country}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white leading-tight">{program.name}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-slate-600 line-clamp-2 mb-3">{program.summary}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {program.programTypes.map((type) => (
                        <span key={type} className="text-xs font-medium bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full">
                          {type}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                      Xem chi tiết
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-blue-700 to-blue-600"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 max-w-2xl mx-auto">
            Bạn quan tâm du học Đài Loan?
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-xl mx-auto">
            Đăng ký để nhận tư vấn chi tiết về chương trình học bổng và lộ trình du học
          </p>
          <Button asChild size="lg" className="text-lg bg-white text-blue-700 hover:bg-slate-50 px-10 py-7 rounded-full shadow-2xl transition-all hover:scale-[1.03]">
            <Link href="/#lien-he">
              Đăng ký tư vấn miễn phí
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
