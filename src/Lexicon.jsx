import React, { useState, useEffect } from 'react';

// 🔮 Korean_utf8.lan 기반 매핑 데이터셋 및 전문 해설서 완비
const LAN_DICTIONARY = [
  // [Category: planets] 행성 및 천체
  { eng: "Sun", kor: "태양", cat: "planets", glyph: "☉", pron: "선", desc: "낮 차트(Diurnal)의 핵심 섹트 라이트(Sect Light)이자 자아와 영혼의 정체성을 주관하는 천체입니다.", tip: "차트의 중심 태양이 빛나는 하우스는 본인이 명예를 추구하는 핵심 영역이 됩니다." },
  { eng: "Moon", kor: "달", cat: "planets", glyph: "☽", pron: "문", desc: "밤 차트(Nocturnal)의 중심 섹트 라이트이며 감정과 신체, 유년기의 기억을 관장합니다.", tip: "달 애스펙트 분석(Lunar Scope)을 통해 무의식적 방어기제와 생활 기질을 파악합니다." },
  { eng: "Mercury", kor: "수성", cat: "planets", glyph: "☿", pron: "머큐리", desc: "커뮤니케이션, 분석, 이성적 사고와 도구 활용을 담당하는 전령의 행성입니다.", tip: "역행(Retrograde) 시기에는 소통 오류와 데이터 유실을 점검해야 하는 단골 지표입니다." },
  { eng: "Venus", kor: "금성", cat: "planets", glyph: "♀", pron: "비너스", desc: "조화와 사랑, 개인의 가치관과 타인을 끌어당기는 사교적 자력을 의미하는 소길성입니다.", tip: "차트에서 디그니티가 좋으면 뛰어난 예술적 감각과 대인관계의 평화를 선물합니다." },
  { eng: "Mars", kor: "화성", cat: "planets", glyph: "♂", pron: "마스", desc: "에너지와 추진력, 결단과 경쟁심을 유발하는 고대 전사의 소흉성입니다.", tip: "낮 차트에서는 과열된 갈등을, 밤 차트에서는 영리한 개척력과 돌파력으로 발현됩니다." },
  { eng: "Jupiter", kor: "목성", cat: "planets", glyph: "♃", pron: "주피터", desc: "확장과 기회, 행운과 종교적/철학적 지혜를 무한히 넓혀주는 최고의 대길성입니다.", tip: "목성이 주관하는 하우스와 통과하는 트랜짓 영역은 큰 보호와 번영의 기회가 주어집니다." },
  { eng: "Saturn", kor: "토성", cat: "planets", glyph: "♄", pron: "새턴", desc: "구조, 인내, 규칙, 제한과 긴 시간에 걸친 책임감을 주관하는 대흉성입니다.", tip: "혹독한 시련을 주지만, 인내 끝에 절대로 무너지지 않는 실체적인 성취를 보장합니다." },
  { eng: "Fixed stars", kor: "항성", cat: "planets", glyph: "⭐", pron: "픽스드 스타즈", desc: "스피카, 레굴루스 등 움직이지 않는 먼 항성들의 강력하고 극적인 에너지 기법입니다.", tip: "행성과 오차 1도 미만으로 결합할 때 운명에 폭발적인 영예나 급격한 반전을 일으킵니다." },
  { eng: "Uranus", kor: "천왕성", cat: "planets", glyph: "♅", pron: "우라누스", desc: "돌발적인 변혁, 혁명, 기존 시스템의 파괴와 독립성을 뜻하는 현대 외행성입니다.", tip: "예측 불가능한 깨어남과 분리, 새로운 패러다임의 등장을 예고하는 지표입니다." },
  { eng: "Neptune", kor: "해왕성", cat: "planets", glyph: "♆", pron: "넵튠", desc: "이상주의, 예술적 트랜스, 안개 같은 혼돈과 영성, 경계의 해체를 주관합니다.", tip: "차트에서 부정적으로 엮이면 기만이나 중독을, 긍정적이면 초월적 영감을 발휘합니다." },
  { eng: "Pluto", kor: "명왕성", cat: "planets", glyph: "♇", pron: "플루토", desc: "파괴와 재생, 지하 세계의 거대한 권력과 거부할 수 없는 숙명적 변형을 의미합니다.", tip: "완전한 소멸을 거쳐 새롭게 부활하는 거대한 터닝포인트를 생성하는 힘입니다." },

  // [Category: houses] 하우스 및 하우스시스템
  { eng: "Ascendant", kor: "어센던트 (ASC)", cat: "houses", glyph: "ASC", pron: "어센던트", desc: "출생 당시 동쪽 지평선에서 떠오르던 지점으로, 개인의 외모, 첫인상, 페르소나를 결정합니다.", tip: "어센던트 주인을 'AS주인(RulerAs)'이라고 부르며, 인생 항로의 선장을 의미합니다." },
  { eng: "Midheaven", kor: "미드헤븐 (MC)", cat: "houses", glyph: "MC", pron: "미드헤븐", desc: "천공의 가장 높은 남중점으로, 직업적 성취, 사회적 지위, 명예와 대외적 평판을 지배합니다.", tip: "MC주인(RulerMC)이 강하게 배치될 때 커리어에서 독보적인 두각을 드러내기 쉽습니다." },
  { eng: "Whole Sign Houses", kor: "홀사인", cat: "houses", glyph: "WSH", pron: "홀사인", desc: "하나의 별자리(Sign)를 통째로 하나의 하우스로 귀속시키는 고대 헬레니즘의 근본 하우스 기법입니다.", tip: "행성의 영역적 길흉과 구조를 가장 명확하고 오차 없이 파악할 수 있는 정석 체계입니다." },
  { eng: "Placidus", kor: "플라시두스", cat: "houses", glyph: "PLA", pron: "플라시두스", desc: "시간을 기반으로 공간을 분할하는 현대 점성술에서 가장 대중적으로 활용되는 하우스 시스템입니다.", tip: "위도에 따라 하우스 크기가 불균형해지는 특성이 있어 고위도 지역 분석 시 유의해야 합니다." },
  { eng: "Regiomontanus", kor: "레기오몬타누스", cat: "houses", glyph: "REG", pron: "레기오몬타누스", desc: "적도를 기준으로 3차원 공간을 분할하는 중세 전통 점성술 및 호라리(Horary)의 표준 하우스입니다.", tip: "윌리엄 릴리 등 중세 대가들이 사건의 타이밍과 적중률을 높이기 위해 적극 차용했습니다." },
  { eng: "Campanus", kor: "캄파누스", cat: "houses", glyph: "CAM", pron: "캄파누스", desc: "지평선 위의 수직 주천원을 기본 축으로 삼아 행성의 입체적 공간감을 극대화한 시스템입니다.", tip: "지구 중심의 에너지 발현 방향을 현실적으로 추적할 때 유용하게 쓰입니다." },
  { eng: "Alcabitus", kor: "알카비투스", cat: "houses", glyph: "ALC", pron: "알카비투스", desc: "헬레니즘과 중세 아랍 점성학의 가교 역할을 한 사분면 기반의 전통 하우스 시스템입니다.", tip: "귀도 보나티 등 중세 전성기 시절 행성의 알무텐 점수를 정밀 계산할 때 표준으로 쓰였습니다." },

  // [Category: aspects] 애스펙트 및 천체 상태
  { eng: "Conjunctions", kor: "컨정션 (0도)", cat: "aspects", glyph: "☌", pron: "컨정션", desc: "두 천체가 한 치의 오차 없이 결합하여 서로의 에너지가 완전히 융합되는 가장 강력한 길흉 교차각입니다.", tip: "길성과 엮이면 폭발적인 시너지를, 흉성과 결합하면 에너지가 억압되거나 손상되는 경향을 보입니다." },
  { eng: "Sextiles", kor: "섹스타일 (60도)", cat: "aspects", glyph: "⚹", pron: "섹스타일", desc: "행성 상호 간에 조화로운 기회와 소통의 창구를 열어주는 편안한 우호의 각도(조화각)입니다.", tip: "트라인만큼 강하지는 않지만, 본인이 적극적으로 행동할 때 행운의 징검다리를 놓아줍니다." },
  { eng: "Square", kor: "스퀘어 (90도)", cat: "aspects", glyph: "☐", pron: "스퀘어", desc: "서로 다른 원소가 충돌하며 내부적 저항, 긴장감, 조율해야 하는 마찰을 일으키는 대표적 흉각입니다.", tip: "스트레스를 유발하지만, 이를 극복해 냈을 때 역동적인 사회적 성공을 만들어내는 원동력이 됩니다." },
  { eng: "Trine", kor: "트라인 (120도)", cat: "aspects", glyph: "△", pron: "트라인", desc: "동일한 원소(삼합)끼리 만나 아무런 저항 없이 에너지가 물 흐르듯 자연스럽게 소통하는 최고의 길각입니다.", tip: "선천적인 재능이나 환경적 혜택을 의미하며, 별다른 노력 없이도 유연하게 일의 결실을 맺게 돕습니다." },
  { eng: "Opposition", kor: "어포지션 (180도)", cat: "aspects", glyph: "☍", pron: "어포지션", desc: "두 천체가 정면으로 대치하여 강렬한 대립, 시소게임 같은 극단적 저울질을 일으키는 긴장각입니다.", tip: "대인관계나 외부 환경과의 투쟁으로 발현되기 쉬우며, 타협과 객관적인 중심잡기가 평생의 과제가 됩니다." },
  { eng: "Void of Course", kor: "보이드 오브 코스 (VOC)", cat: "aspects", glyph: "VOC", pron: "보이드 오브 코스", desc: "달이 다음 별자리로 넘어가기 전까지 다른 행성과 아무런 주요 각도도 맺지 않는 공허의 주기입니다.", tip: "이 시기에 추진하는 중대 계약이나 발족은 실속 없이 무(無)로 돌아가기 쉬우니 이완과 휴식을 권장합니다." },
  { eng: "Combust", kor: "컴버스트 (태양에 탐)", cat: "aspects", glyph: "☄️", pron: "컴버스트", desc: "행성이 태양빛의 중심부(8.5도 이내)에 들어가 눈이 멀고 고유 역량이 증발해버린 심각한 손상 상태입니다.", tip: "다만 17분(0.28도) 이내로 완전히 밀착하면 황제의 품에 안기는 '카지미(Cazimi)' 상태가 되어 대길해집니다." },
  { eng: "Retrograde", kor: "역행", cat: "aspects", glyph: "Rx", pron: "레트로그레이드", desc: "지구 시점에서 천체가 뒤로 가는 것처럼 보이는 현상으로, 에너지의 내부 지체와 숙성을 뜻합니다.", tip: "도망치거나 실패하는 것이 아니라, 내면의 깊은 성찰과 재검토를 거쳐 완성도를 높이는 시간입니다." },

  // [Category: techniques] 디그니티 및 운세 기법
  { eng: "Victor of the Chart", kor: "알무텐 (Victor / 과객)", cat: "techniques", glyph: "👑", pron: "알무텐 무그테즈", desc: "차트 전체 혹은 특정 지점에서 가산점 점수(Scores)를 가장 많이 획득한 실질적 최고 지배 행성입니다.", tip: "어센던트 주인이 겉모습이라면, 알무텐은 인생의 위기 상황에서 본능적으로 승리를 이끄는 영혼의 열쇠입니다." },
  { eng: "Profections", kor: "프로펙션", cat: "techniques", glyph: "PROF", pron: "프로펙션", desc: "매년 생일을 기점으로 하우스를 한 칸씩 전진시켜 그 해의 주인공인 연주(Lord of the Year)를 도출합니다.", tip: "올해 내 삶의 스포트라이트가 대인관계(7하우스)에 꽂힐지, 재물(2하우스)에 꽂힐지 알려주는 직관적 기법입니다." },
  { eng: "Firdaria", kor: "피르다리아", cat: "techniques", glyph: "FIR", pron: "피르다리아", desc: "인생의 거시적 타임라인을 각 행성이 분할하여 통치하는 페르시아-중세 전통의 메이저 대운 기법입니다.", tip: "현재 내가 토성 대운에 있는지, 목성 대운에 있는지에 따라 장기적인 인생의 계절을 예측합니다." },
  { eng: "Hyleg", kor: "힐렉", cat: "techniques", glyph: "HYL", pron: "힐렉", desc: "출생 차트에서 생명 에너지의 정수, 신체적 면역력과 생명줄을 쥐고 있는 생명의 수호 지점입니다.", tip: "낮의 태양이나 밤의 달을 우선 검토하며, 힐렉이 흉성에게 타격을 입을 때 건강의 큰 고비를 진단합니다." },
  { eng: "Anareta", kor: "아나레타", cat: "techniques", glyph: "ANA", pron: "아나레타", desc: "생명 수호 천사인 힐렉을 정면으로 타격하여 파괴하고 위협하는 차트 내 최고의 살성(흉성)을 뜻합니다.", tip: "안전 주기나 수명을 예측할 때 중요하게 주시하며 주로 8하우스(죽음)의 에너지와 강하게 정렬됩니다." },
  { eng: "Zodiacal Releasing", kor: "조디악 릴리징", cat: "techniques", glyph: "ZR", pron: "조디악 릴리징", desc: "포르투나랏과 스피릿랏을 기준으로 인생의 커리어 전성기와 영혼의 탐구 주기를 격렬하게 풀어내는 비기입니다.", tip: "인생의 루즈타임(Loosing의 시기)과 피크 타임(Peak)을 기가 막히게 분별해 주는 강력한 고전 시간 기법입니다." }
];

