# 돌잔치 모바일 초대장 - Task List

**프로젝트**: 모바일 웹 최적화 + 지도 연동  
**시작일**: 2026-08-06  
**상태**: 계획 단계  
**예상 총 소요**: 22-32시간 (개발만, 테스트/배포 제외)

---

## 📌 Quick Navigation

- **[필수 정보](#필수-정보-수집-체크리스트)** — 시작 전 수집해야 할 정보
- **[API 설정](#api-설정)** — Firebase, 카카오맵 설정 정보 (→ `API_SETUP.md` 참고)
- **[Phase 1](#phase-1-모바일-ux-최적화)** — 모바일 UX (4-7일)
- **[Phase 2](#phase-3-지도--길찾기)** — 지도 연동 (3일)
- **[진행 상태](#진행-상태)** — 체크박스 트래킹
- **[일정표](#📈-전체-일정표)** — 타임라인

---

## 필수 정보 수집 체크리스트

> 개발 시작 전에 아래 정보를 완벽히 수집하세요.

### 🎉 행사 정보

- [ ] **행사 명칭**: 김OO 돌잔치
- [ ] **행사 날짜 & 시간**: 2024-12-25 11:00 (정확한 타임존)
- [ ] **행사 장소 (정확한 주소)**:
  - 예: 서울 강남구 강남대로 00 OO센터 3F
  - 건물명, 층수, 상세 주소 포함
- [ ] **위도/경도**: 필요시 [카카오 좌표 검색](https://apis.map.kakao.com/web/sample/addr2coord/) 활용
- [ ] **진행자/부모 이름**: (UI 표시용)
- [ ] **대표 연락처**: (푸시 알림 수신자)
- [ ] **이메일**: (피드백용)

### 🔧 기술 정보

- [ ] **카카오맵 API 키**: [설정 가이드](./API_SETUP.md#카카오맵-설정)
- [ ] **Firebase 프로젝트 ID**: [설정 가이드](./API_SETUP.md#firebase-설정)
- [ ] **Firebase Web Config**: 프로젝트 설정에서 복사
- [ ] **백엔드 서버 URL**: (선택사항, T2-3에서 필요)
- [ ] **데이터베이스 선택**: Firebase Firestore / MongoDB / 기타

### 🎨 디자인/컨텐츠

- [ ] **로고/이미지**: (있으면 첨부)
- [ ] **주최자 프로필 이미지**:
- [ ] **갤러리 사진**: (최소 5-10장)
- [ ] **추가 정보**:
  - 교통 안내
  - 주차 정보
  - 식사 제공 여부
  - 편의사항

---

## API 설정

> **주의**: 모든 API 키는 `.env.local` 파일에 저장하고 커밋하지 마세요.  
> 자세한 설정 방법은 `API_SETUP.md` 참고

### 각 Phase별 필요 API

| Phase       | API      | 필수 | 설정                                   |
| ----------- | -------- | ---- | -------------------------------------- |
| **Phase 1** | -        | -    | 환경 설정만 필요                       |
| **Phase 2** | 카카오맵 | ✅   | [가이드](./API_SETUP.md#카카오맵-설정) |
| **Phase 2** | 네이버맵 | -    | URL 스킴만 사용 (API 키 불필요)        |

**환경 변수 템플릿**: [`.env.local.example`](./API_SETUP.md#환경-변수-템플릿) 참고

> **참고**: 네이버 지도는 길찾기 기능(T2-2)의 데스크톱용 지도 앱으로 사용되며, API 키가 필요하지 않습니다. 카카오맵만 설정하면 됩니다.

---

## Phase 1: 모바일 UX 최적화

**소요**: 16-23시간 | **예상**: +4-7일 | **의존성**: 없음 | **우선순위**: ⭐⭐⭐

### 📋 Phase 1 개요

모바일 초대장의 기본 UX를 완성합니다. 터치 최적화, 성능 개선, 반응형 레이아웃, PWA 설정을 단계별로 진행합니다.

| Task | 소요 | 우선순위 | 의존성         | 상태 |
| ---- | ---- | -------- | -------------- | ---- |
| T1-1 | 4-6h | ⭐⭐⭐   | 없음           | [ ]  |
| T1-2 | 3-5h | ⭐⭐⭐   | T1-1           | [ ]  |
| T1-3 | 6-8h | ⭐⭐⭐   | -              | [ ]  |
| T1-4 | 3-4h | ⭐⭐     | T1-1,T1-2,T1-3 | [ ]  |

---

### T1-1: 모바일 터치 인터랙션 개선

**목표**: 모든 터치 요소가 모바일에 최적화되고 명확한 피드백을 제공합니다.

**하위 작업**:

- [ ] 모바일 터치 이벤트 핸들러 추가 (pointer 이벤트 기반)
- [ ] 모든 버튼 최소 48x48px 확보
- [ ] 터치 피드백 UI (ripple effect 또는 색상 변화)
- [ ] 스크롤 부드러움 최적화 (`scroll-behavior: smooth`)
- [ ] 모바일 메뉴/네비게이션 개선
- [ ] iOS Safari 호환성 테스트

**관련 파일**:

- `src/components/Hero.tsx` — 터치 이벤트
- `src/components/Gallery.tsx` — 모달 제스처
- `src/components/RSVP.tsx` — 폼 입력
- `src/index.css` — 호버/액티브 상태

**완료 기준**:

- ✅ 모든 버튼 48px 이상
- ✅ 터치 피드백 시각적으로 명확
- ✅ Chrome/Safari 모바일 테스트 완료 (375px, 390px, 412px)

---

### T1-2: 모바일 성능 최적화

**목표**: Lighthouse 점수 90+ 달성 및 빠른 로딩 (2초 이내).

**하위 작업**:

- [ ] 이미지 최적화 (WebP 변환, srcset 추가)
- [ ] 번들 크기 분석 및 불필요한 의존성 제거
- [ ] 렌더링 성능 측정 (Lighthouse 실행)
- [ ] 3G 네트워크에서 2초 이내 로딩 달성
- [ ] 메인 스레드 작업 최소화
- [ ] CSS 애니메이션 성능 개선 (will-change 활용)

**관련 파일**:

- `index.html` — 리소스 힌트 (preload, prefetch)
- `vite.config.ts` — 빌드 최적화
- `src/components/**/*.tsx` — 이미지 처리

**완료 기준**:

- ✅ Lighthouse 점수 90 이상
- ✅ First Contentful Paint < 1.5s
- ✅ 번들 크기 < 100KB (gzip)

---

### T1-3: 모바일 레이아웃 반응형 강화

**목표**: 모든 화면 크기에서 완벽한 가독성과 사용성 확보.

**하위 작업**:

- [ ] Mobile-first 접근 (모바일 먼저 설계)
- [ ] 텍스트 크기 최소 16px (모바일 자동 확대 방지)
- [ ] 여백/패딩 최소 16px (좌우)
- [ ] 이미지 반응형 비율 조정 (aspect-ratio 활용)
- [ ] 가로 모드 (Landscape) 대응
- [ ] 다양한 화면 크기 테스트 (375, 390, 412, 768, 1024, 1440px)

**관련 파일**:

- `src/components/**/*.tsx` — 모든 컴포넌트
- `src/index.css` — 반응형 스타일
- `tailwind.config.js` — 브레이크포인트 추가

**테스트 체크리스트**:

- [ ] iPhone SE (375px)
- [ ] iPhone 12/13 (390px)
- [ ] Samsung S21 (412px)
- [ ] iPad (768px)
- [ ] Desktop (1440px)

**완료 기준**:

- ✅ 375px ~ 1440px 모두 가독성 확보
- ✅ 모바일/태블릿/PC 분기점 명확
- ✅ 가로 모드에서 정상 작동

---

### T1-4: PWA 설정 (오프라인 모드)

**목표**: 앱처럼 설치 가능하고 오프라인에서도 기본 내용 표시.

**하위 작업**:

- [ ] Service Worker 등록 및 캐싱 전략 구현
- [ ] `manifest.json` 생성
- [ ] 오프라인 페이지 캐싱 (HTML, 필수 CSS/JS)
- [ ] 설치 가능한 웹앱 설정 (Install Prompt)
- [ ] iOS Home Screen 추가 지원 (메타 태그)
- [ ] 앱 아이콘/스플래시 이미지 제작

**관련 파일**:

- `public/manifest.json` (신규)
- `public/sw.js` (신규) — Service Worker
- `index.html` — manifest/theme 링크
- `public/icons/` (신규) — 아이콘 파일

**iOS 메타 태그**:

```html
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta
  name="apple-mobile-web-app-status-bar-style"
  content="black-translucent"
/>
<link rel="apple-touch-icon" href="/public/icons/apple-touch-icon.png" />
```

**완료 기준**:

- ✅ 오프라인에서 기본 내용 표시
- ✅ iOS에서 홈화면 추가 가능
- ✅ App manifest 검증 통과 (Chrome DevTools)

---

## Phase 2: 지도 & 길찾기

**소요**: 6-9시간 | **예상**: +3일 | **의존성**: Phase 1 완료 후 | **우선순위**: ⭐⭐⭐

### 📋 Phase 2 개요

카카오맵 API를 활용한 위치 표시, 네이버/카카오/애플 지도 앱 연동, 위치 공유 기능을 구현합니다.

| Task | 소요 | 우선순위 | 의존성 | 상태 |
| ---- | ---- | -------- | ------ | ---- |
| T2-1 | 3-4h | ⭐⭐⭐   | T1-3   | [ ]  |
| T2-2 | 2-3h | ⭐⭐⭐   | T2-1   | [ ]  |
| T2-3 | 1-2h | ⭐⭐     | T2-1   | [ ]  |

---

### T2-1: 지도 API 연동 (카카오맵)

**목표**: 행사 장소를 지도에 표시하고 모바일에서 최적화된 인터랙션 제공.

**하위 작업**:

- [ ] 카카오 개발자 계정 & API 키 획득 ([가이드](./guides/KAKAO_MAP_GUIDE.md))
- [ ] Kakao Map 라이브러리 추가
- [ ] 지도 컴포넌트 생성 (`src/components/Map.tsx`)
- [ ] 행사 장소 마커 표시
- [ ] 초기 줌/센터 설정
- [ ] 모바일 터치 인터랙션 최적화 (드래그, 줌)

**관련 파일**:

- `src/components/Map.tsx` (신규)
- `src/pages/LocationPage.tsx` (신규) — 지도 페이지
- `.env.local` — 카카오 API 키
- `index.html` — 카카오맵 스크립트 로드

**필수 정보**:

- 행사 장소 정확한 주소
- 위도/경도 (또는 카카오 주소 검색 활용)

**지도 컴포넌트 예시**:

```typescript
interface MapProps {
  lat: number
  lng: number
  eventTitle: string
}

export function Map({ lat, lng, eventTitle }: MapProps) {
  // kakao.maps.Map 초기화
  // 마커 추가
  // 터치/줌 이벤트 처리
}
```

**완료 기준**:

- ✅ 지도에 마커 표시됨
- ✅ 모바일에서 드래그/줌 가능
- ✅ 정보 윈도우 표시 (주소, 행사명)

---

### T2-2: 길찾기 기능 (네이버/카카오/애플)

**목표**: 사용자의 기기/OS에 맞는 지도 앱으로 경로 안내 제공.

**하위 작업**:

- [ ] 길찾기 버튼 추가 (Map 컴포넌트 내)
- [ ] 디바이스/OS 감지
  - iOS Safari → Apple Maps
  - Android Chrome → Google Maps 또는 카카오맵
  - Desktop → 네이버 지도 웹
- [ ] 각 플랫폼별 URL 스키마 구현
- [ ] 모바일에서 앱 링크 처리

**관련 파일**:

- `src/utils/directions.ts` (신급) — 길찾기 URL 생성
- `src/components/Map.tsx` — 길찾기 버튼 추가

**필수 정보**:

- 행사 장소 위도/경도
- 행사 장소 주소

**URL 스키마**:

```typescript
// Apple Maps (iOS)
https://maps.apple.com/?daddr=37.3600,127.1054&dirflg=d

// Google Maps (Android)
https://maps.google.com/maps/dir//?destination=37.3600,127.1054

// Kakao Map (Android, Fallback)
https://map.kakao.com/?target=walk&goal=127.1054,37.3600

// Naver Map (Desktop)
https://map.naver.com/index.nhn?elng=127.1054&elat=37.3600
```

**디바이스 감지 로직**:

```typescript
function getMapLink(lat: number, lng: number): string {
  const ua = navigator.userAgent.toLowerCase()

  if (ua.includes('iphone') || ua.includes('ipad')) {
    return `https://maps.apple.com/?daddr=${lat},${lng}`
  } else if (ua.includes('android')) {
    return `https://maps.google.com/maps/dir//?destination=${lat},${lng}`
  } else {
    return `https://map.naver.com/?elng=${lng}&elat=${lat}`
  }
}
```

**완료 기준**:

- ✅ iOS: Apple Maps 열림
- ✅ Android: Google Maps 또는 카카오맵 열림
- ✅ Desktop: Naver Maps 웹 열림

---

### T2-3: 위치 공유 기능

**목표**: 주소와 위치를 다양한 방법으로 공유.

**하위 작업**:

- [ ] 장소 정보 카드에 "위치 공유" 버튼 추가
- [ ] 복사 기능 (주소, 좌표)
- [ ] 카카오톡 공유 (위치 정보 포함)
- [ ] 카카오지도 링크 공유
- [ ] 메시지/메일 공유 (텍스트)

**관련 파일**:

- `src/components/Details.tsx` — 공유 버튼 추가
- `src/components/Share.tsx` — 공유 옵션 확장

**공유 옵션**:

```typescript
interface ShareOptions {
  address: string
  lat: number
  lng: number
  eventTitle: string
}

// 주소 복사
navigator.clipboard.writeText(address)

// 카카오톡 공유 (Kakao SDK 필요)
Kakao.Link.sendDefault({
  objectType: 'location',
  address: address,
  title: eventTitle,
  ...
})

// 일반 메시지 공유
const shareText = `${eventTitle}\n위치: ${address}\n`
navigator.share({ text: shareText })
```

**완료 기준**:

- ✅ 주소 복사 가능
- ✅ 카카오톡 공유 시 위치 정보 표시
- ✅ Web Share API 지원 (모바일)

---

## 📊 Priority Matrix

```
┌─────────────────────────────────────────────────────────┐
│                    우선순위 분석                          │
├──────────────────┬───────────────┬──────────────────────┤
│ Task             │ 중요도        │ 의존성               │
├──────────────────┼───────────────┼──────────────────────┤
│ T1-1 (터치)      │ ⭐⭐⭐        │ 없음 (먼저 시작)     │
│ T1-2 (성능)      │ ⭐⭐⭐        │ T1-1                 │
│ T1-3 (레이아웃)  │ ⭐⭐⭐        │ T1-1 병행 가능       │
│ T1-4 (PWA)       │ ⭐⭐          │ Phase 1 완료 후      │
├──────────────────┼───────────────┼──────────────────────┤
│ T2-1 (카카오맵)  │ ⭐⭐⭐        │ T1-3                 │
│ T2-2 (길찾기)    │ ⭐⭐⭐        │ T2-1                 │
│ T2-3 (공유)      │ ⭐⭐          │ T2-1 (독립적)        │
└──────────────────┴───────────────┴──────────────────────┘
```

---

## 📈 전체 일정표

### 주간 계획 (권장)

#### 주 1: Phase 1 모바일 UX 최적화 (16-23h)

```
월 T1-1: 모바일 터치 인터랙션 (4-6h)
   └─ 목표: 48px 버튼, 터치 피드백 완성

화 T1-2: 모바일 성능 최적화 (3-5h)
   └─ 목표: Lighthouse 90+, 2초 로딩

수~목 T1-3: 반응형 레이아웃 (6-8h)
   └─ 목표: 375-1440px 모두 가독성 확보

금 T1-4: PWA 설정 (3-4h)
   └─ 목표: 오프라인 모드, Home Screen 추가
```

#### 주 2: Phase 2 지도 연동 (6-9h)

```
월 T2-1: 카카오맵 연동 (3-4h)
   └─ 목표: 지도 표시, 마커 추가

화 T2-2: 길찾기 기능 (2-3h)
   └─ 목표: 디바이스별 지도 앱 연동

수 T2-3: 위치 공유 (1-2h)
   └─ 목표: 복사, 공유 옵션

목~금: 통합 테스트 & 배포 (2-3h)
   └─ 목표: E2E 테스트, GitHub Pages 배포
```

### 타임라인

```
Week 1:  T1-1 ─→ T1-2 ──→ T1-3 ────→ T1-4 (완료)
         [████████████████████████████████]

Week 2:  T2-1 ─→ T2-2 ──→ T2-3 ───→ 배포
         [██████████████████████]

Total:   +7-10일 (2주)
```

---

## 진행 상태

### Phase 1: 모바일 UX 최적화

```
T1-1: 모바일 터치 인터랙션
├─ [ ] 터치 이벤트 핸들러
├─ [ ] 48x48px 버튼
├─ [ ] 터치 피드백 UI
├─ [ ] 스크롤 최적화
├─ [ ] 메뉴 개선
└─ [ ] iOS Safari 테스트

T1-2: 모바일 성능 최적화
├─ [ ] 이미지 최적화
├─ [ ] 번들 분석
├─ [ ] Lighthouse 측정
├─ [ ] 3G 로딩 (2초)
├─ [ ] 메인 스레드 최소화
└─ [ ] CSS 애니메이션 최적화

T1-3: 반응형 레이아웃
├─ [ ] Mobile-first 설계
├─ [ ] 텍스트 크기 (16px)
├─ [ ] 여백/패딩 (16px)
├─ [ ] 이미지 반응형
├─ [ ] Landscape 대응
└─ [ ] 6개 화면 크기 테스트

T1-4: PWA 설정
├─ [ ] Service Worker
├─ [ ] manifest.json
├─ [ ] 오프라인 캐싱
├─ [ ] 설치 가능
├─ [ ] iOS Home Screen
└─ [ ] 아이콘/스플래시
```

### Phase 2: 지도 & 길찾기

```
T2-1: 카카오맵 연동
├─ [ ] API 키 획득
├─ [ ] 라이브러리 추가
├─ [ ] Map 컴포넌트
├─ [ ] 마커 표시
├─ [ ] 줌/센터 설정
└─ [ ] 터치 최적화

T2-2: 길찾기 기능
├─ [ ] 길찾기 버튼
├─ [ ] 디바이스 감지
├─ [ ] Apple Maps (iOS)
├─ [ ] Google Maps (Android)
├─ [ ] Naver Maps (Desktop)
└─ [ ] Kakao Maps (Fallback)

T2-3: 위치 공유
├─ [ ] 공유 버튼 추가
├─ [ ] 주소 복사
├─ [ ] 카카오톡 공유
├─ [ ] 카카오지도 공유
└─ [ ] 메시지 공유
```

---

## 📝 Notes

**Phase별 병렬 작업 가능**:

- T1-1, T1-3은 동시에 진행 가능 (의존성 약함)
- T2-1(=T2-1), T2-2(=T2-2), T2-3(=T2-3)은 T2-1 완료 후 병렬 가능

**외부 의존성**:

- 카카오맵 API 키 필수
- 정확한 행사 정보 필수 (주소, 날짜, 시간)

**테스트 환경**:

- 실제 iOS/Android 디바이스 필수
- Chrome DevTools 모바일 에뮬레이션은 보조용
- Lighthouse 측정 (Performance 점수 90+)

---

**다음 단계**: 필수 정보 수집 → `API_SETUP.md` 읽기 → T1-1 시작
