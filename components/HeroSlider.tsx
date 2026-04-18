'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { DEFAULT_HOME_CONTENT, type HeroSlideContent } from '@/lib/home-content';

const DEFAULT_SLIDES: HeroSlideContent[] = DEFAULT_HOME_CONTENT.heroSlides;

interface HeroSliderProps {
  slides?: HeroSlideContent[]
}

export function HeroSlider({ slides = DEFAULT_SLIDES }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const SLIDE_DURATION = 7000;

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setProgress(0);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  // Auto-play with progress bar
  useEffect(() => {
    const startTime = Date.now();
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setProgress(Math.min((elapsed / SLIDE_DURATION) * 100, 100));
    }, 50);

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => {
        setProgress(0);
        return (prev + 1) % slides.length;
      });
    }, SLIDE_DURATION);

    return () => {
      clearInterval(progressInterval);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentSlide]);

  // Touch/swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 60) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  return (
    <section
      className="relative w-full h-[100svh] md:h-screen flex items-center justify-center bg-slate-900 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images with Ken Burns effect */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : index < currentSlide || (currentSlide === 0 && index === slides.length - 1)
                ? 'opacity-0 -translate-x-full scale-105'
                : 'opacity-0 translate-x-full scale-105'
          }`}
        >
          {/* Multi-layer gradient for depth */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-900/70 via-blue-950/40 to-slate-900/80"></div>
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900/70 via-transparent to-slate-900/30"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            sizes="100vw"
            className={`object-cover object-[center_25%] md:object-center transition-transform duration-[7000ms] ease-linear ${
              index === currentSlide ? 'scale-110' : 'scale-100'
            }`}
            priority={index === 0}
          />
        </div>
      ))}

      {/* Navigation Arrows — hidden on small mobile, visible on tablet+ */}
      <button
        className="absolute z-20 top-1/2 left-3 md:left-6 -translate-y-1/2 hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 group"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        className="absolute z-20 top-1/2 right-3 md:right-6 -translate-y-1/2 hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 group"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-amber-500/5 rounded-full blur-3xl z-0 pointer-events-none"></div>

      {/* Slides Content — horizontal slide transition */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out px-5 sm:px-10 md:px-16 ${
              index === currentSlide
                ? 'opacity-100 translate-x-0'
                : index < currentSlide || (currentSlide === 0 && index === slides.length - 1)
                  ? 'opacity-0 -translate-x-24 pointer-events-none'
                  : 'opacity-0 translate-x-24 pointer-events-none'
            }`}
          >
            <div className="w-full max-w-4xl text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/10 text-blue-200 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium tracking-wide mb-5 md:mb-7">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                {slide.badge}
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-3 md:mb-5">
                {slide.title}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 drop-shadow-sm">
                  {slide.subtitle}
                </span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed mb-5 md:mb-8">
                {slide.description}
              </p>

              {/* Features */}
              <div className="flex flex-col items-center gap-2 sm:gap-2.5 text-xs sm:text-sm md:text-base text-slate-200 mb-6 md:mb-10">
                {slide.features.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white/[0.07] backdrop-blur-sm px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-white/10 w-fit"
                  >
                    <CheckCircle2 className="text-emerald-400 h-3.5 w-3.5 md:h-4 md:w-4 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex justify-center">
                <Button asChild size="lg" className="text-sm sm:text-base px-7 sm:px-8 py-5 sm:py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-xl shadow-blue-600/30 transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl hover:shadow-blue-500/40 font-semibold">
                  <Link href={slide.buttonLink}>
                    {slide.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators with progress bar */}
      <div className="absolute z-20 bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className="relative overflow-hidden rounded-full h-2 transition-all duration-300"
            style={{ width: i === currentSlide ? '2.5rem' : '0.625rem' }}
            aria-label={`Go to slide ${i + 1}`}
          >
            <div className="absolute inset-0 bg-white/30 rounded-full"></div>
            {i === currentSlide && (
              <div
                className="absolute inset-y-0 left-0 bg-white rounded-full transition-[width] duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              ></div>
            )}
          </button>
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute z-20 bottom-6 md:bottom-10 right-5 md:right-10 text-white/50 text-xs font-mono tracking-wider">
        <span className="text-white font-semibold">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="mx-1">/</span>
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>
    </section>
  );
}