const CATEGORIES = {
  all: { label: "전체보기", emoji: "🔮" },
  planets: { label: "행성 & 항성", emoji: "🪐" },
  houses: { label: "하우스 & 시스템", emoji: "🏠" },
  aspects: { label: "각도 & 행성상태", emoji: "📐" },
  techniques: { label: "고전 비기 & 대운", emoji: "⏳" }
};

export default function Lexicon() {
  const [currentFilter, setCurrentFilter] = useState('all');
  const [activeTerm, setActiveTerm] = useState(LAN_DICTIONARY[0]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // 퀴즈 관련 상태
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizState, setQuizState] = useState('playing'); // playing, answered, finished
  const [quizOptions, setQuizOptions] = useState([]);
  const [selectedAns, setSelectedAns] = useState('');

  // 컴포넌트 마운트 시 퀴즈 세팅
  useEffect(() => {
    startNewQuiz();
  }, []);

  const handleSearch = () => {
    return LAN_DICTIONARY.filter(item => {
      const matchCategory = currentFilter === 'all' || item.cat === currentFilter;
      const matchText = item.eng.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        item.kor.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.tip.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchText;
    });
  };

  const filteredList = handleSearch();

  // 퀴즈 생성 로직
  const startNewQuiz = () => {
    const shuffled = [...LAN_DICTIONARY].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);
    setQuizQuestions(selected);
    setQuizIdx(0);
    setQuizScore(0);
    setQuizState('playing');
    generateQuizOptions(selected[0], LAN_DICTIONARY);
  };

  const generateQuizOptions = (correctQ, allData) => {
    const wrongs = allData
      .filter(d => d.eng !== correctQ.eng)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(d => d.kor);
    const combined = [...wrongs, correctQ.kor].sort(() => 0.5 - Math.random());
    setQuizOptions(combined);
  };

  const submitAnswer = (chosen) => {
    setSelectedAns(chosen);
    const correct = quizQuestions[quizIdx].kor;
    if (chosen === correct) {
      setQuizScore(prev => prev + 1);
    }
    setQuizState('answered');
  };

  const nextQuestion = () => {
    const nextIdx = quizIdx + 1;
    if (nextIdx >= quizQuestions.length) {
      setQuizState('finished');
    } else {
      setQuizIdx(nextIdx);
      setQuizState('playing');
      generateQuizOptions(quizQuestions[nextIdx], LAN_DICTIONARY);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 py-12 px-4 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* 상단 타이틀 헤더 */}
        <header className="text-center space-y-3 border-b border-gray-800 pb-8">
          <div className="inline-block bg-indigo-900/30 border border-indigo-500/30 text-indigo-400 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase">
            Planetdance Translation Companion
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-widest bg-gradient-to-r from-amber-400 via-yellow-100 to-indigo-400 bg-clip-text text-transparent">
            COSMIC LEXICON
          </h1>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
            업로드된 <span className="text-amber-400 font-mono">Korean_utf8.lan</span> 한글 패치 공식 규격을 바탕으로 빌드된 점성학 전문 사전입니다. 대시보드 리딩 및 번역 가이드 지침서로 활용하세요.
          </p>
        </header>

        {/* 퀵 점프 기호바 */}
        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs font-bold text-amber-400 tracking-wider flex items-center gap-2">✨ 상징 기호 퀵 내비게이션:</span>
          <div className="flex flex-wrap justify-center gap-2">
            {LAN_DICTIONARY.slice(0, 7).map((item, i) => (
              <button 
                key={i} 
                onClick={() => { setSearchTerm(''); setCurrentFilter('all'); setActiveTerm(item); }}
                className="w-9 h-9 rounded-full bg-gray-950 border border-gray-800 hover:border-amber-400 hover:text-amber-400 flex items-center justify-center font-mono text-lg transition-all"
                title={item.eng}
              >
                {item.glyph}
              </button>
            ))}
          </div>
        </div>

        {/* 메인 사전 레이아웃 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 왼쪽 컨트롤 창 (7/12) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* 검색기능 */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="relative w-full md:w-3/4">
                <input 
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="영문 이름, 한글 번역 단어, 기법 키워드 검색..."
                  className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-2.5 pl-10 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 text-sm">🔍</span>
                {searchTerm && <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">✕</button>}
              </div>
              <div className="text-right whitespace-nowrap min-w-[70px]">
                <span className="text-[10px] text-gray-500 block uppercase">정렬된 단어</span>
                <span className="text-lg font-bold text-amber-400 font-mono">{filteredList.length}개</span>
              </div>
            </div>

            {/* 카테고리 탭 조절 */}
            <div className="flex flex-wrap gap-1.5">
              {Object.keys(CATEGORIES).map(cat => (
                <button
                  key={cat}
                  onClick={() => { setCurrentFilter(cat); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${currentFilter === cat ? 'bg-amber-400 text-gray-950 font-bold' : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-gray-700'}`}
                >
                  <span>{CATEGORIES[cat].emoji}</span>
                  <span>{CATEGORIES[cat].label}</span>
                </button>
              ))}
            </div>

            {/* 리스트 출력 보드 */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 max-h-[500px] overflow-y-auto p-2 space-y-1">
              {filteredList.length > 0 ? (
                filteredList.map((item, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setActiveTerm(item)}
                    className={`p-3 rounded-lg flex items-center justify-between cursor-pointer transition-all ${activeTerm.eng === item.eng ? 'bg-indigo-950/40 border border-indigo-500/40' : 'hover:bg-gray-800/40 border border-transparent'}`}
                  >
                    <div className="flex items-center gap-3 truncate">
                      <div className="w-8 h-8 rounded-full bg-gray-950 flex items-center justify-center font-mono text-indigo-400 font-bold text-sm border border-gray-800">{item.glyph}</div>
                      <div className="truncate">
                        <h4 className="text-sm font-bold text-gray-100 flex items-center gap-2">
                          <span>{item.kor}</span>
                          <span className="text-xs text-amber-400/70 font-mono font-light">[{item.eng}]</span>
                        </h4>
                        <p className="text-xs text-gray-500 truncate max-w-md font-light">{item.desc}</p>
                      </div>
                    </div>
                    <span className="text-gray-700 text-xs">➔</span>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-gray-600 text-xs font-light">일치하는 수록 용어가 데이터베이스에 존재하지 않습니다.</div>
              )}
            </div>

          </div>

          {/* 오른쪽 프리뷰 디테일 대형 패널 (5/12) */}
          <div className="lg:col-span-5 lg:sticky lg:top-6 bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6 relative overflow-hidden shadow-2xl">
            <div className="absolute -right-8 -bottom-8 text-[10rem] text-gray-900/10 font-serif select-none pointer-events-none">{activeTerm.glyph}</div>
            
            <div className="relative z-10 space-y-5">
              <div className="flex justify-between items-center">
                <span className="bg-gray-950 border border-gray-800 text-[10px] text-amber-400 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <span>{CATEGORIES[activeTerm.cat]?.emoji}</span>
                  <span>{CATEGORIES[activeTerm.cat]?.label}</span>
                </span>
                <span className="text-[10px] text-gray-600 font-mono">Lan Standard</span>
              </div>

              <div>
                <span className="text-[10px] text-indigo-400 font-mono uppercase tracking-wider block">Astrology Cosmic Word</span>
                <h2 className="text-2xl font-bold text-gray-100 flex items-center gap-2 mt-0.5">
                  <span>{activeTerm.kor}</span>
                  <span className="text-sm text-amber-400 font-mono font-light">{activeTerm.eng}</span>
                </h2>
                <p className="text-[10px] text-gray-500 mt-1 font-mono">발음: [{activeTerm.pron}] | 매핑 심볼 기호: {activeTerm.glyph}</p>
              </div>

              <div className="h-px bg-gradient-to-r from-gray-800 to-transparent"></div>

              <div className="space-y-1">
                <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">💡 상세 정의 (Description)</h5>
                <p className="text-xs text-gray-300 leading-relaxed font-light">{activeTerm.desc}</p>
              </div>

              <div className="bg-gray-950 border-l-2 border-indigo-500 p-3 rounded-r-lg space-y-1">
                <h5 className="text-[11px] font-bold text-indigo-400 tracking-wider flex items-center gap-1">🪐 실전 차트 해석 비법</h5>
                <p className="text-[11px] text-gray-400 leading-relaxed font-light">{activeTerm.tip}</p>
              </div>
            </div>
          </div>

        </div>

        {/* 하단 보너스 미니 게임 코너: 우주 등급 테스트 */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-800 pb-4">
            <div>
              <h2 className="text-lg font-bold text-amber-400 flex items-center gap-1.5">🌌 우주 등급 복습 테스트</h2>
              <p className="text-xs text-gray-500">지침 규격 사전을 제대로 학습했는지 미니 테스트로 증빙하세요.</p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="text-gray-400">현재 성적 지표: <b class="text-indigo-400 text-sm font-mono">{quizScore}</b> / 5</span>
              <button onClick={startNewQuiz} className="bg-amber-400 hover:bg-amber-300 text-gray-950 font-bold px-3 py-1.5 rounded-lg text-[11px] transition-colors">테스트 초기화</button>
            </div>
          </div>

          <div className="bg-gray-950 border border-gray-800 rounded-xl p-4 min-h-[160px] flex flex-col justify-center">
            {quizQuestions.length > 0 && quizState === 'playing' && (
              <div className="space-y-4">
                <div className="flex justify-between text-[11px] text-gray-500 font-mono"><span>QUESTION 0{quizIdx + 1} / 05</span><span>힌트 심볼: {quizQuestions[quizIdx].glyph}</span></div>
                <h3 className="text-base font-bold text-gray-200">다음 영문 점성술 표기에 대칭되는 <span className="text-indigo-400 font-extrabold">올바른 번역어</span>는 무엇입니까?</h3>
                <h4 className="text-xl font-bold font-mono text-amber-400">{quizQuestions[quizIdx].eng}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2">
                  {quizOptions.map((opt, i) => (
                    <button key={i} onClick={() => submitAnswer(opt)} className="text-left bg-gray-900 border border-gray-800 hover:border-indigo-500 rounded-lg p-3 text-xs text-gray-300 hover:bg-indigo-950/20 transition-all">{opt}</button>
                  ))}
                </div>
              </div>
            )}

            {quizQuestions.length > 0 && quizState === 'answered' && (
              <div className="text-center py-4 space-y-3">
                <div className="text-3xl">{selectedAns === quizQuestions[quizIdx].kor ? '✅' : '❌'}</div>
                <h4 className={`text-sm font-bold ${selectedAns === quizQuestions[quizIdx].kor ? 'text-indigo-400' : 'text-rose-400'}`}>
                  {selectedAns === quizQuestions[quizIdx].kor ? '정답입니다!' : '아쉽습니다. 오답입니다.'}
                </h4>
                <p className="text-xs text-gray-500">선택한 답: [{selectedAns}] | 규격서 정답 표기: <span className="text-amber-400 font-bold">[{quizQuestions[quizIdx].kor}]</span></p>
                <button onClick={nextQuestion} className="bg-gray-800 text-gray-200 px-4 py-2 rounded-lg text-xs font-semibold hover:bg-gray-700 transition-colors">다음 문항 연산하기 ➔</button>
              </div>
            )}

            {quizState === 'finished' && (
              <div className="text-center py-6 space-y-2">
                <div className="text-3xl">🏆</div>
                <h4 className="text-sm font-bold text-amber-400">우주 연산 지표 검증 완료!</h4>
                <p className="text-xs text-gray-300">최종 획득 스코어: <span className="text-indigo-400 font-bold">{quizScore} / 5</span> 점</p>
                <button onClick={startNewQuiz} className="mt-2 bg-indigo-600 text-white font-bold px-4 py-2 rounded-lg text-xs hover:bg-indigo-500 transition-colors">한 번 더 측정하기</button>
              </div>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
