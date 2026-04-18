'use client';

import React from 'react';
import Link from 'next/link';
import { FileEdit } from 'lucide-react';

export function ContactBubbles() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* Registration Bubble */}
      <button
        onClick={() => {
          if (window.location.pathname !== '/') {
            window.location.href = '/#lien-he';
          } else {
            document.getElementById('lien-he')?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="w-14 h-14 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-xl group relative animate-bounce"
        title="Đăng ký ngay"
      >
        <FileEdit className="h-6 w-6 text-white" />
        <div className="absolute right-full mr-4 bg-white px-3 py-2 rounded-lg shadow-lg text-sm font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Đăng ký ngay
        </div>
      </button>

      {/* Zalo Bubble */}
      <Link
        href="https://zalo.me/0938491111"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#0068FF] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-xl group relative"
        title="Chat với chúng tôi qua Zalo"
      >
        <div className="font-bold text-white text-[1.1rem] tracking-tight">Zalo</div>
        <div className="absolute right-full mr-4 bg-white px-3 py-2 rounded-lg shadow-lg text-sm font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Liên hệ Zalo
        </div>
      </Link>

      {/* Messenger Bubble */}
      <Link
        href="https://m.me/sige.edu.vn"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-gradient-to-br from-[#00B2FF] to-[#006AFF] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-xl group relative"
        title="Chat với chúng tôi qua Messenger"
      >
        <svg
          viewBox="0 0 36 36"
          fill="currentColor"
          height="32"
          width="32"
          className="text-white"
        >
          <path d="M18 1.48C9 1.48 1.71 8.23 1.71 16.56c0 4.7 2.37 8.9 6.04 11.66v5.82l5.5-3.05a17.22 17.22 0 004.75.67c9 0 16.29-6.75 16.29-15.1S27 1.48 18 1.48zm-1.88 19.34L11.77 16l-8.48 4.84 9.25-9.83 4.41 4.78 8.42-4.78-9.25 9.81z" />
        </svg>
        <div className="absolute right-full mr-4 bg-white px-3 py-2 rounded-lg shadow-lg text-sm font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat qua Facebook
        </div>
      </Link>
    </div>
  );
}
