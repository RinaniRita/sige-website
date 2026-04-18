'use client';

import React from 'react';
import { MessageCircle, School, Languages, FolderOpen, FileCheck, Upload, UserCheck, Stamp, PlaneTakeoff, Handshake } from "lucide-react";
import { DEFAULT_HOME_CONTENT } from "@/lib/home-content";

interface Step {
  step: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  iconBg: string;
  iconText: string;
  lineTo: string;
}

const stepIcons = [MessageCircle, School, Languages, FolderOpen, FileCheck, Upload, UserCheck, Stamp, PlaneTakeoff, Handshake] as const;

const stepStyles = [
  { gradient: "from-blue-500 to-blue-600", iconBg: "bg-blue-100", iconText: "text-blue-600", lineTo: "#3b82f6" },
  { gradient: "from-indigo-500 to-indigo-600", iconBg: "bg-indigo-100", iconText: "text-indigo-600", lineTo: "#6366f1" },
  { gradient: "from-violet-500 to-purple-600", iconBg: "bg-violet-100", iconText: "text-violet-600", lineTo: "#8b5cf6" },
  { gradient: "from-amber-500 to-orange-500", iconBg: "bg-amber-100", iconText: "text-amber-600", lineTo: "#f59e0b" },
  { gradient: "from-emerald-500 to-green-600", iconBg: "bg-emerald-100", iconText: "text-emerald-600", lineTo: "#10b981" },
  { gradient: "from-cyan-500 to-teal-500", iconBg: "bg-cyan-100", iconText: "text-cyan-600", lineTo: "#06b6d4" },
  { gradient: "from-rose-500 to-pink-600", iconBg: "bg-rose-100", iconText: "text-rose-600", lineTo: "#f43f5e" },
  { gradient: "from-blue-600 to-indigo-600", iconBg: "bg-blue-100", iconText: "text-blue-600", lineTo: "#4f46e5" },
  { gradient: "from-orange-500 to-red-500", iconBg: "bg-orange-100", iconText: "text-orange-600", lineTo: "#f97316" },
  { gradient: "from-teal-500 to-emerald-600", iconBg: "bg-teal-100", iconText: "text-teal-600", lineTo: "#14b8a6" },
] as const;

function buildSteps(stepTitles: string[]): Step[] {
  return stepTitles.map((title, index) => ({
    step: index + 1,
    title,
    icon: stepIcons[index] ?? Handshake,
    gradient: stepStyles[index]?.gradient ?? "from-blue-500 to-blue-600",
    iconBg: stepStyles[index]?.iconBg ?? "bg-blue-100",
    iconText: stepStyles[index]?.iconText ?? "text-blue-600",
    lineTo: stepStyles[index]?.lineTo ?? "#3b82f6",
  }))
}


interface ProcessTimelineProps {
  stepTitles?: string[]
}

export function ProcessTimeline({
  stepTitles = DEFAULT_HOME_CONTENT.sections.process.steps,
}: ProcessTimelineProps) {
  const steps = buildSteps(stepTitles)

  return (
    <div className="max-w-6xl mx-auto py-8">
      {/* Desktop view (Snake layout) */}
      <div className="hidden lg:grid grid-cols-5 gap-y-16 relative place-items-center">
        {/* Background Decorative Lines */}
        <div className="absolute top-[50px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-300 via-violet-300 to-emerald-300 border-t-2 border-dashed border-white/50 z-0"></div>
        <div className="absolute top-[215px] right-[10%] w-[80%] h-1 bg-gradient-to-l from-emerald-300 via-rose-300 to-teal-300 border-t-2 border-dashed border-white/50 z-0 flex items-center justify-end"></div>
        
        {/* Row 1: Left to Right (0-4) */}
        {steps.slice(0, 5).map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={i} className="flex flex-col items-center w-full max-w-[200px] z-10 group relative">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.gradient} p-0.5 shadow-md mb-4 flex-shrink-0 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300`}>
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <Icon className={`w-8 h-8 ${step.iconText}`} />
                </div>
                <div className={`absolute -top-2 -right-2 w-8 h-8 ${step.iconBg} rounded-full shadow-sm border-2 border-white flex items-center justify-center`}>
                  <span className={`text-sm font-black ${step.iconText}`}>{step.step}</span>
                </div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-slate-100 shadow-sm w-full group-hover:shadow-md transition-all">
                <h3 className="text-[13px] font-semibold text-slate-700 leading-snug">{step.title}</h3>
              </div>
            </div>
          );
        })}

        {/* Vertical connector right */}
        <div className="absolute right-[10%] top-[50px] w-1 h-[165px] bg-gradient-to-b from-emerald-300 to-emerald-300 border-l-2 border-dashed border-white/50 z-0"></div>

        {/* Row 2: Right to Left (5-9) */}
        {[...steps.slice(5)].reverse().map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={i} className="flex flex-col items-center w-full max-w-[200px] z-10 group relative">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.gradient} p-0.5 shadow-md mb-4 flex-shrink-0 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300`}>
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <Icon className={`w-8 h-8 ${step.iconText}`} />
                </div>
                <div className={`absolute -top-2 -right-2 w-8 h-8 ${step.iconBg} rounded-full shadow-sm border-2 border-white flex items-center justify-center`}>
                  <span className={`text-sm font-black ${step.iconText}`}>{step.step}</span>
                </div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-slate-100 shadow-sm w-full group-hover:shadow-md transition-all">
                <h3 className="text-[13px] font-semibold text-slate-700 leading-snug">{step.title}</h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile view */}
      <div className="lg:hidden space-y-4 px-2">
        {steps.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="relative group border border-slate-100 rounded-2xl p-4 bg-white shadow-sm overflow-hidden">
              <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${item.gradient}`} />
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md p-[2px]`}>
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                       <Icon className={`w-6 h-6 ${item.iconText}`} />
                    </div>
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-6 h-6 ${item.iconBg} rounded-full border border-white flex items-center justify-center shadow-sm`}>
                    <span className={`text-[11px] font-black ${item.iconText}`}>{item.step}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-semibold text-slate-800 leading-snug">{item.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
