# 돌잔치 초대장 프로젝트

## 프로젝트 개요

GitHub Pages를 활용한 현대적이고 한국적인 돌잔치 초대장 웹사이트입니다.

**기술 스택**: React 18 + TypeScript + Vite + Tailwind CSS

## 개발 워크플로우

### 1. 시작하기

```bash
npm install
npm run dev
```

### 2. 수정 및 테스트

- `src/components/` 에서 컴포넌트 수정
- 브라우저에서 자동 리로드 확인
- `npm run type-check` 로 타입 검사

### 3. 배포

```bash
npm run build
npm run deploy
```

또는 main 브랜치에 push하면 GitHub Actions가 자동 배포합니다.

## 프로젝트 구조

```
src/
├── components/
│   ├── Hero.tsx         # 메인 섹션
│   ├── Details.tsx      # 행사 정보
│   ├── Countdown.tsx    # 카운트다운
│   ├── Gallery.tsx      # 사진 갤러리
│   ├── RSVP.tsx        # 참석 폼
│   └── Share.tsx       # 공유
├── App.tsx
├── main.tsx
└── index.css
```

## 커스터마이징 가이드

### 기본 정보 수정

1. **행사 정보** (`src/components/Details.tsx`):
   - `eventDate` 변수에서 날짜 수정
   - `details` 배열에서 시간, 장소, 아이 정보 수정

2. **이미지** (`src/components/Gallery.tsx`):
   - `images` 배열의 `src` URL 변경

3. **연락처** (`src/components/RSVP.tsx`):
   - WhatsApp 링크의 전화번호 수정 (82010000000 부분)

### 색상 커스터마이징

`tailwind.config.js`에서 수정:

```js
colors: {
  'korean-gold': '#d4af37',    // 금색
  'korean-red': '#c60c30',     // 빨강색
  'korean-navy': '#1a3a52',    // 남색
  'korean-cream': '#fdf8f3',   // 크림색
}
```

## 주요 기능

- ✅ 이미지 갤러리 (모달 팝업)
- ✅ 카운트다운 타이머 (실시간)
- ✅ RSVP 폼 (WhatsApp 연동)
- ✅ 소셜 공유 (KakaoTalk, Facebook, Instagram)
- ✅ 반응형 디자인
- ✅ GitHub Pages 배포

## 개발 팁

### 로컬 테스트

```bash
npm run dev
# localhost:3000 에서 실시간 수정 반영 확인
```

### 타입 체크

```bash
npm run type-check
```

### 포맷팅

```bash
npm run format
```

### 린트

```bash
npm run lint
```

## 배포 설정

- **기본 경로**: `/shining-star/` (vite.config.ts)
- **배포 디렉토리**: `dist/`
- **자동 배포**: GitHub Actions (`main` 브랜치 push)

## 주의사항

- 이미지 URL은 외부 호스팅 (Unsplash 등) 사용 권장
- 카운트다운 날짜는 `new Date('YYYY-MM-DDTHH:mm:ss')` 형식으로 수정
- 전화번호는 WhatsApp API 형식으로 수정 필요

## 추가 기능 추가 시

1. `src/components/` 에 새 파일 생성
2. `src/App.tsx` 에서 import 및 렌더링
3. Tailwind CSS + custom CSS 활용
4. TypeScript 타입 정의

## 문제 해결

### 배포 후 스타일이 안 먹을 때

- `vite.config.ts` 의 `base` 설정 확인
- GitHub 저장소 이름과 일치하는지 확인

### WhatsApp 링크 작동 안 할 때

- 전화번호 형식 확인 (국가 코드 포함)
- WhatsApp Desktop/Web 설치 확인

---

**프로젝트 인덱스**: PROJECT_INDEX.md 참고
