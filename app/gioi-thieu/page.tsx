import Link from "next/link"
import { ArrowRight, Target, Eye, Gem, Users, Shield, Handshake, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"

export const metadata = {
  title: "Giới thiệu | SIGE - Viện Khoa Học Giáo Dục Toàn Cầu",
  description: "SIGE là tổ chức tư vấn và hỗ trợ giáo dục quốc tế, kết nối học sinh sinh viên Việt Nam với các chương trình đào tạo chất lượng tại nước ngoài.",
}

const coreValues = [
  {
    title: "Chuyên môn",
    description: "SIGE đặt yếu tố chuyên môn và tính chính xác của thông tin lên hàng đầu, đảm bảo mọi chương trình và lộ trình học tập được tư vấn dựa trên dữ liệu và kinh nghiệm thực tiễn.",
    icon: BookOpen,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Minh bạch",
    description: "Tất cả thông tin về chương trình, điều kiện tuyển sinh và cơ hội học tập đều được cung cấp rõ ràng, giúp học viên và gia đình đưa ra quyết định phù hợp.",
    icon: Shield,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Đồng hành",
    description: "SIGE không chỉ dừng lại ở khâu tư vấn ban đầu mà còn đồng hành cùng học viên trong suốt quá trình chuẩn bị và học tập tại nước ngoài.",
    icon: Handshake,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Kết nối",
    description: "SIGE xây dựng mạng lưới hợp tác với các trường đại học, tổ chức giáo dục và doanh nghiệp nhằm mở rộng cơ hội học tập và phát triển nghề nghiệp cho học viên.",
    icon: Users,
    color: "bg-violet-50 text-violet-600",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader />

      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-blue-200 text-sm font-semibold mb-6 backdrop-blur-sm border border-white/10">
              <Gem className="w-4 h-4" />
              Về chúng tôi
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Viện Khoa Học Giáo Dục Toàn Cầu SIGE
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Kết nối học sinh, sinh viên Việt Nam với các chương trình đào tạo chất lượng tại nước ngoài
            </p>
          </div>
        </div>
      </section>

      {/* Về SIGE */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Về SIGE</h2>
            <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
              <p>
                SIGE là tổ chức hoạt động trong lĩnh vực tư vấn và hỗ trợ giáo dục quốc tế, với mục tiêu kết nối học sinh, sinh viên Việt Nam với các chương trình đào tạo chất lượng tại nước ngoài. Thông qua mạng lưới hợp tác với các trường đại học, viện nghiên cứu và tổ chức giáo dục quốc tế, SIGE mang đến những chương trình học tập phù hợp với nhu cầu phát triển nguồn nhân lực trong bối cảnh toàn cầu hóa.
              </p>
              <p>
                Không chỉ cung cấp thông tin về các chương trình du học, SIGE còn đồng hành cùng học viên trong toàn bộ quá trình từ tư vấn định hướng, chuẩn bị hồ sơ, xin học bổng đến hỗ trợ trong quá trình học tập tại nước ngoài. Với đội ngũ chuyên môn có kinh nghiệm trong lĩnh vực giáo dục quốc tế, SIGE hướng tới việc xây dựng những lộ trình học tập rõ ràng, minh bạch và hiệu quả cho từng học viên.
              </p>
              <p>
                Bên cạnh đó, SIGE cũng tập trung phát triển các chương trình hợp tác đào tạo, trao đổi học thuật và kết nối doanh nghiệp nhằm mở rộng cơ hội học tập và nghề nghiệp cho sinh viên sau khi tốt nghiệp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sứ mệnh & Tầm nhìn */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Sứ mệnh */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Sứ mệnh</h3>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Sứ mệnh của SIGE là hỗ trợ học sinh, sinh viên tiếp cận các chương trình giáo dục quốc tế chất lượng, đồng thời xây dựng những lộ trình học tập phù hợp với năng lực và định hướng nghề nghiệp của từng cá nhân.
                  </p>
                  <p>
                    SIGE cam kết cung cấp thông tin minh bạch, tư vấn chuyên nghiệp và hỗ trợ toàn diện trong quá trình chuẩn bị du học, giúp học viên tự tin bước vào môi trường học tập quốc tế và phát triển bền vững trong tương lai.
                  </p>
                </div>
              </div>

              {/* Tầm nhìn */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mb-5">
                  <Eye className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Tầm nhìn</h3>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    SIGE hướng tới trở thành một trong những đơn vị kết nối giáo dục quốc tế uy tín tại Việt Nam, đóng vai trò cầu nối giữa sinh viên Việt Nam với các cơ sở đào tạo chất lượng trên thế giới.
                  </p>
                  <p>
                    Trong dài hạn, SIGE mong muốn xây dựng hệ sinh thái hỗ trợ giáo dục toàn diện, không chỉ dừng lại ở tư vấn du học mà còn mở rộng sang các hoạt động hợp tác đào tạo, nghiên cứu, và kết nối nghề nghiệp cho sinh viên trong bối cảnh thị trường lao động toàn cầu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giá trị cốt lõi */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center">Giá trị cốt lõi</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {coreValues.map((value) => {
                const Icon = value.icon
                return (
                  <div key={value.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <div className={`w-10 h-10 rounded-lg ${value.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-blue-700 to-blue-600"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 max-w-2xl mx-auto">
            Bắt đầu hành trình du học cùng SIGE
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-xl mx-auto">
            Đăng ký để nhận tư vấn miễn phí về lộ trình du học phù hợp với bạn
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
