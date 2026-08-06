# Project Index: 돌잔치 초대장

**Generated**: 2026-08-06  
**Last Updated**: 2026-08-06  
**Status**: ✅ Phase 1-2 계획 수립 완료

---

## 📁 Project Structure

```
shining-star/
├── 📂 docs/                       # 📚 개발 문서 및 가이드
│   ├── README.md                 # 문서 인덱스 & 네비게이션
│   ├── TASK_MANAGEMENT.md        # Phase 1-2 작업 계획 (체크리스트)
│   ├── API_SETUP.md              # API 설정 (카카오맵, 네이버맵)
│   └── guides/
│       ├── ENVIRONMENT_VARIABLES.md    # 환경 변수 설정 가이드
│       └── KAKAO_MAP_GUIDE.md          # 카카오맵 단계별 설정
│
├── 📂 src/                        # 🎨 React 소스 코드
│   ├── components/
│   │   ├── Hero.tsx             # 메인 헤로 섹션
│   │   ├── Details.tsx          # 행사 정보 (날짜, 시간, 장소)
│   │   ├── Countdown.tsx        # 카운트다운 타이머
│   │   ├── Gallery.tsx          # 이미지 갤러리 (모달 포함)
│   │   ├── RSVP.tsx            # 참석 폼 (WhatsApp 연동)
│   │   └── Share.tsx           # 소셜 공유 버튼
│   ├── App.tsx                  # 메인 앱 컴포넌트
│   ├── main.tsx                 # React 진입점
│   └── index.css                # 글로벌 스타일 + Tailwind
│
├── 📄 Configuration Files
│   ├── index.html               # HTML 템플릿
│   ├── vite.config.ts           # Vite 빌드 설정 (base: /shining-star/)
│   ├── tsconfig.json            # TypeScript strict 모드
│   ├── tsconfig.node.json       # Node.js TypeScript 설정
│   ├── tailwind.config.js       # Tailwind CSS (한국 색상)
│   ├── postcss.config.js        # PostCSS 플러그인
│   ├── package.json             # npm 의존성 & 스크립트
│   ├── .eslintrc.json           # ESLint 규칙
│   ├── .gitignore               # Git 무시 파일 (Node.js, IDE, 환경)
│   └── README.md                # 프로젝트 개요 & 커스터마이징 가이드
│
└── 📂 .claude/                   # Claude Code 설정
    └── CLAUDE.md                # 프로젝트 개발 지침
```

---

## 🚀 Entry Points

| 진입점              | 파일                      | 설명                                                     |
| ------------------- | ------------------------- | -------------------------------------------------------- |
| **Web App**         | `src/main.tsx`            | React DOM 렌더링 + Vite HMR                              |
| **Main Component**  | `src/App.tsx`             | 모든 섹션 조합 (Hero → Details → Gallery → RSVP → Share) |
| **Documentation**   | `docs/README.md`          | 모든 가이드 문서의 시작점                                |
| **Task Management** | `docs/TASK_MANAGEMENT.md` | Phase 1-2 작업 체크리스트                                |
| **API Setup**       | `docs/API_SETUP.md`       | 외부 API 설정 (카카오맵)                                 |

---

## 📦 Core Components

### 1️⃣ Hero.tsx

- **목적**: 메인 헤로 섹션 (제목, 아이 사진, CTA)
- **기능**:
  - 페이지 로드 애니메이션 (fadeIn)
  - "참석 여부" 버튼 (RSVP 모달 열기)
  - 원형 아이 사진
  - 스크롤 다운 인디케이터
- **Props**: `rsvpOpen`, `onRsvpOpen`

### 2️⃣ Details.tsx

- **목적**: 행사 정보 디스플레이
- **표시 내용**: 날짜, 시간, 장소, 아이 정보, 안내사항
- **레이아웃**: 반응형 (모바일 1열 → 데스크톱 2열)

### 3️⃣ Countdown.tsx

- **목적**: 리얼타임 카운트다운 타이머
- **표시**: 일, 시간, 분, 초
- **구현**: useEffect + setInterval (매초 업데이트)
- **목표 날짜**: `eventDate` (하드코딩 또는 props)

### 4️⃣ Gallery.tsx

