// =====================================================
// modal-data.js — 모달 데이터 + JavaScript 로직
// =====================================================
// 
// 구조:
// 1. MD 객체 — 각 모달의 데이터 (tag, title, dark, html)
//    키 목록: aa1, aa2, aa3, aa4, aa5 (AARRR)
//             sg1, sg2 (세그먼테이션)
//             jn1, jn2, jn3, jn4 (고객 여정)
//
// 2. openM(id)  — 모달 열기
// 3. closeM()   — 모달 닫기
// 4. togA(btn)  — 아코디언 토글
// 5. applyWatch() / updateWatch() — 히어로 이미지 위치 조정
// =====================================================

const MD={
aa1:{tag:'AARRR · 획득',title:'A — 고객 획득 전략',dark:false,html:`
<p>잠재 고객을 자사 채널로 유입시키는 단계. 블로그·SNS·광고·커뮤니티·인플루언서 5가지 채널을 병행 운영했습니다.</p>
<div class="mg3">
  <div class="mc"><h4>블로그 운영</h4><ul><li>시계 키워드 분석 후 주 1–2건 발행</li><li>최고 조회수 3,812 / 이웃 1,060명 달성</li><li>커스벤 스토리·제품 소개 콘텐츠</li><li>쇼핑 검색 연동으로 자연 유입</li></ul></div>
  <div class="mc"><h4>SNS & 광고</h4><ul><li>@mycusven 인스타그램 운영</li><li>페이스북·인스타 메타광고 직접 집행</li><li>타겟: 40–50대 남성 / 시계 관심사</li><li>후킹 이미지 A/B 테스트 진행</li></ul></div>
  <div class="mc"><h4>인플루언서 & 커뮤니티</h4><ul><li>인플루언서 30명 협업</li><li>착용 후기·언박싱 콘텐츠 제작</li><li>남차 카페 등 남성 패션 커뮤니티 홍보</li><li>시계 마니아 커뮤니티 타겟 홍보</li></ul></div>
</div>
<div class="mnote">→ 메타광고 + 블로그 조합이 가장 효율적인 전환율 기록</div>`},

aa2:{tag:'AARRR · 활성화',title:'A — 고객 활성화 전략',dark:false,html:`
<p>처음 방문한 고객을 회원가입 → 첫 구매로 전환시키는 단계. 가장 ROI가 높았던 단계입니다.</p>
<div class="mg3">
  <div class="mc"><h4>회원가입 최적화</h4><ul><li>1초 카카오싱크 → 가입 11배 증가</li><li>카카오 회원가입 비율 70%+ 달성</li><li>카카오·네이버·구글 소셜 로그인 연동</li><li>회원가입 혜택 배너 상단 노출</li></ul></div>
  <div class="mc"><h4>결제 & UX 개선</h4><ul><li>네이버페이·카카오페이·토스 도입</li><li>전체 결제의 17% 네이버페이 사용</li><li>CTA 버튼·장바구니 위치 최적화</li><li>모바일 UX 전면 개편</li></ul></div>
  <div class="mc"><h4>자동화 & FAQ</h4><ul><li>채널톡 9개 채널 통합·워크플로우 구축</li><li>VOC 분석 후 FAQ 18가지 정리</li><li>FAQ 전용 페이지 + 채널톡 자동응답</li><li>구매·배송 자동 알림톡 발송 설정</li></ul></div>
</div>
<div class="mnote">→ 최고 ROI: 카카오싱크 (가입 11배) + FAQ 구축 (반복문의 75% 감소)</div>`},

aa3:{tag:'AARRR · 유지',title:'R — 고객 유지 전략 · 월별 캠페인',dark:false,html:`
<p>구매한 고객을 재구매로 이어지게 만드는 단계. 1–12월 월별 테마 기획전을 설계·실행했습니다.</p>
<table class="mtbl">
  <tr><th>월</th><th>기획전명</th><th>핵심 혜택</th></tr>
  <tr><td>1–2월</td><td>새해 갤러포드 기획전</td><td>한 해를 열심히 일할 나에게 선물하세요</td></tr>
  <tr><td>3월</td><td>봄 기획전</td><td>봄에 가장 인기 많은 시계 4종 20% 할인</td></tr>
  <tr><td>4–5월</td><td>가정의 달 기획전</td><td>무료 각인 + 다이얼 교체 + 회원가입 혜택</td></tr>
  <tr><td>6월</td><td>나에게 주는 상 — 크레스비</td><td>30개 한정 20% + 밴드 1개 추가 + 무료 각인</td></tr>
  <tr><td>7월</td><td>커스벤 6주년 SALE</td><td>기념일별 1위 추천 / 최대 50% 할인</td></tr>
  <tr><td>8월</td><td>여름 휴가 기획전</td><td>단 하나뿐인 시계 / 방수 밴드 추천</td></tr>
  <tr><td>9월</td><td>올해 수고한 당신께</td><td>최대 20% 쿠폰 + 무료배송</td></tr>
  <tr><td>10월</td><td>결혼기념일 기획전</td><td>커스텀 + 무료 각인 + 편지 인쇄 + 밴드 2개</td></tr>
  <tr><td>11월</td><td>블랙프라이데이</td><td>1년에 단 한 번 / 최대 60% 할인</td></tr>
  <tr><td>12월</td><td>크리스마스 기획전</td><td>1년 동안 수고한 당신께 / 연말 선물 특가</td></tr>
</table>
<div class="mnote">→ 월별 캠페인으로 계절·시즌 매출 기복 최소화 및 고정 매출 기반 확보</div>`},

aa4:{tag:'AARRR · 추천',title:'R — 고객 추천 전략',dark:false,html:`
<p>만족한 고객이 자발적으로 주변에 추천하도록 유도하는 단계. 패키징 경험과 리뷰 인센티브가 핵심입니다.</p>
<div class="mg3">
  <div class="mc"><h4>패키징 & 언박싱</h4><ul><li>브랜드 브로슈어 동봉 (A/S 안내 포함)</li><li>컬렉션별 사용 설명서 제작</li><li>브랜드 전용 스티커·손편지 삽입</li><li>선물 느낌 강화로 SNS 공유 유도</li></ul></div>
  <div class="mc"><h4>리뷰 & 후기 관리</h4><ul><li>구매 후 리뷰 작성 시 적립금 지급</li><li>알림톡으로 리뷰 작성 안내 자동 발송</li><li>인스타 착용샷 태그 이벤트 정기 진행</li><li>부정 리뷰 즉각 CS 대응</li></ul></div>
  <div class="mc"><h4>선물 카테고리 마케팅</h4><ul><li>"남편에게 선물하기" 카테고리 구성</li><li>"아버지 생신 선물" 카테고리 구성</li><li>쇼룸 지인 데려오면 추가 할인 쿠폰</li><li>소개서에 사이트 QR 코드 기입</li></ul></div>
</div>
<div class="mnote">→ "남편 선물로 시계 샀어요" 후기 증가 → 자연스러운 입소문 마케팅 효과</div>`},

aa5:{tag:'AARRR · 수익',title:'R — 수익 극대화 · CROWN 멤버십',dark:false,html:`
<p>충성 고객의 LTV를 높이고 지속적인 수익을 만드는 단계. CROWN 멤버십 등급 시스템이 핵심입니다.</p>
<table class="mtbl">
  <tr><th>등급</th><th>조건 (누적 구매)</th><th>혜택</th></tr>
  <tr><td>SILVER</td><td>30만 – 60만원</td><td>20만원 이상 구매 시 3만원 즉시 할인 / 적립금 / 무료배송</td></tr>
  <tr><td>GOLD</td><td>60만 – 90만원</td><td>4만원 즉시 할인 / 적립금 / 무료배송</td></tr>
  <tr><td>VIP</td><td>90만 – 150만원</td><td>5만원 할인 / 밴드 1개 증정 / 신제품 우선 연락 / 무료배송</td></tr>
  <tr><td>ROYAL</td><td>150만원 이상</td><td>8만원 할인 / 밴드 증정 / 신제품 평가회 참여 / A/S 무료 / 무료배송</td></tr>
</table>
<div class="mdiv"></div>
<div class="mg2">
  <div class="mc"><h4>추가 수익 전략</h4><ul><li>매년 신제품 출시로 재구매 사이클 생성</li><li>다양한 컬러 가죽밴드 단품 판매</li><li>밴드·디버클 단품 100개+ 판매</li><li>월별 가격전략 최적화</li></ul></div>
  <div class="mc"><h4>성과</h4><ul><li>자사몰 월 1.5–2천만원 고정 매출</li><li>ROYAL 등급 충성 고객 지속 증가</li><li>재구매율 꾸준히 상승</li><li>2022년 자사몰 12% → 2024년 ~80%</li></ul></div>
</div>
<div class="mnote">→ 등급 혜택 도입 이후 재구매율 상승, ROYAL 등급 충성 고객 증가세 뚜렷</div>`},

p1:{tag:'Customer Persona · 01',title:'김국민 — 50대 재구매 충성 고객',dark:false,html:`
<div class="mg3">
  <div class="mc"><h4>기본 정보</h4><ul><li>50대 남성</li><li>결혼 / 자녀 2명</li><li>직장인 (관리직·임원)</li><li>클래식·스포티 디자인 선호</li></ul></div>
  <div class="mc"><h4>구매 동기</h4><ul><li>나를 위한 선물 (승급·기념일)</li><li>오랫동안 원했던 시계</li><li>주변 착용자에게 칭찬 받은 경험</li><li>직장·미팅에서 차기 좋은 디자인</li></ul></div>
  <div class="mc"><h4>CRM 공략 포인트</h4><ul><li>등급 혜택 안내 — ROYAL 등급 쿠폰</li><li>신제품 출시 우선 알림</li><li>재구매 시 감사 손편지 동봉</li><li>핵심 메시지: <b>"나에게 주는 선물"</b></li></ul></div>
</div>
<div class="mdiv"></div>
<div class="msec-title">실제 고객 후기</div>
<div class="mg2">
  <div class="mc"><ul><li>"주변에서 칭찬을 많이 받아 뿌듯하다"</li><li>"나를 위한 선물로 딱이다"</li><li>"이 가격에 이 퀄리티라니 놀랍다"</li></ul></div>
  <div class="mc"><ul><li>"충성고객도 잘 케어해줘서 계속 재구매"</li><li>"A/S까지 빠르게 처리해줘서 믿음직스럽다"</li></ul></div>
</div>
<div class="mnote">→ 이 페르소나가 ROYAL 등급 충성 고객으로 성장하는 핵심 타겟</div>`},

p2:{tag:'Customer Persona · 02',title:'이대민 — 40대 얼리어답터',dark:false,html:`
<div class="mg3">
  <div class="mc"><h4>기본 정보</h4><ul><li>40대 남성</li><li>결혼 / 자녀 없음</li><li>직장인 (일반직)</li><li>크라우드펀딩 즐겨 참여</li></ul></div>
  <div class="mc"><h4>구매 동기</h4><ul><li>새로운 제품 얼리 체험</li><li><b>이 가격에 이 퀄리티</b> — 가성비</li><li>남들과 다른 커스터마이징 시계</li><li>직장 미팅에서도 찰 수 있는 디자인</li></ul></div>
  <div class="mc"><h4>CRM 공략 포인트</h4><ul><li>신제품 출시 알림 + 얼리버드 혜택</li><li>한정 수량 강조</li><li>커스터마이징 옵션 안내</li><li>핵심 메시지: <b>"남들과 다른 나만의 시계"</b></li></ul></div>
</div>
<div class="mdiv"></div>
<div class="msec-title">실제 고객 후기</div>
<div class="mg2">
  <div class="mc"><ul><li>"이 가격에 이 퀄리티라니 놀랍다"</li><li>"커스터마이징이 최고 강점"</li></ul></div>
  <div class="mc"><ul><li>"다음 신제품도 꼭 구매할 것 같다"</li><li>"남차 카페에서 보고 바로 구매했다"</li></ul></div>
</div>
<div class="mnote">→ 와디즈 → 자사 사이트 전환율 높이기 위해 가장 공을 들인 페르소나</div>`},

sg1:{tag:'CRM · Onsite Marketing',title:'온사이드 — 실제 발송 CRM 메시지',dark:true,html:`
<p>자사 사이트 방문자를 <strong>회원가입 → 첫 구매</strong>로 전환시키는 온사이드 캠페인 실제 메시지입니다.</p>
<div class="msg-grid">
  <div class="msgc msgc-d"><div class="msgt">회원가입 유도</div><p>커스벤 시계, 관심있으신가요?😊 회원가입하시면 더 많은 혜택들을 더 풍성하게 받아보실 수 있습니다♥</p></div>
  <div class="msgc msgc-d"><div class="msgt">장바구니 리마인드</div><p>혹시 시계 구매 고민 중이신가요? 장바구니에 넣고 고민 중이신 당신께 10% 추가할인쿠폰을 드립니다:) 쿠폰함을 열어보세요!</p></div>
  <div class="msgc msgc-d"><div class="msgt">채널 추가 감사</div><p>CUSVEN(커스벤) 채널을 추가해 주셔서 감사합니다 🙏 앞으로 다양한 소식과 혜택/정보를 메시지로 받아보실 수 있습니다.</p></div>
  <div class="msgc msgc-d"><div class="msgt">상황 마케팅 (폭설 쿠폰)</div><p>폭설 내린 주 고민 많으셨어요. 따뜻한 쇼핑 되세요! 3일만 사용 가능한 5% 추가 할인쿠폰이 지급되었습니다.</p></div>
</div>
<div class="mdiv"></div>
<div class="mg3">
  <div class="mc"><h4>회원가입 전환 전략</h4><ul><li>1초 카카오싱크 → 가입 11배 증가</li><li>가입 즉시 웰컴 쿠폰 지급</li><li>혜택 배너 상단 상시 노출</li></ul></div>
  <div class="mc"><h4>첫 구매 전환 전략</h4><ul><li>장바구니 리마인드 자동 발송</li><li>오늘만 추가 10% 할인 쿠폰</li><li>채널톡 실시간 상담 연결</li></ul></div>
  <div class="mc"><h4>카카오 채널 추가 유도</h4><ul><li>채널 추가 시 1만원 즉시 할인</li><li>카카오 채널 = CRM 접점 자동 확보</li><li>클릭 순위 1위: 홈페이지, 2위: 와디즈</li></ul></div>
</div>
<div class="mnote">→ 카카오 채널 추가 고객 대상 CRM 메시지 오픈율이 일반 대비 3배 이상 높음</div>`},

sg2:{tag:'CRM · Offsite Marketing',title:'오프사이드 — 실제 발송 CRM 메시지',dark:false,html:`
<p>외부 플랫폼(와디즈·조선일보 등) 기존 고객을 자사 사이트로 <b>재유입·재구매</b>시키는 실제 문자 메시지입니다.</p>
<div class="msg-grid">
  <div class="msgc msgc-l"><div class="msgt">와디즈 고객 전용</div><p>안녕하세요 커스벤입니다. (이 문자는 와디즈 고객님께만 보내드립니다.) 리뉴얼된 커스벤 사이트에 회원가입 하시면 쉽게 AS를 받으실 수 있으며 등급별 혜택까지 제공됩니다.</p></div>
  <div class="msgc msgc-l"><div class="msgt">재구매 유도 (5주년)</div><p>(광고)[커스벤 5주년 SALE] ~7.3일까지만 최대 50% 세일. 다가오는 여름, 가벼워진 옷차림에 빛나는 시계로 완성해보세요.</p></div>
  <div class="msgc msgc-l"><div class="msgt">혜택 종료 D-1</div><p>커스벤 할인혜택 종료 D-1 알림. 회원가입 시 AS / 등급 별 혜택 / 가족 밴드 15,000원 / 티스톤 시계 60% 할인 혜택이 내일 종료됩니다.</p></div>
  <div class="msgc msgc-l"><div class="msgt">조선일보 고객 자사 유입</div><p>커스벤X조선일보 고객 단독 혜택 — 리뉴얼된 커스벤 사이트에 회원가입 하시면 앞으로 쉽게 AS를 받으실 수 있으며 등급별 혜택까지 제공해드립니다.</p></div>
</div>
<div class="mdiv"></div>
<div class="mg2">
  <div class="mc"><h4>세그먼트별 맞춤 전략</h4><ul><li><b>와디즈 고객</b> — "이 문자는 와디즈 고객님께만" 개인화</li><li><b>조선일보 고객</b> — 신뢰도 높은 고객층 자사몰 유입</li><li><b>이탈 위험 고객</b> — D-1 긴급 혜택 알림</li><li><b>장기 미접속</b> — 고민쿠폰 발송</li></ul></div>
  <div class="mc"><h4>성과 & 한계</h4><ul><li>초기 자사몰 데이터 부족 → 오프사이드 중심 운영</li><li>외부 → 자사몰 전환이 핵심 KPI</li><li>자사몰 매출 비율 12% → 80%로 성장</li><li>SQL 기반 정밀 세그먼트 도입 필요성 인식</li></ul></div>
</div>
<div class="mnote">→ 플랫폼별 맞춤 메시지 발송 → 자사몰 전환율 꾸준히 향상</div>`},

jn1:{tag:'Journey · 탐색 단계',title:'FAQ 구축 — 반복 문의 75% 감소',dark:true,html:`
<p>고객 탐색 단계에서 가장 많이 겪는 불편은 <strong>정보 탐색의 어려움</strong>. VOC 분석을 통해 FAQ 18가지를 정리하고 자동 응답 시스템을 구축했습니다.</p>
<div class="mg3">
  <div class="mc"><h4>자주 묻는 질문 유형</h4><ul><li>밴드 사이즈(길이, 폭) 궁금합니다</li><li>워터프루프 밴드와 일반 밴드 차이</li><li>다크블루·라이트블루 컬러 차이</li><li>컬렉션별 방수 등급 궁금합니다</li><li>날짜/요일 변경 방법</li><li>쿼츠와 오토매틱(기계식) 차이</li><li>커스터마이징 어떻게 하나요?</li><li>시계 사이즈, 두께, 무게</li></ul></div>
  <div class="mc"><h4>FAQ 도입 결과</h4><ul><li>사이트 내 FAQ 전용 페이지 신설</li><li>메인 메뉴에 FAQ 별도 배치</li><li>채널톡 자동 FAQ 발송 워크플로우 구축</li><li>커스텀 메뉴: 사용자수 220 / 클릭수 459</li><li>단순·반복 문의 75%+ 감소</li></ul></div>
  <div class="mc"><h4>카카오 채널 클릭 순위</h4><ul><li>1위 — 홈페이지</li><li>2위 — 와디즈 펀딩 링크</li><li>3위 — A/S 안내</li><li>4위 — 밴드 구매</li><li>5위 — FAQ</li><li>6위 — 쇼룸 공지</li></ul></div>
</div>
<div class="mnote">→ FAQ 구축 후 반복 문의 75% 감소 / CS 리소스를 더 가치 있는 업무에 집중 가능</div>`},

jn2:{tag:'Journey · 구매 단계',title:'배송·패키징 개선 — 브랜드 경험 강화',dark:true,html:`
<p>비싼 시계를 구매했는데 <strong>포장이 허술하게 도착</strong>하는 문제. CX 피드백을 직접 취합해 패키징 전 과정을 재설계했습니다.</p>
<div class="mg2">
  <div class="mc"><h4>Before → After 개선 내역</h4><ul><li><b>문제</b> — 택배 상자 찢어져 도착 → 고객 컴플레인</li><li><b>개선</b> — 택배사에 "안전하게 배송 부탁드려요" 문구 기입</li><li><b>문제</b> — 일반 OPP 박스테이프 사용</li><li><b>개선</b> — 브랜드 전용 스티커로 교체</li><li><b>문제</b> — 시계 크기에 맞지 않는 택배상자</li><li><b>개선</b> — 커스벤 시계에 딱 맞는 맞춤 택배상자 제작</li><li><b>추가</b> — 상자 앞면에 자사 사이트 주소 기재 (재유입 유도)</li></ul></div>
  <div class="mc"><h4>동봉 제작물</h4><ul><li>브랜드 브로슈어 — 스토리·A/S 안내 포함</li><li>컬렉션·무브먼트별 사용 설명서 제작</li><li>디버클 사용설명서 촬영 및 제작</li><li>시계 안내 영상 QR 코드 동봉</li><li>재구매 고객 감사 손편지 삽입</li><li>브랜드 스티커 패키지 제작</li></ul></div>
</div>
<div class="mnote">→ 패키징 개선 후 "언박싱이 선물 같다"는 후기 증가 / SNS 공유 유도 효과</div>`},

jn3:{tag:'Journey · 재방문 단계',title:'A/S 프로세스 구축 — 불만을 신뢰로',dark:true,html:`
<p>A/S 문의가 지속 발생하고, 구매 전 A/S 가능 여부를 확인하려는 고객이 많았습니다. 온라인 A/S 접수 시스템을 전면 구축했습니다.</p>
<div class="mg3">
  <div class="mc"><h4>문제 상황 (Before)</h4><ul><li>A/S 관련 문의 지속 → 응대 부담 증가</li><li>구매 전 A/S 가능 여부 확인 고객 다수</li><li>별도 안내 페이지 없어 접근성 낮음</li><li>A/S 진행 상황 알 수 없어 불안감 호소</li></ul></div>
  <div class="mc"><h4>개선 내용 (After)</h4><ul><li>사이트 내 A/S 전용 페이지 신설</li><li>메인 메뉴에 A/S 별도 배치</li><li>온라인 접수 시스템 구축</li><li>진행 단계별 문자 자동 발송</li><li>A/S 완료 보증서 제작 후 배송</li></ul></div>
  <div class="mc"><h4>A/S 진행 알림 단계</h4><ul><li>1단계 — 수거 안내 문자 발송</li><li>2단계 — A/S 진행 중 안내</li><li>3단계 — 완료 + 배송 안내</li><li>완료 보증서 — 기간·비용·내용 기재</li></ul></div>
</div>
<div class="mnote">→ A/S 구축 후 고객 불만 건수 감소 / 재방문율 향상 / "A/S가 빠르다" 후기 증가</div>`},

jn4:{tag:'Journey · 회원가입 단계',title:'1초 카카오싱크 — 회원가입 11배 증가',dark:true,html:`
<p>주 고객 45–60세가 <strong>복잡한 회원가입</strong>에서 이탈하는 문제. 1초 카카오싱크 도입으로 11배 증가를 달성했습니다.</p>
<div class="mg2">
  <div class="mc"><h4>AS IS → TO BE</h4><ul><li><b>Before</b> — 복잡한 이메일 가입 → 이탈 발생</li><li><b>After</b> — 1초 카카오싱크 소셜 로그인 도입</li><li><b>Before</b> — SNS 로그인 연동 없음</li><li><b>After</b> — 카카오·네이버·구글 전부 연동</li><li><b>Before</b> — 가입 후 아무 혜택 없음</li><li><b>After</b> — 웰컴 쿠폰 + 알림톡 자동 발송</li></ul></div>
  <div class="mc"><h4>도입 성과</h4><ul><li>전체 회원가입 수 <b>11배 증가</b></li><li>카카오 회원가입 비율 <b>70%+ 달성</b></li><li>카카오 채널 = CRM 접점 자동 확보</li><li>네이버페이 결제 비율 17%까지 상승</li><li>모바일 전환율 대폭 향상</li><li>주 고객 45–60대 접근성 대폭 개선</li></ul></div>
</div>
<div class="mnote">→ 1초 카카오싱크 하나로 회원가입 11배 — 가장 ROI 높은 단일 개선</div>`}
};

