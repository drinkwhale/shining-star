# Project Index: 돌잔치 초대장

**Generated**: 2026-08-06

## 📁 Project Structure

```
shining-star/
├── src/
│   ├── components/          # React 컴포넌트들
│   │   ├── Hero.tsx        # 메인 헤로 섹션
│   │   ├── Details.tsx     # 행사 정보 (날짜, 시간, 장소, 아이)
│   │   ├── Countdown.tsx   # 카운트다운 타이머
│   │   ├── Gallery.tsx     # 이미지 갤러리 모달 포함
│   │   ├── RSVP.tsx       # 참석 여부 입력 폼 (WhatsApp 연동)
│   │   └── Share.tsx      # 소셜 미디어 공유 버튼
│   ├── App.tsx            # 메인 앱 컴포넌트
│   ├── main.tsx           # React 진입점
│   └── index.css          # 글로벌 스타일 (Tailwind + 커스텀)
├── index.html            # HTML 템플릿
├── vite.config.ts        # Vite 설정
├── tsconfig.json         # TypeScript 설정
├── tailwind.config.js    # Tailwind CSS 커스터마이징
├── postcss.config.js     # PostCSS 설정
├── package.json          # 패키지 설정
├── .eslintrc.json        # ESLint 설정
├── .prettierrc           # Prettier 포맷팅 설정
├── .gitignore           # Git 무시 파일
└── README.md            # 프로젝트 문서
```

## 🚀 Entry Points

- **Web**: `src/main.tsx` → React DOM 렌더링
- **App**: `src/App.tsx` → 모든 섹션을 포함하는 메인 컴포넌트

## 📦 Core Components

### Hero.tsx

- **경로**: `src/components/Hero.tsx`
- **목적**: 메인 헤로 섹션 (제목, 설명, CTA 버튼)
- **주요 기능**:
  - 페이지 로딩 애니메이션
  - "참석 여부 알리기" 버튼
  - 아이 사진 (원형, 가운데 배치)
  - 스크롤 다운 인디케이터

### Details.tsx

- **경로**: `src/components/Details.tsx`
- **목적**: 돌잔치 행사 정보 표시
- **주요 정보**: 날짜, 시간, 장소, 아이 정보
- **추가**: 안내사항 박스

### Countdown.tsx

- **경로**: `src/components/Countdown.tsx`
- **목적**: 리얼타임 카운트다운 타이머
- **표시 단위**: 일, 시간, 분, 초
- **특징**: 매초 업데이트, useEffect로 인터벌 관리

### Gallery.tsx

- **경로**: `src/components/Gallery.tsx`
- **목적**: 아이 성장 사진 갤러리 (3x2 그리드)
- **기능**: 클릭 시 모달 팝업으로 확대 보기

### RSVP.tsx

- **경로**: `src/components/RSVP.tsx`
- **목적**: 참석 여부 입력 폼
- **입력 필드**: 이름, 연락처, 참석 여부, 메시지
- **제출**: WhatsApp API로 메시지 전송

### Share.tsx

- **경로**: `src/components/Share.tsx`
- **목적**: 소셜 미디어 공유 버튼
- **지원**: KakaoTalk, Instagram, Facebook, 링크 복사

## 🔧 Configuration

- **vite.config.ts**: Vite 번들러, GitHub Pages 기본 경로 설정
- **tailwind.config.js**: 한국 전통색 추가 (gold, red, navy, cream)
- **tsconfig.json**: ES2020 타겟, strict 모드, incremental 빌드
- **package.json**: React, TypeScript, Tailwind CSS 의존성

## 📚 Documentation

- **README.md**: 프로젝트 개요, 설치, 사용법, 커스터마이징 가이드
- **PROJECT_INDEX.md**: 이 파일 (구조, 진입점, 모듈 설명)

## 🧪 Testing & Quality

- **ESLint**: React, React Hooks, TypeScript 규칙
- **Prettier**: 자동 포맷팅
- **Type Checking**: TypeScript strict 모드

## 🔗 Key Dependencies

- **react** (^18.2.0): UI 라이브러리
- **vite** (^5.0.0): 초고속 번들러
- **tailwindcss** (^3.3.0): 유틸리티 CSS 프레임워크
- **typescript** (^5.3.0): 타입 안전성
- **gh-pages** (^6.1.0): GitHub Pages 배포

## 📝 Quick Start

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 시작 (localhost:3000)
npm run dev

# 3. 프로덕션 빌드
npm run build

# 4. GitHub Pages 배포
npm run deploy
```

## 🎨 Style System

- **색상**: Korean Gold (#d4af37), Red (#c60c30), Navy (#1a3a52), Cream (#fdf8f3)
- **폰트**: Noto Sans KR (sans), Noto Serif KR (serif)
- **애니메이션**: fadeIn, slideUp, bounceGentle

## 🔄 State Management

- **React Hooks**: useState (폼 상태, 모달, 이미지 선택)
- **Local State**: 각 컴포넌트에서 필요한 상태만 관리

## 📱 Responsive Design

- **Breakpoints**: sm (640px), md (768px), lg (1024px)
- **Grid System**: 1열 → 2열 (md) → 3열 (lg)

---

**Status**: ✅ 프로젝트 초기화 완료  
**Next Steps**: npm install → npm run dev → 커스터마이징
