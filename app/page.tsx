import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, FileText, MapPin, Users, CheckCircle2, ArrowRight, BookOpen, Award, HeartHandshake, ShieldCheck, Star, Sparkles } from "lucide-react"
import { ProcessTimeline } from "@/components/ProcessTimeline"
import { TestimonialSlider } from "@/components/TestimonialSlider"
import { ProgramsCarousel } from "@/components/ProgramsCarousel"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"
import { QuickConsultationForm } from "@/components/QuickConsultationForm"
import Link from "next/link"
import Image from "next/image"
import { getLatestPosts } from "@/lib/sige-parser"
import { getHomeContent } from "@/lib/google-sheet-content"
import { ActivitySlider } from "@/components/ActivitySlider"
import { InstituteGallery } from "@/components/InstituteGallery"
import { HeroSlider } from "@/components/HeroSlider"
import { PartnerLogosMarquee } from "@/components/PartnerLogosMarquee"

export default async function Home() {
  const posts = await getLatestPosts();
  const homeContent = await getHomeContent();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader content={homeContent.header} />

      {/* ═══════════════════════════════════════════════════
          HERO — Dynamic Slider
         ═══════════════════════════════════════════════════ */}
      <HeroSlider slides={homeContent.heroSlides} />

      {/* ═══════════════════════════════════════════════════
          CHƯƠNG TRÌNH DU HỌC — Programs Carousel (NEW)
         ═══════════════════════════════════════════════════ */}
      <section id="chuong-trinh" className="py-16 md:py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-blue-200 text-sm font-semibold mb-6 backdrop-blur-sm border border-white/10">
              <GraduationCap className="w-4 h-4" /> {homeContent.sections.programs.badge}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
              {homeContent.sections.programs.title}
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              {homeContent.sections.programs.description}
            </p>
          </div>
          <ProgramsCarousel />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ABOUT / GIỚI THIỆU — With real institute photos
         ═══════════════════════════════════════════════════ */}
      <section id="gioi-thieu" className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-4">
          <InstituteGallery />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SỰ KHÁC BIỆT — What makes SIGE different (Enhanced)
         ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-700 text-sm font-semibold mb-6">
              <Star className="w-4 h-4" /> {homeContent.sections.differentiators.badge}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-blue-900 mb-5">
              {homeContent.sections.differentiators.title}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {homeContent.sections.differentiators.description}
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* Differentiator 1 — Đội ngũ chuyên môn cao */}
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/activity4.jpg"
                  alt="Đội ngũ chuyên gia SIGE gặp gỡ đối tác"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{homeContent.sections.differentiators.items[0]?.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {homeContent.sections.differentiators.items[0]?.lead}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {homeContent.sections.differentiators.items[0]?.body}
                </p>
              </div>
            </div>

            {/* Differentiator 2 — Học bổng độc quyền */}
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-4 lg:order-1">
                <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{homeContent.sections.differentiators.items[1]?.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {homeContent.sections.differentiators.items[1]?.lead}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {homeContent.sections.differentiators.items[1]?.body}
                </p>
              </div>
              <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg lg:order-2">
                <Image
                  src="/assets/students/graduation.jpg"
                  alt="Sinh viên SIGE nhận học bổng tốt nghiệp"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Differentiator 3 — Hỗ trợ toàn diện */}
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/orientation/orientation-1.jpg"
                  alt="SIGE hỗ trợ định hướng cho sinh viên"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200">
                  <HeartHandshake className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{homeContent.sections.differentiators.items[2]?.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {homeContent.sections.differentiators.items[2]?.lead}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {homeContent.sections.differentiators.items[2]?.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          DỊCH VỤ — Services offered (Bento Grid)
         ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
              <GraduationCap className="w-4 h-4" /> {homeContent.sections.services.badge}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-blue-900 mb-5">
              {homeContent.sections.services.title}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {homeContent.sections.services.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {/* Card 1 — Large featured */}
            <div className="lg:row-span-2 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 p-8 flex flex-col justify-between min-h-[320px] shadow-xl shadow-blue-200/30 hover:shadow-2xl hover:shadow-blue-300/40 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>
              <div>
                <div className="w-14 h-14 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-7 w-7 text-white" />
                </div>
                <Link href="#chuong-trinh">
                  <h3 className="text-2xl font-bold text-white mb-3 hover:text-blue-200 transition-colors">{homeContent.sections.services.featured.title}</h3>
                </Link>
                <p className="text-blue-100 leading-relaxed">
                  {homeContent.sections.services.featured.description}
                </p>
              </div>
              <Link href="#chuong-trinh" className="flex items-center gap-2 text-white/80 text-sm font-medium mt-6 hover:text-white transition-colors">
                <span>{homeContent.sections.services.featured.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-3xl overflow-hidden bg-slate-50 p-7 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute -right-8 -top-8 w-28 h-28 bg-emerald-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-500 transition-colors duration-300">
                  <FileText className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{homeContent.sections.services.profileSupport.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {homeContent.sections.services.profileSupport.description}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative rounded-3xl overflow-hidden bg-slate-50 p-7 border border-slate-100 hover:border-violet-200 hover:bg-violet-50/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute -right-8 -top-8 w-28 h-28 bg-violet-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-violet-500 transition-colors duration-300">
                  <MapPin className="h-6 w-6 text-violet-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{homeContent.sections.services.roadmap.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {homeContent.sections.services.roadmap.description}
                </p>
              </div>
            </div>

            {/* Card 4 — Wide */}
            <div className="lg:col-span-2 group relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 p-7 flex flex-col sm:flex-row sm:items-center gap-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
              <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300 relative">
                <Users className="h-7 w-7 text-white" />
              </div>
              <div className="relative">
                <h3 className="text-lg font-bold text-white mb-1.5">{homeContent.sections.services.network.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {homeContent.sections.services.network.description}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-500 shrink-0 group-hover:text-white group-hover:translate-x-1 transition-all hidden sm:block" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HOẠT ĐỘNG — Activities Section
         ═══════════════════════════════════════════════════ */}
      <section id="hoat-dong" className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="mb-14">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" /> {homeContent.sections.activities.badge}
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-blue-900 mb-4 hover:opacity-80 transition-opacity">
                <a href={homeContent.sections.activities.linkUrl} target="_blank" rel="noopener noreferrer">
                  {homeContent.sections.activities.title}
                </a>
              </h2>
              <p className="text-lg text-slate-600">
                {homeContent.sections.activities.description}
              </p>
            </div>
          </div>

          <div className="w-full">
            <ActivitySlider items={homeContent.activityItems} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CẢM NGHĨ — Student Testimonials
         ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Dramatic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950"></div>
        <div className="absolute inset-0 opacity-10">
          <Image src="/assets/students/graduation.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-slate-900/50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-blue-200 text-sm font-semibold mb-6 backdrop-blur-sm border border-white/10">
              <Star className="w-4 h-4 text-amber-400" /> {homeContent.sections.testimonials.badge}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-5">
              {homeContent.sections.testimonials.title}
            </h2>
            <p className="text-lg text-slate-300 max-w-xl mx-auto">
              {homeContent.sections.testimonials.description}
            </p>
          </div>

          {/* Student graduation photo feature */}
          <div className="flex justify-center mb-14">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full h-72 md:h-96">
              <Image
                src="/assets/students/graduation.jpg"
                alt="Sinh viên SIGE tốt nghiệp"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold text-lg">{homeContent.sections.testimonials.featureTitle}</p>
                <p className="text-slate-300 text-sm mt-1">{homeContent.sections.testimonials.featureCaption}</p>
              </div>
            </div>
          </div>

          <TestimonialSlider items={homeContent.testimonials} />
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════
          QUY TRÌNH — Process Timeline
         ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-slate-100/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" /> {homeContent.sections.process.badge}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-blue-900 mb-5">
              {homeContent.sections.process.title}
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              {homeContent.sections.process.description}
            </p>
          </div>
          <ProcessTimeline stepTitles={homeContent.sections.process.steps} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TRUST — Statistics
         ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300 group">
              <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200 mb-3 group-hover:scale-105 transition-transform">{homeContent.sections.trust.items[0]?.value}</div>
              <div className="w-8 h-0.5 bg-blue-500 mx-auto mb-3 rounded-full group-hover:w-12 transition-all"></div>
              <p className="text-blue-200/80 text-sm font-medium">{homeContent.sections.trust.items[0]?.label}</p>
            </div>
            <div className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300 group">
              <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200 mb-3 group-hover:scale-105 transition-transform">{homeContent.sections.trust.items[1]?.value}</div>
              <div className="w-8 h-0.5 bg-blue-500 mx-auto mb-3 rounded-full group-hover:w-12 transition-all"></div>
              <p className="text-blue-200/80 text-sm font-medium">{homeContent.sections.trust.items[1]?.label}</p>
            </div>
            <div className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300 group">
              <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200 mb-3 group-hover:scale-105 transition-transform">{homeContent.sections.trust.items[2]?.value}</div>
              <div className="w-8 h-0.5 bg-blue-500 mx-auto mb-3 rounded-full group-hover:w-12 transition-all"></div>
              <p className="text-blue-200/80 text-sm font-medium">{homeContent.sections.trust.items[2]?.label}</p>
            </div>
            <div className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300 group">
              <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-amber-200 mb-3 group-hover:scale-105 transition-transform">{homeContent.sections.trust.items[3]?.value}</div>
              <div className="w-8 h-0.5 bg-amber-500 mx-auto mb-3 rounded-full group-hover:w-12 transition-all"></div>
              <p className="text-blue-200/80 text-sm font-medium">{homeContent.sections.trust.items[3]?.label}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ĐỐI TÁC — Partner School Logos Marquee
         ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 mb-10 md:mb-14">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
              <Award className="w-4 h-4" /> {homeContent.sections.partners.badge}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-blue-900 mb-4">
              {homeContent.sections.partners.title}
            </h2>
            <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
              {homeContent.sections.partners.description}
            </p>
          </div>
        </div>
        <PartnerLogosMarquee />
      </section>

      {/* ═══════════════════════════════════════════════════
          TIN TỨC — Blog / News Section
         ═══════════════════════════════════════════════════ */}
      <section id="tin-tuc" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
                <BookOpen className="w-4 h-4" /> {homeContent.sections.news.badge}
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-blue-900 mb-3">
                {homeContent.sections.news.title}
              </h2>
              <p className="text-lg text-slate-600">
                {homeContent.sections.news.description}
              </p>
            </div>
            <Button asChild variant="outline" className="shrink-0 rounded-full border-slate-300">
              <Link href="https://sige.edu.vn/" target="_blank" rel="noopener noreferrer">
                {homeContent.sections.news.viewAllText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-slate-100 bg-white group rounded-2xl hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-blue-600 font-semibold mb-2">{post.date}</div>
                  <CardTitle className="text-lg leading-tight line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3 text-sm">{post.excerpt}</CardDescription>
                  <Link href={post.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-bold inline-flex items-center group/link text-sm">
                    {homeContent.sections.news.detailText}
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA — Call to Action
         ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-blue-700 to-blue-600"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold text-white mb-6 text-balance max-w-4xl mx-auto leading-tight shadow-sm">
            {homeContent.sections.bottomCta.title}
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            {homeContent.sections.bottomCta.description}
          </p>
          <Button asChild size="lg" className="text-lg bg-white text-blue-700 hover:bg-slate-50 px-10 py-7 rounded-full shadow-2xl transition-all hover:scale-[1.03]">
            <Link href={homeContent.sections.bottomCta.buttonLink}>
              {homeContent.sections.bottomCta.buttonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          LIÊN HỆ — Contact / Registration Form
         ═══════════════════════════════════════════════════ */}
      <section id="lien-he" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-10 items-start">
              {/* Left — Info panel */}
              <div className="lg:col-span-2 lg:sticky lg:top-32">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
                  <Sparkles className="w-4 h-4" /> {homeContent.sections.contact.badge}
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-blue-900 mb-4 leading-tight">
                  {homeContent.sections.contact.title}
                </h2>
                <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                  {homeContent.sections.contact.description}
                </p>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{homeContent.sections.contact.highlights[0]?.title}</p>
                      <p className="text-slate-500 text-sm">{homeContent.sections.contact.highlights[0]?.description}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{homeContent.sections.contact.highlights[1]?.title}</p>
                      <p className="text-slate-500 text-sm">{homeContent.sections.contact.highlights[1]?.description}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{homeContent.sections.contact.highlights[2]?.title}</p>
                      <p className="text-slate-500 text-sm">{homeContent.sections.contact.highlights[2]?.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/60 border border-slate-100 p-8 md:p-10">
                  <QuickConsultationForm
                    content={homeContent.consultationForm}
                    privacyPrefix={homeContent.sections.contact.privacyPrefix}
                    privacyLinkText={homeContent.sections.contact.privacyLinkText}
                    privacyLinkHref={homeContent.sections.contact.privacyLinkHref}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter content={homeContent.footer} />
    </div>
  )
}
