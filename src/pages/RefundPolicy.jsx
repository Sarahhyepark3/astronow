import React from 'react';

export default function Terms() {
  return (
    <div className="h-full overflow-y-auto bg-gray-950 text-gray-100 py-16 px-6 sm:px-12 font-sans">
      <div className="max-w-3xl mx-auto space-y-12">
        
        {/* 타이틀 영역 */}
        <div className="border-b border-gray-800 pb-6">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            취소 및 환불 정책
          </h1>
          <p className="text-xs text-gray-500 font-mono mt-2 uppercase tracking-wider">
            Refund & Cancellation Policy
          </p>
        </div>

        {/* 1. 일반 원칙 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-200 flex items-center gap-2">
            <span className="text-indigo-400">1.</span> 일반 원칙
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed pl-5">
            본 정책은 전자상거래 등에서의 소비자보호에 관한 법률(이하 '전자상거래법') 및 관련 규정을 준수하며, 
            <span className="text-gray-200 font-medium"> 아스트로나우(Astronow)</span>에서 제공하는 점성술 데이터 분석 서비스, 
            정기 구독권 및 단건 리포트 구매에 대한 취소 및 환불 기준을 규정합니다.
          </p>
        </section>

        {/* 2. 서비스 유형별 환불 기준 (표 영역) */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-gray-200 flex items-center gap-2">
            <span className="text-indigo-400">2.</span> 서비스 유형별 환불 기준
          </h2>
          <p className="text-sm text-gray-400 pl-5">
            아스트로나우의 서비스는 디지털 콘텐츠 특성에 따라 다음과 같이 환불 기준이 적용됩니다.
          </p>
          
          {/* 테이블 구조 */}
          <div className="overflow-x-auto pl-5 pt-2">
            <table className="w-full border-collapse text-left text-xs sm:text-sm border border-gray-800 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-900 text-gray-300 border-b border-gray-800 font-semibold">
                  <th className="p-3 sm:p-4 w-1/4">서비스 유형</th>
                  <th className="p-3 sm:p-4 w-3/8 text-emerald-400">환불 가능 기준</th>
                  <th className="p-3 sm:p-4 w-3/8 text-rose-400">환불 불가 기준 (법 제17조 2항)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 text-gray-400 bg-gray-900/30">
                <tr>
                  <td className="p-3 sm:p-4 font-medium text-gray-200 bg-gray-900/10">단건 데이터 리포트</td>
                  <td className="p-3 sm:p-4">결제 후 리포트 열람(생성) 전, <br/>구매일로부터 7일 이내</td>
                  <td className="p-3 sm:p-4 text-gray-500">결제 완료 후 시스템에서 리포트 생성이 완료되어 열람(제공)된 경우</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-medium text-gray-200 bg-gray-900/10">정기결제 (구독제)</td>
                  <td className="p-3 sm:p-4">결제 후 7일 이내, <br/>서비스 이용 이력이 없는 경우</td>
                  <td className="p-3 sm:p-4 text-gray-500">결제 후 7일이 경과하거나, 제공된 유료 기능(트랜짓, 차트 데이터 등)을 이용한 경우</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. 정기결제(구독) 해지 및 취소 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-200 flex items-center gap-2">
            <span className="text-indigo-400">3.</span> 정기결제(구독) 해지 및 취소
          </h2>
          <ul className="space-y-2 text-sm text-gray-400 pl-5 list-disc list-outside">
            <li>
              <span className="text-gray-200 font-semibold">다음 결제일 해지 (구독 취소):</span> 사용자는 언제든지 마이페이지를 통해 다음 결제일에 대한 정기결제 해지를 예약할 수 있습니다. 이 경우 이미 결제된 해당 주기의 이용권은 잔여 기간 동안 정상 유지되며, 다음 결제일부터 요금이 청구되지 않습니다.
            </li>
            <li>
              <span className="text-gray-200 font-semibold">중도 해지 및 환불:</span> 구독 결제일로부터 7일 이내에 유료 데이터를 열람하지 않은 경우 전액 환불이 가능합니다. 단, 유료 기능을 1회 이상 사용한 경우에는 해당 결제 주기의 부분 환불이 불가하며 잔여 기간 동안 서비스가 정상 유지됩니다.
            </li>
          </ul>
        </section>

        {/* 4. 단건 결제 환불 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-200 flex items-center gap-2">
            <span className="text-indigo-400">4.</span> 단건 결제 (데이터 분석 리포트) 환불
          </h2>
          <ul className="space-y-2 text-sm text-gray-400 pl-5 list-disc list-outside">
            <li>
              단건으로 구매하는 맞춤형 점성술 리포트는 결제 완료와 동시에 소프트웨어를 통해 개별 데이터가 즉시 연산 및 제공되는 <span className="text-purple-400">‘디지털 콘텐츠’</span>입니다.
            </li>
            <li>
              결제 후 리포트가 생성되어 화면에 출력되거나 다운로드 가능한 상태가 된 경우, 디지털 콘텐츠의 제공이 개시된 것으로 보아 전자상거래법에 의거 청약철회(환불)가 제한됩니다.
            </li>
            <li>
              시스템 오류 또는 기술적 장애로 인해 결제 후 리포트가 정상적으로 생성되지 않은 경우, 고객센터로 문의하시면 확인 후 <span className="text-gray-200 font-semibold">100% 전액 환불</span> 처리됩니다.
            </li>
          </ul>
        </section>

        {/* 5. 환불 신청 절차 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-200 flex items-center gap-2">
            <span className="text-indigo-400">5.</span> 환불 신청 절차
          </h2>
          <ul className="space-y-2 text-sm text-gray-400 pl-5 list-disc list-outside">
            <li>
              <span className="text-gray-200 font-semibold">신청 방법:</span> 마이페이지 내 [결제 내역] 메뉴 또는 고객센터 이메일을 통해 접수하실 수 있습니다.
            </li>
            <li>
              <span className="text-gray-200 font-semibold">처리 기간:</span> 환불 요청이 접수 및 승인된 후, 결제 수단에 따라 영업일 기준 3~7일 내에 승인 취소 또는 지정된 계좌로 환불액이 입금됩니다. (PG사 및 카드사 사정에 따라 소요 기간이 달라질 수 있습니다.)
            </li>
          </ul>
        </section>

        {/* 이메일 컴포넌트 안내 팁 */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-xs text-gray-500 leading-relaxed">
          💡 환불 관련 문의사항은 <span className="text-indigo-400 font-medium">admin@astronow.co.kr</span>으로 메일을 보내주시면 신속하게 안내해 드리겠습니다. 이전 푸터에 맞춰 접수처를 일원화했습니다.
        </div>

      </div>
    </div>
  );
}
