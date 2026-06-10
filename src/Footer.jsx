import React from 'react';
import { Link } from 'react-router-dom'; // ⭐️ 이 줄이 반드시 있어야 작동합니다!

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 border-t border-gray-800 py-6 px-6 sm:px-12 text-xs leading-relaxed flex-shrink-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        
        {/* 왼쪽 섹션: 최소화된 사업자 정보 */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-gray-200">아스트로나우(Astronow)</span>
            <span className="bg-gray-800 text-gray-300 px-1.5 py-0.5 rounded text-[10px] font-medium border border-gray-700">
              간이과세자
            </span>
          </div>
          
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-400">
            <div><span className="font-semibold text-gray-300">대표자:</span> 박혜은</div>
            <div><span className="font-semibold text-gray-300">사업자등록번호:</span> 241-06-03629</div>
            <div><span className="font-semibold text-gray-300">주소:</span> 인천광역시 중구 두미포로 113</div>
            <div><span className="font-semibold text-gray-300">개인정보보호책임자:</span> 박혜은</div>
          </div>
          
          <p className="text-[11px] text-gray-500 pt-1">
            © {new Date().getFullYear()} Astronow. All rights reserved.
          </p>
        </div>

        {/* 오른쪽 섹션: 문의사항 및 약관 링크 */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:text-right">
          <div>
            <h4 className="font-bold text-gray-200 text-xs">문의사항</h4>
            <p className="text-gray-400">이메일: admin@astronow.co.kr</p>
          </div>

          <div className="flex gap-3 font-medium text-gray-400 pt-1 sm:pt-0">
            {/* ⭐️ a 태그 대신 Link 태그로 변경되었습니다! */}
            <Link to="/terms" className="hover:text-white transition-colors">이용약관</Link>
            <span className="text-gray-700">|</span>
            <Link to="/refund" className="hover:text-white transition-colors">취소 및 환불 정책</Link>
            <span className="text-gray-700">|</span>
            <Link to="/privacy" className="hover:text-white font-semibold text-gray-200">개인정보처리방침</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
