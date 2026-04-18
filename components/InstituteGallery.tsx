'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { MapPin, BookOpen } from 'lucide-react'

const branches = [
  {
    id: 'daovien',
    name: 'Đào Viên',
    desc: 'Chi nhánh',
    images: [
      '/assets/branch/daovien-new.jpg',
      '/assets/branch/daovien-2.jpg',
      '/assets/branch/daovien-3.jpg',
      '/assets/branch/daovien-4.jpg'
    ],
  },
  {
    id: 'caohung',
    name: 'Cao Hùng',
    desc: 'Chi nhánh',
    images: [
      '/assets/branch/caohung-new.jpg',
      '/assets/branch/caohung-2.jpg',
      '/assets/branch/caohung-3.jpg',
      '/assets/branch/caohung-4.jpg'
    ],
  }
]

export function InstituteGallery() {
  const [activeBranch, setActiveBranch] = useState(branches[0].id)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Reset image sequence when hovering over a new branch
  useEffect(() => {
    setActiveImageIndex(0)
  }, [activeBranch])

  // Auto-play the image slider
  useEffect(() => {
    const currentBranch = branches.find(b => b.id === activeBranch) || branches[0]
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % currentBranch.images.length)
    }, 1500)
    
    return () => clearInterval(interval)
  }, [activeBranch])

  const activeBranchData = branches.find(b => b.id === activeBranch) || branches[0]

  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">
          <BookOpen className="w-4 h-4" /> Về chúng tôi
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-blue-900 leading-tight">
          Viện khoa học giáo dục
          <br />
          <span className="text-blue-600">toàn cầu SIGE</span>
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          SIGE là đơn vị chuyên nghiệp trong lĩnh vực tư vấn và hỗ trợ du học Đài Loan. Chúng tôi tự hào là đơn vị phân phối và thiết kế chương trình du học <strong className="text-slate-800">duy nhất tại Việt Nam</strong> có hệ thống văn phòng hỗ trợ trực tiếp tại Đài Loan.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          Với các chương trình như 1+4 (1 năm tiếng + 4 năm chuyên ngành), Thạc sĩ, Hệ chuyên ban, chúng tôi cam kết mang đến cho sinh viên Việt Nam những học bổng giá trị và cơ hội thực tập hưởng lương tại các tập đoàn lớn như ASE Group.
        </p>

        {/* Branch offices mini-highlight */}
        <div className="grid grid-cols-2 gap-3 pt-4">
          {branches.map(branch => (
            <div 
              key={branch.id}
              onMouseEnter={() => setActiveBranch(branch.id)}
              className={`rounded-xl p-4 text-center border cursor-pointer transition-colors duration-300 ${
                activeBranch === branch.id 
                  ? 'bg-blue-50 border-blue-200' 
                  : 'bg-slate-50 border-slate-100 hover:bg-slate-100'
              }`}
            >
              <MapPin className={`w-5 h-5 mx-auto mb-2 transition-colors ${activeBranch === branch.id ? 'text-blue-600' : 'text-slate-400'}`} />
              <p className={`font-bold text-sm transition-colors ${activeBranch === branch.id ? 'text-blue-900' : 'text-slate-700'}`}>{branch.name}</p>
              <p className="text-xs text-slate-500 mt-0.5">{branch.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Display */}
      <div className="relative">
        <div className="relative h-[480px] w-[90%] mx-auto lg:w-full lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group">
          {/* Map through all images of all branches to preload, manage opacity depending on branch and active slide */}
          {branches.map(branch => (
             branch.images.map((imgSrc, idx) => {
               const isActive = activeBranch === branch.id && activeImageIndex === idx;
               return (
                 <Image
                   key={`${branch.id}-${idx}`}
                   src={imgSrc}
                   alt={`Trụ sở SIGE tại ${branch.name} - Ảnh ${idx + 1}`}
                   fill
                   className={`object-cover transition-all duration-500 ease-in-out group-hover:scale-105 ${
                     isActive ? 'opacity-100 relative z-10' : 'opacity-0 absolute inset-0 z-0'
                   }`}
                 />
               )
             })
          ))}
          
          {/* Slider navigation dots */}
          <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-2">
            {activeBranchData.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === activeImageIndex 
                    ? 'bg-white shadow-md scale-110 w-8' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Floating stat badge */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl border border-slate-100 px-8 py-4 flex items-center gap-6 z-20">
          <div className="text-center">
            <p className="text-2xl font-extrabold text-blue-600">2</p>
            <p className="text-xs text-slate-500 font-medium">Văn phòng tại Đài Loan</p>
          </div>
          <div className="w-px h-10 bg-slate-200"></div>
          <div className="text-center">
            <p className="text-2xl font-extrabold text-blue-600">500+</p>
            <p className="text-xs text-slate-500 font-medium">Sinh viên đã hỗ trợ</p>
          </div>
        </div>
      </div>
    </div>
  )
}
