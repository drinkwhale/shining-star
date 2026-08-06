# 돌잔치 초대장 🎂

GitHub Pages를 활용한 현대적이고 한국적인 돌잔치 초대장 웹사이트입니다.

## ✨ 주요 기능

- **응답식 디자인**: 모든 디바이스에 최적화된 반응형 웹사이트
- **이미지 갤러리**: 아이의 성장 사진을 아름답게 전시
- **카운트다운 타이머**: 행사까지 남은 시간을 실시간으로 표시
- **RSVP 기능**: 참석 여부를 카카오톡/메시지로 전송
- **소셜 공유**: 카카오톡, 인스타그램, 페이스북, 링크 복사로 공유

## 🎨 디자인 특징

- **색상 팔레트**: 한국 전통색 (금색, 빨강색, 남색, 크림색)
- **한글 폰트**: Noto Sans KR, Noto Serif KR 사용
- **부드러운 애니메이션**: 페이드인, 슬라이드업 등 섬세한 모션

## 📚 문서

> **💡 개발을 시작하기 전에 아래 가이드를 확인하세요!**

### 📖 주요 문서

| 문서                                                                               | 설명                                        | 대상   |
| ---------------------------------------------------------------------------------- | ------------------------------------------- | ------ |
| **[docs/README.md](./docs/README.md)**                                             | 📋 전체 문서 인덱스 및 네비게이션           | 모두   |
| **[docs/TASK_MANAGEMENT.md](./docs/TASK_MANAGEMENT.md)**                           | 🎯 Phase 1-3 작업 계획 및 체크리스트        | 개발자 |
| **[docs/API_SETUP.md](./docs/API_SETUP.md)**                                       | 🔧 Firebase, 카카오맵 API 설정              | 개발자 |
| **[docs/guides/ENVIRONMENT_VARIABLES.md](./docs/guides/ENVIRONMENT_VARIABLES.md)** | ⚙️ .env.local 환경 변수 설정                | 개발자 |
| **[docs/guides/FIREBASE_GUIDE.md](./docs/guides/FIREBASE_GUIDE.md)**               | 🔔 Firebase 푸시 알림 단계별 설정 (Phase 2) | 개발자 |
| **[docs/guides/KAKAO_MAP_GUIDE.md](./docs/guides/KAKAO_MAP_GUIDE.md)**             | 🗺️ 카카오맵 지도 단계별 설정 (Phase 3)      | 개발자 |

**→ [docs/ 폴더 바로 가기](./docs/)**

---

## 🚀 빠른 시작

### 필수 요구사항

- Node.js 16+
- npm 또는 yarn

### 개발 시작 체크리스트

1. **필수 정보 수집**: [docs/TASK_MANAGEMENT.md](./docs/TASK_MANAGEMENT.md#필수-정보-수집-체크리스트) 확인
2. **환경 변수 설정**: [docs/guides/ENVIRONMENT_VARIABLES.md](./docs/guides/ENVIRONMENT_VARIABLES.md) 따라하기
3. **API 설정**: [docs/API_SETUP.md](./docs/API_SETUP.md) 또는 각 API별 가이드 확인
4. **개발 시작**: 아래 설치 및 실행 단계 진행

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 미리보기
npm run preview

# GitHub Pages에 배포
npm run deploy
```

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── Hero.tsx        # 헤로 섹션
│   ├── Details.tsx     # 행사 정보
│   ├── Countdown.tsx   # 카운트다운 타이머
│   ├── Gallery.tsx     # 사진 갤러리
│   ├── RSVP.tsx       # 참석 여부 폼
│   └── Share.tsx      # 공유 버튼
├── App.tsx            # 메인 앱 컴포넌트
├── main.tsx           # 진입점
└── index.css          # 글로벌 스타일
```

## ⚙️ 설정 파일

- **vite.config.ts**: Vite 번들러 설정
- **tailwind.config.js**: Tailwind CSS 커스텀 설정
- **tsconfig.json**: TypeScript 설정

## 🔧 커스터마이징

### 기본 정보 수정

각 컴포넌트에서 다음 정보를 수정하세요:

1. **날짜 및 시간**: `src/components/Details.tsx`
2. **장소**: `src/components/Details.tsx`
3. **아이 정보**: `src/components/Details.tsx`
4. **사진**: `src/components/Gallery.tsx`
5. **연락처**: `src/components/RSVP.tsx`

### 색상 커스터마이징

`tailwind.config.js`에서 `colors` 섹션을 수정하세요:

```js
colors: {
  'korean-gold': '#d4af37',
  'korean-red': '#c60c30',
  'korean-navy': '#1a3a52',
  'korean-cream': '#fdf8f3',
}
```

## 📦 주요 기술 스택

- **React 18**: UI 라이브러리
- **TypeScript**: 타입 안전성
- **Vite**: 초고속 번들러
- **Tailwind CSS**: 유틸리티 CSS 프레임워크

## 🌐 GitHub Pages 배포

1. GitHub 저장소 설정에서 Pages를 활성화하세요
2. 배포 브랜치를 `gh-pages`로 설정하세요
3. 다음 명령으로 배포하세요:

```bash
npm run deploy
```

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 💝 만든이

행복한 돌잔치를 축하합니다! 🎉
