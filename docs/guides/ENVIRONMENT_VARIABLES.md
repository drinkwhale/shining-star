# 환경 변수 설정 가이드

환경 변수를 통해 API 키와 설정값을 안전하게 관리합니다.

---

## 개요

### 환경 변수란?

프로젝트의 설정값을 코드에 하드코딩하지 않고 외부에서 주입하는 방식입니다.

```
❌ 나쁜 예: const API_KEY = "abc123xyz"
✅ 좋은 예: const API_KEY = process.env.API_KEY
```

### 이 프로젝트에서 사용하는 환경 변수

- Kakao Maps API 키 (지도 표시, **필수**)
- 백엔드 API URL (선택사항)
- 개발/배포 플래그

> **참고**: 네이버맵은 길찾기용으로 사용되며 API 키가 불필요합니다 (URL 스킴만 사용)

---

## 파일 구조

### .env.local (개발용, 커밋 금지 ⚠️)

```
실제 API 키를 입력하는 파일
↓
.gitignore에 자동 추가됨
↓
git에 절대 커밋되지 않음
```

### .env.local.example (템플릿, 커밋 필수 ✅)

```
API 키를 입력하는 방법을 보여주는 파일
↓
실제 값은 포함하지 않음
↓
git에 커밋하여 팀원과 공유
```

---

## 단계별 설정

### Step 1: 템플릿 파일 복사

```bash
# 프로젝트 루트에서 실행
cp .env.local.example .env.local
```

### Step 2: API 키 수집

각 API별 키를 준비합니다. ([API_SETUP.md](../API_SETUP.md) 참고)

| API        | 발급처             | 필수    | 가이드                         |
| ---------- | ------------------ | ------- | ------------------------------ |
| Kakao Maps | 카카오 개발자 콘솔 | Phase 2 | [가이드](./KAKAO_MAP_GUIDE.md) |
| Naver Maps | -                  | 선택    | API_SETUP.md (키 불필요)       |

### Step 3: .env.local 파일 편집

텍스트 에디터로 `.env.local` 파일을 열고 값을 입력합니다.

```bash
# 편집 방법 (VS Code)
code .env.local

# 또는 다른 에디터
vim .env.local
nano .env.local
```

### Step 4: 값 입력

예시:

```env
# ✅ 올바른 형식
VITE_FIREBASE_API_KEY=AIzaSyDx1234567890abc...
VITE_KAKAO_MAP_API_KEY=1234567890abcdef...

# ❌ 잘못된 형식
VITE_FIREBASE_API_KEY = "AIzaSyDx..." (공백/따옴표 불필요)
VITE_KAKAO_MAP_API_KEY: 1234567890... (콜론 사용 금지)
```

### Step 5: 서버 재시작

```bash
npm run dev
```

변경사항이 적용됩니다.

---

## 환경 변수 상세 설명

### Kakao Maps 환경 변수

```env
VITE_KAKAO_MAP_API_KEY=1234567890abcdef...
# └─ Kakao Developers에서 발급받은 REST API 키
```

### 백엔드 환경 변수 (선택사항)

```env
VITE_API_BASE_URL=http://localhost:3000
# └─ 백엔드 서버 주소

VITE_API_TIMEOUT=30000
# └─ API 요청 타임아웃 (밀리초)
```

### 개발 환경 변수

```env
VITE_DEBUG=true
# └─ 디버그 모드 활성화

VITE_LOG_LEVEL=debug
# └─ 로그 레벨 (debug, info, warn, error)
```

---

## 코드에서 사용

### React/TypeScript 에서 접근

```typescript
// API 키 가져오기
const kakaoKey = import.meta.env.VITE_KAKAO_MAP_API_KEY
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

// 조건부 로직
if (import.meta.env.VITE_DEBUG) {
  console.log('Debug mode enabled')
}
```

### Vite 환경 변수 규칙

```typescript
// ✅ 접근 가능 (VITE_ 프리픽스)
import.meta.env.VITE_KAKAO_MAP_API_KEY

// ❌ 접근 불가능 (프리픽스 없음)
import.meta.env.SECRET_KEY
```