- **목적**: 아이 성장 사진 갤러리
- **레이아웃**: 3x2 그리드 (이미지 카드)
- **상호작용**: 클릭 → 모달 팝업 확대 보기
- **상태**: `selectedImage`, `isOpen`

### 5️⃣ RSVP.tsx

- **목적**: 참석 여부 입력 폼
- **필드**: 이름, 연락처, 참석 여부, 메시지
- **제출**: WhatsApp API (`wa.me/{phoneNumber}?text={message}`)
- **상태**: `isOpen` (모달 열기/닫기)

### 6️⃣ Share.tsx

- **목적**: 소셜 미디어 공유
- **채널**: KakaoTalk, Instagram, Facebook, 링크 복사
- **기능**:
  - Kakao SDK 초기화 (선택사항)
  - Web Share API (모바일)
  - 클립보드 복사 (fallback)

---

## 🔧 Configuration

### Build & Development

- **vite.config.ts**:
  - Base path: `/shining-star/` (GitHub Pages)
  - React plugin 활성화
  - Build optimization

### Styling

- **tailwind.config.js**:
  - 한국 전통색: gold, red, navy, cream
  - 커스텀 애니메이션: fadeIn, slideUp, bounceGentle

### Type Safety

- **tsconfig.json**:
  - Target: ES2020
  - Module: ESNext
  - Strict mode 활성화
  - Incremental 빌드

### Code Quality

- **.eslintrc.json**: React, React Hooks, TypeScript 규칙
- **Prettier**: 자동 포맷팅 (세미콜론 제외, 싱글 쿼트)

---

## 📚 Documentation

### 개발 문서

| 문서                                   | 목적                               | 대상             |
| -------------------------------------- | ---------------------------------- | ---------------- |
| `docs/README.md`                       | 문서 인덱스                        | 모든 개발자      |
| `docs/TASK_MANAGEMENT.md`              | Phase 1-2 작업 계획 (22-32시간)    | 프로젝트 매니저  |
| `docs/API_SETUP.md`                    | 외부 API 설정 (카카오맵, 네이버맵) | 백엔드/풀스택    |
| `docs/guides/ENVIRONMENT_VARIABLES.md` | `.env.local` 설정                  | 모든 개발자      |
| `docs/guides/KAKAO_MAP_GUIDE.md`       | 카카오맵 API 단계별 설정           | 지도 기능 담당자 |

### Quick Navigation

```
필수 정보 수집 체크리스트
├── 행사 정보 (날짜, 시간, 장소)
├── 기술 정보 (API 키)
└── 콘텐츠 (이미지, 갤러리 사진)

API 설정
├── Kakao Maps (필수)
│   └── REST API 키 발급 → 플랫폼 등록 → 환경 변수
├── Naver Maps (선택, API 키 불필요)
│   └── 길찾기 URL 스킴만 사용
└── 환경 변수 (.env.local)

개발 순서
├── Phase 1: 모바일 UX (T1-1 ~ T1-4)
└── Phase 2: 지도 & 길찾기 (T2-1 ~ T2-3)
```

---

## 🎯 Development Phases

### Phase 1: 모바일 UX 최적화 (16-23시간)

- **T1-1** (4-6h): 모바일 터치 인터랙션
- **T1-2** (3-5h): 성능 최적화 (Lighthouse 90+)
- **T1-3** (6-8h): 반응형 레이아웃 (375px ~ 1440px)
- **T1-4** (3-4h): PWA 설정 (Service Worker, manifest)

### Phase 2: 지도 & 길찾기 (6-9시간)

- **T2-1** (3-4h): 카카오맵 연동 (마커, 정보 윈도우)
- **T2-2** (2-3h): 길찾기 (iOS/Android/Desktop)
- **T2-3** (1-2h): 위치 공유 (복사, 공유)

---

## 🔗 Key Dependencies

| 패키지          | 버전    | 목적              |
| --------------- | ------- | ----------------- |
| **react**       | ^18.2.0 | UI 라이브러리     |
| **typescript**  | ^5.3.0  | 타입 안전성       |
| **vite**        | ^5.0.0  | 초고속 번들러     |
| **tailwindcss** | ^3.3.0  | 유틸리티 CSS      |
| **gh-pages**    | ^6.1.0  | GitHub Pages 배포 |

