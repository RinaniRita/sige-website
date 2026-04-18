import Link from "next/link"
import { ArrowRight, GraduationCap, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"

export const metadata = {
  title: "Du học Hàn Quốc | SIGE",
  description: "Chương trình du học Hàn Quốc sắp được cập nhật. Đăng ký để nhận thông tin sớm nhất.",
}

export default function KoreaProgramsPage() {
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
              Du học Hàn Quốc
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Chương trình du học Hàn Quốc 🇰🇷
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Các chương trình du học Hàn Quốc đang được chuẩn bị và sẽ sớm ra mắt
            </p>
          </div>
        </div>
      </section>

      {/* Coming soon */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-8">
              <Clock className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Sắp cập nhật chương trình
            </h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              SIGE đang hợp tác với các trường đại học uy tín tại Hàn Quốc để mang đến các chương trình du học chất lượng cao. Đăng ký để nhận thông tin sớm nhất khi chương trình được công bố.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 shadow-md shadow-blue-200">
                <Link href="/#lien-he">
                  Đăng ký nhận thông tin
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link href="/chuong-trinh/dai-loan">
                  Xem chương trình Đài Loan
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
