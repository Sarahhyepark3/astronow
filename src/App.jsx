import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Footer from './Footer'; 
import Terms from './pages/Terms'; 
import RefundPolicy from './pages/RefundPolicy'; 

// --- [1] 아이콘 컴포넌트 (기존 코드 유지) ---
const BookIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
);
const ChartIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></svg>
);
const BrainIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>
);
const HistoryIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 3v5h5"/><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"/><path d="M12 7v5l4 2"/></svg>
);
const DatabaseIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
);
const SearchIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>
);
const ChevronRight = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>
);
const StarIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
const BookmarkIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
);

// 🔮 점성술 용어 사전에 쓰일 데이터베이스 내부 정의
const ASTRO_DICTIONARY = [
  { term: '네이탈 차트 (Natal Chart)', definition: '개인이 태어난 그 순간, 그 장소에서 바라본 천체(태양, 달, 행성들)의 배열 상태를 그린 하늘의 지도입니다. 개인의 선천적 기질과 성향, 인생의 전반적인 잠재력을 분석하는 점성술의 가장 기본적이고 핵심적인 지도입니다.' },
  { term: '트랜짓 (Transit)', definition: '태어난 순간의 행성 배치가 아니라, "현재" 하늘을 실시간으로 흘러가고 있는 행성들의 위치를 말합니다. 내 탄생 차트 위로 현재 행성들이 지나가며 부딪힐 때 발생하는 환경적 변화나 시기별 운의 흐름을 예측할 때 사용합니다.' },
  { term: '프로펙션 (Profection)', definition: '시간에 따른 운의 변화를 도출하는 시간 관리 기법 중 하나로, 1년에 탄생 차트의 하우스(House)를 한 칸씩 이동시켜 해당 연도의 중심 테마와 나를 지배하는 시간의 주인(Lord of the Year)을 찾아내는 고전 기법입니다.' },
  { term: '화성 역행 (Mars Retrograde)', definition: '지구의 공전 속도 차이로 인해 하늘의 화성이 뒤로 가는 것처럼 보이는 착시 현상입니다. 점성술에서 화성은 에너지, 추진력, 행동을 담당하므로 역행 기간에는 과열된 갈등이 생기거나 진행하던 프로젝트의 전면 수정, 에너지 정체 현상이 일어날 수 있습니다.' },
  { term: '상승궁 (Ascendant / AC)', definition: '내가 태어난 시간, 동쪽 지평선에서 떠오르고 있던 별자리를 의미합니다. 타인에게 보여지는 나의 첫인상, 세상을 바라보는 나만의 렌즈, 그리고 나의 신체적 특징과 페르소나를 결정짓는 매우 중요한 지표입니다.' }
];

