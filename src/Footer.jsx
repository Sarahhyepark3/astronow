import React from 'react';

export default function Footer() {
  const isSimplifiedTaxpayer = true; // 간이과세자 여부

  return (
    <footer className="w-full bg-gray-900 text-gray-400 border-t border-gray-800 py-10 px-6 sm:px-12 text-xs leading-relaxed flex-shrink-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        {/* 왼쪽 섹션 */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-gray-200">astronow (아스트로나우)</span>
            {isSimplifiedTaxpayer && (
              <span className="bg-gray-800 text-gray-300 px-1.5 py-0.5 rounded text-[10px] font-medium border border-gray-700">
                간이과세자
              </span>
            )}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-gray-400">
            <div><span className="font-semibold text-gray-300">대표자:</span> 사라 (Sarah)</div>
            <div><span className="font-semibold text-gray-300">사업자등록번호:</span> 000-00-00000</div>
            <div className="sm:col-span-2">
              <span className="font-semibold text-gray-300">주소:</span> 인천광역시 중구 영종도 주소지 (사업자등록증 상 주소)
            </div>
            <div className="sm:col-span-2">
              <span className="font-semibold text-gray-300">통신판매업신고번호:</span> 제 2026-인천중구-0000호
            </div>
            <div><span className="font-semibold text-gray-300">개인정보보호책임자:</span> 사라 (Sarah)</div>
            <div><span className="font-semibold text-gray-300">호스팅서비스제공자:</span> Vercel Inc.</div>
          </div>
          
          <p className="text-[11px] text-gray-500 mt-4">
            © {new Date().getFullYear()} astronow. All rights reserved.
          </p>
        </div>

        {/* 오른쪽 섹션 */}
        <div className="flex flex-col sm:flex-row gap-8 md:gap-16">
          <div className="space-y-2">
            <h4 className="font-bold text-gray-200 text-sm">고객센터 (CS)</h4>
            <div className="text-gray-400 space-y-1">
              <p className="text-sm font-semibold text-gray-300">070-0000-0000</p>
              <p>이메일: support@astronow.co.kr</p>
              <p className="text-gray-500 mt-1">
                운영시간: 평일 10:00 - 17:00<br />
                (주말/공휴일 휴무, 점심시간 12:00 - 13:00)
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-gray-200 text-sm">이용 약관 및 정책</h4>
            <ul className="space-y-1.5 font-medium text-gray-400">
              <li><a href="/terms" className="hover:text-white transition-colors">이용약관</a></li>
              <li><a href="/privacy" className="hover:text-white font-semibold text-gray-200">개인정보처리방침</a></li>
              <li><a href="/refund" className="hover:text-white transition-colors">취소 및 환불 정책</a></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}