> **규칙**: 클라이언트에서 접근 가능한 환경 변수는 반드시 `VITE_` 프리픽스를 사용해야 합니다.

---

## 환경별 설정

### 개발 환경 (.env.local)

```env
# 카카오맵 API 키
VITE_KAKAO_MAP_API_KEY=1234567890abcdef...

# 로컬 개발용
VITE_API_BASE_URL=http://localhost:3000
VITE_DEBUG=true
VITE_LOG_LEVEL=debug
```

### 스테이징 환경 (.env.staging)

```env
# 카카오맵 API 키
VITE_KAKAO_MAP_API_KEY=1234567890abcdef...

# 스테이징 서버용 설정
VITE_API_BASE_URL=https://staging-api.example.com
VITE_DEBUG=false
VITE_LOG_LEVEL=info
```

### 배포 환경 (GitHub Secrets)

```
배포 시에는 GitHub Actions를 통해 환경 변수를 자동 주입합니다.
→ [배포 설정 가이드](../API_SETUP.md#배포-시-환경-변수) 참고
```

---

## 보안 주의사항

### ⚠️ 절대 하지 말아야 할 것

```bash
❌ .env.local 파일을 git에 커밋
❌ API 키를 코드에 하드코딩
❌ 콘솔에서 전체 API 키 출력
❌ 공개 저장소에 .env.local 업로드
❌ 이메일이나 메시지로 API 키 전송
```

### ✅ 해야 할 것

```bash
✅ .env.local은 .gitignore에 추가 (자동)
✅ .env.local.example은 git에 커밋 (템플릿용)
✅ GitHub Secrets에 API 키 저장 (배포용)
✅ 로컬에서만 .env.local 파일 관리
✅ API 키 노출 시 즉시 재발급
```

---

## 문제 해결

### 환경 변수가 인식되지 않음

```typescript
// ❌ 잘못된 이름
import.meta.env.FIREBASE_API_KEY

// ✅ 올바른 이름 (VITE_ 프리픽스 필수)
import.meta.env.VITE_FIREBASE_API_KEY
```

**해결**:

1. 환경 변수 이름에 `VITE_` 프리픽스 확인
2. 대문자/소문자 구분 (정확히 입력)
3. 서버 재시작 (`npm run dev`)

### "undefined" 에러

```
환경 변수 값이 비어있음
```

**확인**:

1. `.env.local` 파일 존재 확인
2. API 키 값이 입력되어 있는지 확인
3. 파일 저장 후 서버 재시작

### GitHub Actions에서 배포 실패

```
배포 중 환경 변수를 찾을 수 없음
```

**해결**:

1. GitHub Secrets 설정 확인 ([배포 가이드](../API_SETUP.md#배포-시-환경-변수))
2. Secrets 이름이 정확한지 확인
3. 배포 워크플로우에서 `env:` 섹션 확인

---

## 체크리스트

### 개발 시작 전

- [ ] `.env.local.example` 파일 확인
- [ ] `cp .env.local.example .env.local` 실행
- [ ] `.env.local` 파일 생성 확인
- [ ] API 키 수집 완료
- [ ] `.env.local`에 모든 값 입력
- [ ] 서버 시작 및 동작 확인

### 배포 전

- [ ] `.env.local` 파일이 `.gitignore`에 있는지 확인
- [ ] `.env.local` 파일이 커밋되지 않았는지 확인
- [ ] GitHub Secrets 설정 완료
- [ ] 배포 워크플로우 확인

---

## 팁

💡 **환경 변수 확인하기**:

```javascript
// 브라우저 콘솔에서 (개발 환경만)
console.log(import.meta.env.VITE_DEBUG)
```

💡 **자동 완성 설정** (VS Code):

```json
// .vscode/settings.json에 추가
{
  "editor.quickSuggestions": {
    "strings": true
  }
}
```

---

**다음**: [API 전체 설정](../API_SETUP.md) 또는 [Firebase 세부 가이드](./FIREBASE_GUIDE.md)