// --- [2] 메인 워크스페이스 컴포넌트 ---
function MainWorkspace() {
  const [rightPanelOpen, setRightPanelOpen] = useState(true);
  
  // 탭 제어를 위한 상태 (chart = 차트 화면, dictionary = 용어 사전 화면)
  const [currentTab, setCurrentTab] = useState('chart'); 
  
  // 용어 사전에 쓰일 검색어 상태
  const [searchTerm, setSearchTerm] = useState('');

  // 검색어에 걸러진 용어들만 뽑아내는 필터 로직
  const filteredTerms = ASTRO_DICTIONARY.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-1 overflow-hidden">
        {/* [Left Panel] */}
        <nav className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col flex-shrink-0">
            <div className="p-4">
                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-bold py-2.5 rounded-lg shadow-lg shadow-indigo-900/20 transition-all flex items-center justify-center gap-2 group">
                    <ChartIcon className="w-4 h-4 group-hover:scale-110 transition-transform"/>
                    <span>새 차트 열기</span>
                </button>
            </div>

            <div className="flex-1 overflow-y-auto px-3 space-y-6">
                <div>
                    <div className="flex items-center justify-between px-2 mb-2">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Recent Workspace</h3>
                    </div>
                    <ul className="space-y-1">
                        <li 
                          onClick={() => setCurrentTab('chart')}
                          className={`px-3 py-2 text-sm rounded-lg cursor-pointer flex items-center gap-3 transition-colors ${currentTab === 'chart' ? 'text-gray-100 bg-gray-800 border-l-2 border-indigo-500 shadow-sm' : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'}`}
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]"></span>
                            <span className="truncate font-medium">나의 네이탈 차트 심화</span>
                        </li>
                        <li 
                          onClick={() => setCurrentTab('dictionary')}
                          className={`px-3 py-2 text-sm rounded-lg cursor-pointer flex items-center gap-3 transition-colors ${currentTab === 'dictionary' ? 'text-gray-100 bg-gray-800 border-l-2 border-indigo-500 shadow-sm' : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'}`}
                        >
                            <SearchIcon className="w-4 h-4 text-indigo-400" />
                            <span className="truncate font-medium">점성술 용어 사전</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <div className="flex items-center justify-between px-2 mb-2">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">My Archives</h3>
                        <button className="text-xs text-indigo-400 hover:text-indigo-300">+</button>
                    </div>
                    <ul className="space-y-1">
                        <li className="px-3 py-2 text-sm text-gray-400 hover:text-gray-200 hover:bg-gray-800 rounded-lg cursor-pointer flex items-center gap-2 group">
                            <BookIcon className="w-4 h-4 text-gray-600 group-hover:text-indigo-400 transition-colors"/>
                            <span>유명인 차트 DB (50)</span>
                        </li>
                        <li className="px-3 py-2 text-sm text-gray-400 hover:text-gray-200 hover:bg-gray-800 rounded-lg cursor-pointer flex items-center gap-2 group">
                            <BookIcon className="w-4 h-4 text-gray-600 group-hover:text-purple-400 transition-colors"/>
                            <span>고전 점성술 노트</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="p-4 border-t border-gray-800">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span>System Operational</span>
                </div>
            </div>
        </nav>

        {/* [Center Panel] */}
        <main className="flex-1 bg-gray-950 flex flex-col min-w-0 relative">
            {/* 상단 탭 선택 바 */}
            <div className="h-10 bg-gray-900 border-b border-gray-800 flex items-center px-1 gap-1 pt-1">
                <div 
                  onClick={() => setCurrentTab('chart')}
                  className={`px-4 h-full flex items-center gap-2 text-sm border-gray-800 rounded-t-lg relative group cursor-pointer transition-colors ${currentTab === 'chart' ? 'text-gray-200 bg-gray-950 border-t border-x' : 'text-gray-500 hover:text-gray-300'}`}
                >
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    나의 네이탈 차트 심화
                    {currentTab === 'chart' && <div className="absolute top-0 left-0 w-full h-0.5 bg-indigo-500 rounded-t-lg"></div>}
                </div>
                <div 
                  onClick={() => setCurrentTab('dictionary')}
                  className={`px-4 h-full flex items-center gap-2 text-sm border-gray-800 rounded-t-lg relative group cursor-pointer transition-colors ${currentTab === 'dictionary' ? 'text-gray-200 bg-gray-950 border-t border-x' : 'text-gray-500 hover:text-gray-300'}`}
                >
                    <SearchIcon className="w-3.5 h-3.5 text-purple-400" />
                    점성술 용어 사전
                    {currentTab === 'dictionary' && <div className="absolute top-0 left-0 w-full h-0.5 bg-purple-500 rounded-t-lg"></div>}
                </div>
            </div>

            {/* 탭 가르기 로직 시작 */}
            {currentTab === 'chart' ? (
              /* [A] 기존 차트 대시보드 화면 */
              <div className="flex-1 p-6 overflow-y-auto grid grid-cols-12 gap-6">
                  <div className="col-span-7 flex flex-col gap-4">
                      <div className="bg-gray-900 rounded-xl border border-gray-800 shadow-2xl overflow-hidden flex flex-col h-full">
                          <div className="p-3 border-b border-gray-800 flex justify-between items-center bg-gray-900/50 backdrop-blur">
                              <div className="flex items-center gap-4">
                                  <div>
                                      <h2 className="text-sm font-bold text-gray-100">Natal Chart</h2>
                                      <p className="text-xs text-gray-500 font-mono">1990.05.15 14:30 Seoul</p>
                                  </div>
                                  <div className="h-4 w-px bg-gray-700"></div>
                                  <div className="flex gap-1">
                                      <button className="px-2 py-1 text-[10px] font-medium bg-indigo-900/30 text-indigo-300 border border-indigo-500/30 rounded hover:bg-indigo-900/50 transition-colors">Natal</button>
                                      <button className="px-2 py-1 text-[10px] font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors">Transit</button>
                                      <button className="px-2 py-1 text-[10px] font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors">Profection</button>
                                  </div>
                              </div>
                              <button className="text-gray-500 hover:text-yellow-400 transition-colors" title="이 차트를 아카이브에 저장">
                                  <BookmarkIcon className="w-5 h-5"/>
                              </button>
                          </div>

                          <div className="flex-1 relative bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-repeat flex items-center justify-center">
                               <div className="w-[400px] h-[400px] rounded-full border border-gray-700 relative flex items-center justify-center">
                                   <div className="absolute inset-0 border border-dashed border-gray-800 rounded-full m-16"></div>
                                   <div className="text-center opacity-40 hover:opacity-100 transition-opacity">
                                       <ChartIcon className="w-12 h-12 mx-auto mb-2 text-indigo-500"/>
                                       <span className="text-xs text-indigo-300 font-mono">Interactive SVG Chart Area</span>
                                   </div>
                                   <div className="absolute top-12 right-24 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold text-xs shadow-[0_0_15px_rgba(249,115,22,0.6)] cursor-pointer hover:scale-125 transition-transform z-10">☉</div>
                                   <div className="absolute bottom-24 left-12 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-black font-bold text-xs shadow-[0_0_15px_rgba(96,165,250,0.6)] cursor-pointer hover:scale-125 transition-transform z-10">☽</div>
                               </div>
                          </div>
                      </div>
                  </div>

                  <div className="col-span-5 flex flex-col gap-6 h-full">
                      <div className="bg-gray-900 rounded-xl border border-gray-800 shadow-lg flex-1 flex flex-col overflow-hidden">
                          <div className="p-3 border-b border-gray-800 flex justify-between items-center bg-gray-900">
                              <div className="flex items-center gap-2">
                                  <BookIcon className="w-4 h-4 text-purple-400"/>
                                  <span className="text-sm font-bold text-gray-200">Research Notes</span>
                              </div>
                              <span className="text-[10px] text-gray-500 flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span> Saved
                              </span>
                          </div>
                          <textarea 
                              className="flex-1 bg-gray-900/50 p-4 text-sm text-gray-300 resize-none focus:outline-none leading-relaxed font-sans placeholder-gray-600"
                              placeholder="이 차트에 대한 해석이나 아이디어를 기록하세요..."
                              defaultValue={"차트 분석 메모:\n\n1. 상승궁이 처녀자리로 수성의 상태가 중요함.\n2. 10하우스의 화성이 강력한 힘을 발휘하고 있음.\n\n[추가 연구 필요] : 토성의 위치가 7하우스 로드와..."}
                          ></textarea>
                      </div>

                      <div className="bg-gradient-to-br from-indigo-900/40 via-purple-900/20 to-gray-900 rounded-xl border border-indigo-500/30 p-5 relative overflow-hidden group">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                          <div className="flex items-center gap-2 mb-2 relative z-10">
                              <BrainIcon className="w-5 h-5 text-indigo-400"/>
                              <h3 className="text-sm font-bold text-indigo-100">AI Professional Report</h3>
                          </div>
                          <p className="text-xs text-gray-400 mb-4 relative z-10">현재 차트 구조를 바탕으로 전문 리포트를 생성합니다.</p>
                          <div className="space-y-2 relative z-10">
                               <button className="w-full text-left px-3 py-2 bg-gray-800/50 hover:bg-indigo-600/20 border border-gray-700/50 hover:border-indigo-500/50 rounded-lg text-xs text-gray-300 transition-all flex items-center justify-between group-hover:border-indigo-500/30">
                                  <span>❤️ 연애/결혼 심층 분석</span>
                                  <span className="opacity-0 group-hover:opacity-100 text-indigo-400">→</span>
                               </button>
                               <button className="w-full text-left px-3 py-2 bg-gray-800/50 hover:bg-indigo-600/20 border border-gray-700/50 hover:border-indigo-500/50 rounded-lg text-xs text-gray-300 transition-all flex items-center justify-between group-hover:border-indigo-500/30">
                                  <span>💼 커리어/직업 적성</span>
                                  <span className="opacity-0 group-hover:opacity-100 text-indigo-400">→</span>
                               </button>
                          </div>
                      </div>
                  </div>
              </div>
            ) : (
              /* [B] 🔍 추가된 점성술 용어 사전 전용 화면 */
              <div className="flex-grow p-6 overflow-y-auto max-w-4xl mx-auto w-full space-y-6">
                <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 shadow-2xl">
                  <h2 className="text-lg font-bold text-gray-100 mb-2 flex items-center gap-2">
                    <SearchIcon className="w-5 h-5 text-purple-400" />
                    점성술 용어 검색 라이브러리
                  </h2>
                  <p className="text-xs text-gray-400 mb-4">ASTRONOW 리포트 독해 및 차트 해석에 필요한 기초 개념 사전입니다.</p>
                  
                  {/* 사전 내 검색창 */}
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input 
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="행성명, 기법 이름 또는 키워드를 검색하세요... (ex. 트랜짓, 화성)"
                      className="w-full bg-gray-950 border border-gray-800 text-sm text-gray-200 rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/10 transition-all placeholder-gray-600"
                    />
                  </div>
                </div>

                {/* 결과 목록 리스트 카드 */}
                <div className="space-y-3">
                  {filteredTerms.length > 0 ? (
                    filteredTerms.map((item, idx) => (
                      <div key={idx} className="bg-gray-900/50 border border-gray-800/80 rounded-xl p-4 hover:border-gray-700 transition-all group">
                        <h4 className="text-sm font-bold text-purple-400 group-hover:text-purple-300 transition-colors mb-1">
                          {item.term}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                          {item.definition}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12 text-gray-500 text-sm border border-dashed border-gray-800 rounded-xl">
                      검색 조건에 맞는 용어가 데이터베이스에 없습니다.
                    </div>
                  )}
                </div>
              </div>
            )}
        </main>

        {/* [Right Panel] */}
        <aside className={`${rightPanelOpen ? 'w-80' : 'w-12'} bg-gray-900 border-l border-gray-800 transition-all duration-300 flex flex-col flex-shrink-0 z-10`}>
            <div className="h-10 border-b border-gray-800 flex items-center justify-between px-3 bg-gray-900">
                {rightPanelOpen && <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Astronow Insights</span>}
                <button onClick={() => setRightPanelOpen(!rightPanelOpen)} className="text-gray-500 hover:text-white p-1 rounded hover:bg-gray-800 transition-colors">
                    <ChevronRight className={`w-4 h-4 transition-transform ${rightPanelOpen ? '' : 'rotate-180'}`}/>
                </button>
            </div>

            {rightPanelOpen && (
                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                    <div>
                         <h4 className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
                            <StarIcon className="w-3 h-3"/>
                            Today's Astronow Pick
                         </h4>
                         <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 shadow-lg relative overflow-hidden">
                             <div className="absolute top-0 right-0 p-2 opacity-10"><ChartIcon className="w-20 h-20"/></div>
                             <div className="relative z-10 text-center">
                                 <div className="text-3xl font-bold text-white mb-1 drop-shadow-md">☽ ☌ ♃</div>
                                 <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-3">Moon Conjunct Jupiter</p>
                                 <div className="text-sm text-indigo-200 leading-relaxed font-medium">
                                     "오늘은 마음의 그릇이 넓어지는 날입니다. 사소한 실수에 연연하기보다 큰 그림을 그리세요."
                                 </div>
                             </div>
                             <button className="w-full mt-4 py-1.5 text-xs font-medium text-gray-400 bg-gray-900/50 rounded hover:text-white hover:bg-gray-800 transition-colors border border-gray-800">
                                 전체 해석 보기
                             </button>
                         </div>
                    </div>
                    <div className="pt-4 border-t border-gray-800">
                        <div className="flex items-center gap-2 mb-3 text-emerald-400">
                            <DatabaseIcon className="w-4 h-4"/>
                            <h4 className="text-sm font-bold">Data Lab Trends</h4>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-gray-800 rounded-lg border border-gray-700 p-3 hover:border-emerald-500/50 transition-all cursor-pointer group shadow-sm">
                                <h5 className="text-sm text-gray-200 font-medium mb-2 group-hover:text-emerald-400 transition-colors">화성 역행과 이직률</h5>
                                <div className="h-16 bg-gray-900/50 rounded mb-2 flex items-end justify-between px-2 pb-1 gap-1 border border-gray-800">
                                    <div className="w-1/5 bg-gray-700 h-4 rounded-t"></div>
                                    <div className="w-1/5 bg-emerald-600 h-10 rounded-t shadow-[0_0_10px_rgba(5,150,105,0.5)]"></div>
                                    <div className="w-1/5 bg-gray-700 h-6 rounded-t"></div>
                                    <div className="w-1/5 bg-gray-700 h-3 rounded-t"></div>
                                </div>
                                <div className="flex justify-between items-center text-[10px] text-gray-500">
                                    <span>Analysis #402</span>
                                    <span>Read More →</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </aside>
    </div>
  );
}

// --- [3] 최상위 App 컴포넌트 (기존 라우터 유지) ---
export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen bg-gray-900 text-gray-100 font-sans overflow-hidden">
        
        {/* 상단 헤더 */}
        <header className="h-14 bg-gray-950 border-b border-gray-800 flex items-center justify-between px-6 flex-shrink-0 z-20">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                        <StarIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-lg tracking-wider text-gray-100">ASTRONOW</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold mt-1">Workspace</span>
            </div>
            
            <div className="flex-1 max-w-2xl mx-8 relative group">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-indigo-400 transition-colors"/>
                <input 
                    type="text" 
                    placeholder="차트, 노트 검색 또는 '화성 역행' 같은 키워드 입력 (Cmd + K)" 
                    className="w-full bg-gray-900 border border-gray-800 text-sm text-gray-200 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-indigo-500/50 focus:bg-gray-800 focus:ring-4 focus:ring-indigo-500/10 transition-all placeholder-gray-600"
                />
            </div>

            <div className="flex items-center gap-4">
                 <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-colors relative">
                     <HistoryIcon className="w-5 h-5" />
                     <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full"></span>
                 </button>
                 <div className="w-8 h-8 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-xs font-bold text-indigo-300">SP</div>
            </div>
        </header>

        {/* 라우팅 영역 */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Routes>
            <Route path="/" element={<MainWorkspace />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund" element={<RefundPolicy />} />
          </Routes>
        </div>

        {/* 하단 푸터 */}
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}