function openM(id){
  const d=MD[id]; if(!d) return;
  const mb=document.getElementById('mb');
  mb.className='mbox '+(d.dark?'mbox-d':'mbox-l');
  document.getElementById('mtag').textContent=d.tag;
  document.getElementById('mttl').textContent=d.title;
  document.getElementById('mcont').innerHTML=d.html;
  document.getElementById('mo').classList.add('on');
  document.body.style.overflow='hidden';
  mb.scrollTop=0;
}
function closeM(){document.getElementById('mo').classList.remove('on');document.body.style.overflow='';}
function mClose(e){if(e.target===document.getElementById('mo')) closeM();}
document.addEventListener('keydown',e=>{if(e.key==='Escape') closeM();});

// accordion
function togA(btn){
  const panel=btn.nextElementSibling;
  const open=panel.classList.contains('open');
  panel.classList.toggle('open',!open);
  btn.classList.toggle('open',!open);
}

// scroll fade
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis');});},{threshold:.06});
document.querySelectorAll('.fi').forEach(el=>obs.observe(el));

// aarrr hover
document.querySelectorAll('.astep').forEach(s=>{
  s.addEventListener('mouseenter',()=>{document.querySelectorAll('.astep').forEach(x=>x.classList.remove('on'));s.classList.add('on');});
});

