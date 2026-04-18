import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowLeft, MapPin, Clock, GraduationCap, BookOpen, Award, CheckCircle2, Star, FileText, ChevronDown, DollarSign, AlertCircle, Calendar, Info, Building2, TrendingUp, ClipboardList, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getAllPrograms, getProgramBySlug, countries } from "@/lib/programs-data"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"

export async function generateStaticParams() {
  return getAllPrograms().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const program = getProgramBySlug(slug)
  if (!program) return { title: "Chương trình không tồn tại | SIGE" }
  return {
    title: `${program.name} | SIGE`,
    description: program.summary,
  }
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const program = getProgramBySlug(slug)

  if (!program) {
    notFound()
  }

  const allPrograms = getAllPrograms()
  const relatedPrograms = program.relatedSlugs
    .map((s) => allPrograms.find((p) => p.slug === s))
    .filter(Boolean)

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader />

      {/* Hero Banner */}
      <section className="relative w-full h-72 md:h-96 flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src={program.heroImage}
            alt={program.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 pb-10">
          <Link
            href={`/chuong-trinh/${countries.find((c) => c.name === program.country)?.slug ?? "dai-loan"}`}
            className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 text-sm font-medium mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại danh sách chương trình
          </Link>
          <div className="flex items-center gap-2 text-blue-300 text-sm mb-3">
            <MapPin className="w-4 h-4" />
            <span>{program.country}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            {program.name}
          </h1>
        </div>
      </section>

      {/* Program Summary */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Giới thiệu chương trình
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {program.summary}
                </p>

                {/* Highlights */}
                <div className="space-y-3 pt-2">
                  {program.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-slate-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Overview Table */}
              <div className="lg:col-span-1">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-5">
                  <h3 className="font-bold text-slate-900 text-lg">Thông tin tổng quan</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-slate-500">Quốc gia</p>
                        <p className="font-semibold text-slate-800">{program.country}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-slate-500">Ngành học</p>
                        <p className="font-semibold text-slate-800">{program.fieldsOfStudy.join(", ")}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-slate-500">Thời gian</p>
                        <p className="font-semibold text-slate-800">{program.duration}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-slate-500">Yêu cầu đầu vào</p>
                        <p className="font-semibold text-slate-800">{program.requirements}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-slate-500">Học bổng</p>
                        <p className="font-semibold text-slate-800">{program.scholarships}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {program.programTypes.map((type) => (
                        <span
                          key={type}
                          className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Info - Structured Content */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              Thông tin tuyển sinh chi tiết
            </h2>

            {/* University Introduction */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Info className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">Giới thiệu trường</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                {program.admissionsInfo.universityIntro}
              </p>
              {program.admissionsInfo.notablePoints && program.admissionsInfo.notablePoints.length > 0 && (
                <div className="space-y-2 mt-4">
                  {program.admissionsInfo.notablePoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Star className="w-4 h-4 text-amber-500 mt-1 shrink-0" />
                      <span className="text-sm text-slate-700">{point}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sub-programs */}
            <div className="space-y-8">
              {program.admissionsInfo.subPrograms.map((sub, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                  {/* Sub-program header */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 md:px-8 py-5">
                    <h3 className="text-lg md:text-xl font-bold text-white">{sub.name}</h3>
                  </div>

                  <div className="p-6 md:p-8 space-y-6">
                    {/* Why choose */}
                    <div>
                      <p className="text-slate-600 leading-relaxed">{sub.whyChoose}</p>
                    </div>

                    {/* Program info */}
                    {sub.programInfo.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <FileText className="w-4 h-4 text-blue-600" />
                          <h4 className="font-semibold text-slate-900">Thông tin chương trình</h4>
                        </div>
                        <ul className="space-y-2">
                          {sub.programInfo.map((info, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                              <span className="text-sm text-slate-600">{info}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Fields of study */}
                    {sub.fieldsOfStudy.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <BookOpen className="w-4 h-4 text-blue-600" />
                          <h4 className="font-semibold text-slate-900">Ngành học</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {sub.fieldsOfStudy.map((field, i) => (
                            <span key={i} className="text-sm bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full font-medium">
                              {field}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Admission requirements */}
                    {sub.admissionRequirements.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <GraduationCap className="w-4 h-4 text-blue-600" />
                          <h4 className="font-semibold text-slate-900">Điều kiện tuyển sinh</h4>
                        </div>
                        <ul className="space-y-2">
                          {sub.admissionRequirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                              <span className="text-sm text-slate-600">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Special rules */}
                    {sub.specialRules && sub.specialRules.length > 0 && (
                      <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <AlertCircle className="w-4 h-4 text-amber-600" />
                          <h4 className="font-semibold text-amber-900">Quy định đặc biệt</h4>
                        </div>
                        <ul className="space-y-2">
                          {sub.specialRules.map((rule, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                              <span className="text-sm text-amber-800">{rule}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Scholarships */}
                    {sub.scholarships.length > 0 && (
                      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Award className="w-4 h-4 text-emerald-600" />
                          <h4 className="font-semibold text-emerald-900">Học bổng</h4>
                        </div>
                        <ul className="space-y-2">
                          {sub.scholarships.map((s, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                              <span className="text-sm text-emerald-800">{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tuition and fees */}
                    {sub.tuitionAndFees.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <DollarSign className="w-4 h-4 text-blue-600" />
                          <h4 className="font-semibold text-slate-900">Học phí và tạp phí</h4>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-4">
                          <ul className="space-y-2">
                            {sub.tuitionAndFees.map((fee, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                                <span className="text-sm text-slate-700">{fee}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Interview schedule (CMU) */}
                    {sub.interviewSchedule && sub.interviewSchedule.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          <h4 className="font-semibold text-slate-900">Lịch phỏng vấn</h4>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-slate-200">
                                <th className="text-left py-2 pr-4 font-semibold text-slate-700">Ngành</th>
                                <th className="text-left py-2 pr-4 font-semibold text-slate-700">Phỏng vấn lần 1</th>
                                <th className="text-left py-2 font-semibold text-slate-700">Phỏng vấn lần 2</th>
                              </tr>
                            </thead>
                            <tbody>
                              {sub.interviewSchedule.map((row, i) => (
                                <tr key={i} className="border-b border-slate-100">
                                  <td className="py-2 pr-4 text-slate-700">{row.field}</td>
                                  <td className="py-2 pr-4 text-slate-600">{row.round1}</td>
                                  <td className="py-2 text-slate-600">{row.round2}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Partner info (ASE) */}
                    {sub.partnerInfo && (
                      <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Building2 className="w-4 h-4 text-indigo-600" />
                          <h4 className="font-semibold text-indigo-900">{sub.partnerInfo.name}</h4>
                        </div>
                        <p className="text-sm text-indigo-800 mb-3">{sub.partnerInfo.description}</p>
                        <ul className="space-y-2">
                          {sub.partnerInfo.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></span>
                              <span className="text-sm text-indigo-700">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Career pathway */}
                    {sub.careerPathway && sub.careerPathway.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Briefcase className="w-4 h-4 text-blue-600" />
                          <h4 className="font-semibold text-slate-900">Lộ trình học tập & nghề nghiệp</h4>
                        </div>
                        <div className="space-y-3">
                          {sub.careerPathway.map((step, i) => (
                            <div key={i} className="flex gap-4 items-start">
                              <div className="w-20 shrink-0">
                                <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full">{step.year}</span>
                              </div>
                              <div className="flex-1 bg-slate-50 rounded-lg p-3 border border-slate-100">
                                <p className="text-sm font-semibold text-slate-800 mb-1">{step.title}</p>
                                <p className="text-xs text-slate-600">{step.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Income table */}
                    {sub.incomeTable && sub.incomeTable.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <TrendingUp className="w-4 h-4 text-emerald-600" />
                          <h4 className="font-semibold text-slate-900">Bảng thu nhập ước tính</h4>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b-2 border-slate-200 bg-slate-50">
                                <th className="text-left py-2.5 px-3 font-semibold text-slate-700">Năm</th>
                                <th className="text-left py-2.5 px-3 font-semibold text-slate-700">Nguồn thu nhập</th>
                                <th className="text-left py-2.5 px-3 font-semibold text-slate-700">Cách tính</th>
                                <th className="text-left py-2.5 px-3 font-semibold text-slate-700">Thu nhập ước tính</th>
                              </tr>
                            </thead>
                            <tbody>
                              {sub.incomeTable.map((row, i) => (
                                <tr key={i} className="border-b border-slate-100">
                                  <td className="py-2.5 px-3 text-slate-700 font-medium">{row.year}</td>
                                  <td className="py-2.5 px-3 text-slate-600">{row.source}</td>
                                  <td className="py-2.5 px-3 text-slate-500 text-xs">{row.calculation}</td>
                                  <td className="py-2.5 px-3 text-emerald-700 font-semibold">{row.estimated}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Documents required */}
                    {sub.documentsRequired && sub.documentsRequired.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <ClipboardList className="w-4 h-4 text-blue-600" />
                          <h4 className="font-semibold text-slate-900">Hồ sơ cần chuẩn bị</h4>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-4">
                          <ol className="space-y-2">
                            {sub.documentsRequired.map((doc, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="text-xs font-bold text-slate-400 mt-0.5 w-5 shrink-0">{i + 1}.</span>
                                <span className="text-sm text-slate-700">{doc}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    )}

                    {/* Notes */}
                    {sub.notes && sub.notes.length > 0 && (
                      <div className="border-t border-slate-100 pt-4">
                        <h4 className="font-semibold text-slate-700 text-sm mb-2">Ghi chú</h4>
                        <ul className="space-y-1.5">
                          {sub.notes.map((note, i) => (
                            <li key={i} className="text-xs text-slate-500 leading-relaxed">* {note}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Collapsible original brochure images — temporarily disabled
            {program.brochurePages.length > 0 && (
              <details className="mt-8 group">
                <summary className="cursor-pointer flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors text-sm font-medium py-3">
                  <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                  Xem catalogue gốc
                </summary>
                <div className="flex flex-col gap-4 mt-4">
                  {program.brochurePages.map((imgSrc, index) => (
                    <div
                      key={index}
                      className="relative w-full bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm"
                    >
                      <img
                        src={imgSrc}
                        alt={`${program.name} — Trang ${index + 1}`}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </details>
            )}
            */}
          </div>
        </div>
      </section>

      {/* Related Programs */}
      {relatedPrograms.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
                Chương trình liên quan
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPrograms.map((related) => (
                  <Link key={related!.slug} href={`/chuong-trinh/${related!.slug}`}>
                    <Card className="overflow-hidden border-slate-100 hover:shadow-xl transition-all duration-300 group rounded-2xl hover:-translate-y-1 cursor-pointer">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={related!.heroImage}
                          alt={related!.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-lg font-bold text-white">{related!.name}</h3>
                          <p className="text-slate-300 text-sm mt-1">{related!.fieldsOfStudy.slice(0, 3).join(", ")}</p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-blue-700 to-blue-600"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 max-w-2xl mx-auto">
            Bạn quan tâm đến {program.shortName}?
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-xl mx-auto">
            Đăng ký để nhận tư vấn chi tiết về chương trình học bổng và lộ trình du học tại {program.name}
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
