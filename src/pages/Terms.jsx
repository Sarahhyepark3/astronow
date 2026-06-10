import React from 'react';

export default function Terms() {
  return (
    // h-full overflow-y-auto 설정으로 스크롤이 시원하게 작동합니다.
    <div className="h-full overflow-y-auto bg-gray-950 text-gray-300 p-8 sm:p-20 font-sans">
      <div className="max-w-3xl mx-auto bg-gray-900 border border-gray-800 p-6 sm:p-10 rounded-xl shadow-2xl">
        <h1 className="text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-4">이용약관</h1>
        
        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="font-bold text-indigo-400 mb-3 text-lg">제1조 (목적)</h2>
            <p className="text-gray-400">
              본 약관은 아스트로나우(astronow)(이하 '회사')가 운영하는 웹사이트 및 애플리케이션에서 제공하는 점성술 데이터 분석 서비스, 디지털 리포트 및 관련 제반 서비스(이하 '서비스')의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적이로 합니다.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-indigo-400 mb-3 text-lg">제2조 (용어의 정의)</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
              <li><strong className="text-gray-200">회원:</strong> 회사와 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 고객을 말합니다.</li>
              <li><strong className="text-gray-200">디지털 콘텐츠:</strong> 회사가 웹사이트를 통해 제공하는 네이탈 차트, 트랜짓 데이터, AI 데이터 분석 리포트 등 일체의 디지털 정보를 말합니다.</li>
              <li><strong className="text-gray-200">구독 서비스:</strong> 회원이 정기적으로 일정 대가를 지급하고 특정 기간 동안 유료 기능을 제한 없이 이용하는 서비스를 말합니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-indigo-400 mb-3 text-lg">제3조 (약관의 명시와 개정)</h2>
            <p className="text-gray-400">
              1. 회사는 본 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 화면에 게시합니다.<br />
              2. 회사는 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있으며, 약관이 개정될 경우 적용일자 및 개정사유를 명시하여 현행 약관과 함께 서비스 화면에 그 적용일자 7일 전부터 공지합니다.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-indigo-400 mb-3 text-lg">제4조 (서비스의 제공 및 변경)</h2>
            <p className="text-gray-400">
              1. 회사는 회원에게 천체 연산 엔진을 기반으로 한 점성술 차트 생성, 연구 데이터 랩, AI 리포트 생성 등의 서비스를 제공합니다.<br />
              2. 회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신두절 또는 운영상 상당한 이유가 있는 경우 서비스의 제공을 일시적으로 중단할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-indigo-400 mb-3 text-lg">제5조 (유료 서비스의 이용 및 환불)</h2>
            <p className="text-gray-400">
              1. 회사가 제공하는 단건 리포트 및 정기 구독 서비스는 유료로 제공되며, 구체적인 결제 금액과 조건은 각 서비스 화면에 표시된 바에 따릅니다.<br />
              2. 본 서비스는 결제와 동시에 데이터 연산 및 디지털 콘텐츠 제공이 개시되는 특성을 가집니다. 따라서 리포트가 생성 및 제공된 이후에는 전자상거래법 제17조 제2항에 의거하여 원칙적으로 청약철회(환불)가 제한됩니다. 상세한 기준은 별도의 '취소 및 환불 정책'에 따릅니다.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-indigo-400 mb-3 text-lg">제6조 (지식재산권 및 이용 제한)</h2>
            <p className="text-gray-400">
              1. 회사가 작성한 저작물, 점성술 해석 텍스트, 알고리즘, 연산 시스템 및 웹사이트 디자인에 대한 저작권 기타 지식재산권은 회사에 귀속됩니다.<br />
              2. 회원은 서비스를 이용함으로써 얻은 정보 중 회사에게 지식재산권이 귀속된 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-indigo-400 mb-3 text-lg">제7조 (회사의 면책조항 - 점성술 서비스 특례)</h2>
            <p className="text-gray-400">
              1. 회사가 제공하는 점성술 데이터 분석 및 AI 리포트 결과물은 고전 기법과 천체 연산에 기반한 데이터 분석 자료이며, 과학적 사실을 증명하거나 특정 미래를 확정적으로 예측하지 않습니다.<br />
              2. 회사는 서비스 내에서 제공되는 정보의 정확성, 신뢰성에 대해 보장하지 않으며, 회원이 본 서비스의 데이터나 해석을 바탕으로 내린 개인적·상업적 결정(투자, 직업 변경, 계약 등 일체의 행위)으로 인해 발생한 결과에 대하여 회사는 책임을 지지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-indigo-400 mb-3 text-lg">제8조 (관할법원)</h2>
            <p className="text-gray-400">
              회사와 회원 간에 발생한 전자상거래 분쟁에 관한 소송은 제소 당시의 회원 주소에 의하고, 주소가 없는 경우에는 거소를 관할하는 지방법원의 전용관할로 합니다. 다만, 제소 당시 회원의 주소 또는 거소가 분명하지 않거나 외국 거주자의 경우에는 민사소송법상의 관할법원에 제기합니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
