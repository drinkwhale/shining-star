# 📚 돌잔치 초대장 문서

프로젝트 개발을 위한 완전한 가이드 및 참고 자료입니다.

---

## 📋 Quick Links

### 🚀 개발 시작하기

1. **[필수 정보 수집](./TASK_MANAGEMENT.md#필수-정보-수집-체크리스트)** — 개발 전 필수 정보
2. **[환경 변수 설정](./guides/ENVIRONMENT_VARIABLES.md)** — API 키 설정
3. **[Task 관리](./TASK_MANAGEMENT.md)** — 작업 진행 계획

### 🔧 API 설정 가이드

- **[전체 API 설정](./API_SETUP.md)** — Firebase, 카카오맵, 네이버맵 설정
- **[카카오맵 설정](./guides/KAKAO_MAP_GUIDE.md)** — 지도 연동 (Phase 2, 필수)
- **네이버맵 설정** — 길찾기용 데스크톱 지도 (API_SETUP.md에 포함, API 키 불필요)

### 📊 프로젝트 계획

- **[전체 Task 목록](./TASK_MANAGEMENT.md)** — Phase 1-2 상세 작업 내역
- **[일정표 & 타임라인](./TASK_MANAGEMENT.md#📈-전체-일정표)** — 주간/월간 계획

### ⚙️ 배포 & 운영

- **[환경 변수 배포](./API_SETUP.md#배포-시-환경-변수)** — GitHub Secrets 설정
- **[보안 체크리스트](./API_SETUP.md#보안-체크리스트)** — 배포 전 확인사항

---

## 📂 문서 구조

```
docs/
├── README.md (이 파일)
│   └─ 전체 문서 인덱스 및 네비게이션
│
├── TASK_MANAGEMENT.md
│   ├─ 필수 정보 수집 체크리스트
│   ├─ Phase 1-2 상세 작업 내역
│   ├─ Task별 하위 작업 체크박스
│   ├─ 일정표 및 타임라인
│   └─ 진행 상태 추적
│
├── API_SETUP.md
│   ├─ Firebase 설정 (푸시 알림)
│   ├─ 카카오맵 설정 (지도 표시, 필수)
│   ├─ 네이버맵 설정 (길찾기용, API 키 불필요)
│   ├─ 환경 변수 템플릿
│   ├─ 파일별 사용 위치
│   ├─ 로컬 테스트 방법
│   ├─ 배포 설정
│   └─ 문제 해결
│
└── guides/
    ├─ ENVIRONMENT_VARIABLES.md (환경 변수 설정 상세)
    └─ KAKAO_MAP_GUIDE.md (카카오맵 단계별 설정)
```

---

## 🎯 사용 시나리오별 가이드

### 시나리오 1: 프로젝트 처음 시작

```
1. TASK_MANAGEMENT.md 읽기
   └─ "필수 정보 수집 체크리스트" 항목 완료
2. API_SETUP.md 읽기
   └─ 각 API별 설정 단계 완료
3. guides/ENVIRONMENT_VARIABLES.md
   └─ .env.local 파일 생성 및 API 키 입력
4. npm run dev 실행
```

### 시나리오 2: Task 진행 중

```
1. TASK_MANAGEMENT.md의 "진행 상태" 섹션
   └─ 현재 Phase와 Task 확인
2. 해당 Task의 하위 작업 확인
   └─ 체크박스 체크하며 진행
3. 필요시 API_SETUP.md 참고
   └─ API 관련 구현 시 해당 섹션 확인
```

### 시나리오 3: 배포 준비

```
1. API_SETUP.md 읽기
   └─ "배포 시 환경 변수" 섹션
2. 보안 체크리스트 완료
   └─ 모든 항목 체크
3. GitHub Secrets 설정
   └─ 각 환경 변수 등록
4. npm run build 실행
   └─ 배포용 빌드 확인
```

### 시나리오 4: 문제 해결

```
1. API_SETUP.md의 "문제 해결" 섹션
2. 해당 API의 guide 파일 (guides/) 참고
3. Firebase Console / 카카오 개발자 콘솔 확인
```

---

## 📖 문서별 상세 설명

### TASK_MANAGEMENT.md

**개발 계획 및 작업 추적**

- 전체 프로젝트 구조 (Phase 1-2)
- 각 Task의 목표, 하위 작업, 완료 기준
- 시간 추정 및 의존성 관계
- 주간 계획 및 타임라인
- 진행 상태 체크박스
- Priority Matrix

**언제 참고?**

- 개발 시작 전 (계획 수립)
- Task 진행 중 (체크리스트)
- 진행 상황 추적 (주간 리뷰)

### API_SETUP.md

**API 설정 및 환경 변수**

- Firebase 설정 (4단계)
- 카카오맵 설정 (4단계)
- 환경 변수 템플릿
- 각 파일에서의 사용 위치
- 로컬 테스트 코드
- 배포 및 보안 설정

**언제 참고?**

- API 설정 중 (처음 한 번만)
- 환경 변수 관리 (필요시)
- 배포 전 (보안 확인)

### guides/ENVIRONMENT_VARIABLES.md

**환경 변수 설정 상세**

- .env.local 생성 방법
- 각 변수의 의미 및 출처
- 로컬/배포 환경 구분
- 보안 주의사항

**언제 참고?**

- 프로젝트 초기 설정
- 환경 변수 추가 필요 시

### guides/FIREBASE_GUIDE.md

**Firebase 단계별 설정**

- 프로젝트 생성 (스크린샷 포함)
- 웹 앱 등록
- VAPID 키 생성
- Service Worker 설정
- 로컬 테스트

**언제 참고?**

- Phase 2 시작 (T2-1)
- Firebase 에러 발생 시

### guides/KAKAO_MAP_GUIDE.md

**카카오맵 단계별 설정**

- 개발자 계정 생성
- 애플리케이션 등록
- REST API 키 발급
- 플랫폼 등록
- 로컬 테스트

**언제 참고?**

- Phase 2 시작 (T2-1)
- 카카오맵 에러 발생 시

---

## 🔍 검색 팁

### Markdown 파일 검색 (명령어)

```bash
# 특정 단어로 검색
grep -r "Firebase" docs/

# Phase별 검색
grep -r "Phase 1" docs/

# API 키 관련 검색
grep -r "API_KEY" docs/
```

### 브라우저 검색

- Ctrl+F (Windows) / Cmd+F (Mac)
- 문서 내 특정 섹션 검색

---

## 📝 문서 관리

### 문서 업데이트 체크리스트

- [ ] 새로운 API 추가 시 → API_SETUP.md 업데이트
- [ ] Task 구조 변경 시 → TASK_MANAGEMENT.md 업데이트
- [ ] 환경 변수 추가 시 → guides/ENVIRONMENT_VARIABLES.md 업데이트
- [ ] 설정 프로세스 변경 시 → 해당 guide 파일 업데이트

### 문서 작성 규칙

- Markdown 형식 사용
- H2 (##) ~ H4 (####) 레벨 헤더 사용
- 링크는 상대 경로 사용 (예: `./API_SETUP.md`)
- 코드 블록은 언어 명시 (`typescript, `bash 등)
- 주요 섹션은 목차(Table of Contents) 포함

---

## 🆘 도움말

### 자주 묻는 질문 (FAQ)

**Q: API 키를 어디서 찾나요?**

- Firebase: API_SETUP.md → Firebase 설정 → 단계 2
- 카카오맵: API_SETUP.md → 카카오맵 설정 → 단계 3
- 자세한 스크린샷: guides/ 폴더의 각 가이드 참고

**Q: .env.local 파일을 어떻게 생성하나요?**

- guides/ENVIRONMENT_VARIABLES.md 참고

**Q: 배포할 때 환경 변수는?**

- API_SETUP.md → "배포 시 환경 변수" 섹션

**Q: 로컬에서 테스트하려면?**

- API_SETUP.md → "로컬 테스트" 섹션

---

## 🔗 외부 링크

### 공식 문서

- [Firebase Documentation](https://firebase.google.com/docs)
- [Kakao Maps API](https://developers.kakao.com/docs/latest/ko/local/common)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)

### 개발자 콘솔

- [Firebase Console](https://console.firebase.google.com)
- [Kakao Developer Console](https://developers.kakao.com/console)
- [GitHub Pages Settings](https://github.com/settings/pages)

---

## 📅 마지막 업데이트

- **생성일**: 2026-08-06
- **마지막 수정**: 2026-08-06
- **다음 업데이트 예정**: Phase 2 시작 시

---

## 💡 팁

- 📌 북마크해두고 자주 참고하세요
- 🔖 검색 기능(Ctrl+F)을 활용하세요
- 📱 모바일에서도 쉽게 볼 수 있도록 설계됨
- 🔗 상호 링크가 많으니 하이퍼링크를 클릭하세요

---

**시작하기**: [필수 정보 수집](./TASK_MANAGEMENT.md#필수-정보-수집-체크리스트) → [환경 변수 설정](./guides/ENVIRONMENT_VARIABLES.md) → [Task 시작](./TASK_MANAGEMENT.md#phase-1-모바일-ux-최적화)