### 외부 API

- **Kakao Maps API**: 지도 표시 (필수)
- **Naver Maps**: 길찾기 URL 스킴 (API 키 불필요)
- **WhatsApp API**: RSVP 폼 제출

---

## 🌈 Design System

### 색상 (한국 전통색)

- **Gold** (#d4af37): 주요 강조 색상
- **Red** (#c60c30): 액센트
- **Navy** (#1a3a52): 어두운 배경
- **Cream** (#fdf8f3): 밝은 배경

### Typography

- **Noto Sans KR**: 본문 (sans-serif)
- **Noto Serif KR**: 제목 (serif, 선택사항)
- **Base Size**: 1rem = 16px
- **Responsive**: clamp()로 자동 스케일

### Spacing & Grid

- **Base**: 1rem (16px)
- **Grid**: Tailwind default (4px 단위)
- **Breakpoints**: sm (640px), md (768px), lg (1024px)

---

## 📱 Responsive Design

```
Mobile (375px)
└─ 1 column, touch-optimized (48px+ buttons)

Tablet (768px)
└─ 2 columns, balanced layout

Desktop (1024px+)
└─ 3 columns, full-width optimization
```

---

## 🧪 Testing & Quality

### Type Checking

```bash
npm run type-check
```

- TypeScript strict mode
- Props validation

### Code Quality

- **ESLint**: React, Hooks, TypeScript
- **Prettier**: Auto-formatting (src/*.tsx)

### Performance

- **Lighthouse**: Target 90+ (Performance)
- **Bundle Size**: < 100KB (gzip)
- **LCP**: < 1.5s | **CLS**: < 0.1

---

## 🚀 Quick Start

```bash
# 1. 설치
npm install

# 2. 환경 설정
cp .env.local.example .env.local
# .env.local에 VITE_KAKAO_MAP_API_KEY 입력

# 3. 개발 시작
npm run dev
# http://localhost:5173/shining-star 접속

# 4. 타입 확인
npm run type-check

# 5. 프로덕션 빌드
npm run build

# 6. GitHub Pages 배포
npm run deploy
```

---

## 📋 Git & Deployment

### Branch Strategy

- `main`: 배포 가능 상태
- `feature/*`: 기능 개발
- `task/*`: Task 단위 작업

### Commit Convention

```
feat: 새로운 기능
fix: 버그 수정
docs: 문서 수정
style: 포맷팅 (코드 변경 없음)
refactor: 리팩토링
test: 테스트 추가
chore: 빌드, 의존성 등
```

### Deployment

- **Push to main** → GitHub Actions 자동 빌드
- **Deploy**: `npm run deploy` (gh-pages)
- **URL**: `https://username.github.io/shining-star`

---

## 🔄 State Management

### Local Component State (useState)

- `rsvpOpen` (Hero, RSVP)
- `selectedImage` (Gallery)
- Form inputs (RSVP)

### Prop Drilling

- `rsvpOpen` state: App.tsx → Hero.tsx / RSVP.tsx

### 향후 고려사항

- 전역 상태 (행사 정보) → Context API 또는 Zustand
- 서버 상태 (위치 데이터) → TanStack Query

---

## 📝 Key Files Reference

```
src/App.tsx             # 레이아웃 구조 (Flex column)
src/components/Hero.tsx # CTA 버튼 로직
src/components/RSVP.tsx # WhatsApp 링크 생성
docs/TASK_MANAGEMENT.md # 전체 작업 계획
docs/API_SETUP.md       # API 설정 상세
```

---

## ✅ Status

- **구조**: ✅ 완료 (7개 컴포넌트)
- **문서**: ✅ 완료 (5개 가이드)
- **계획**: ✅ 완료 (Phase 1-2)
- **API**: ✅ 카카오맵 설정 가이드 완료
- **배포**: ✅ GitHub Pages 설정 완료 (base: /shining-star/)

---

**Next Steps**:

1. 필수 정보 수집 (docs/TASK_MANAGEMENT.md #필수-정보-수집-체크리스트)
2. API 키 발급 및 .env.local 설정
3. T1-1 시작 (모바일 터치 인터랙션)