// watch position controller
const W = document.querySelector('.hero-watch-wrap');
const img = document.getElementById('watch-a');
let wx=22, wy=10, ww=74;
function applyWatch(){
  W.style.cssText = `position:absolute;left:${wx}%;top:50%;transform:translateY(calc(-50% + ${wy}%));width:${ww}%;pointer-events:none;z-index:1;`;
  img.style.cssText = 'display:block;width:100%;height:auto;';
}
function updateWatch(prop,val){
  if(prop==='x'){wx=+val;document.getElementById('v-x').textContent=val+'%';}
  if(prop==='y'){wy=+val;document.getElementById('v-y').textContent=val+'%';}
  if(prop==='w'){ww=+val;document.getElementById('v-w').textContent=val+'%';}
  applyWatch();
}
function copyCSS(){
  const txt = `left:${wx}%; top:50%; transform:translateY(calc(-50% + ${wy}%)); width:${ww}%;`;
  navigator.clipboard.writeText(txt).then(()=>{
    document.getElementById('ctrl-copy').textContent='✅ 복사됨!';
    setTimeout(()=>document.getElementById('ctrl-copy').textContent='📋 CSS 값 복사',1500);
  });
}
function togglePanel(){
  const p=document.getElementById('ctrl-panel');
  p.style.display=p.style.display==='none'?'block':'none';
}
applyWatch();
