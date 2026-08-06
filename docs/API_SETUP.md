# API & 환경 설정 가이드

> 이 파일은 프로젝트에서 필요한 외부 API 설정 방법을 상세히 설명합니다.  
> **주의**: 모든 API 키는 `.env.local` 파일에 저장하고 절대 커밋하지 마세요.

---

## 목차

1. [카카오맵 설정](#카카오맵-설정) — 지도 연동 (Phase 2)
2. [네이버맵 설정](#네이버맵-설정) — 길찾기용 (선택, API 키 불필요)
3. [환경 변수 템플릿](#환경-변수-템플릿)
4. [각 파일별 사용 위치](#각-파일별-사용-위치)
5. [로컬 테스트](#로컬-테스트)
6. [배포 시 환경 변수](#배포-시-환경-변수)

---

## 카카오맵 설정

### 개요

카카오맵 API를 사용하여 행사 장소를 지도에 표시하고 길찾기 기능을 제공합니다.

**필수 버전**: Kakao Maps API v3.x

### 단계 1: 카카오 개발자 계정 생성

1. [카카오 개발자](https://developers.kakao.com) 방문
2. **"로그인"** (카카오 계정 필요)
3. 카카오 계정이 없으면 [가입](https://accounts.kakao.com/login)

### 단계 2: 애플리케이션 등록

1. 카카오 개발자 → **"내 애플리케이션"** (상단 메뉴)
2. **"애플리케이션 추가하기"** 클릭
3. 앱 이름: `shining-star-invitation` 입력
4. 비즈니스 타입: **"개인"** 선택
5. **"저장"** 클릭

### 단계 3: REST API 키 발급

1. 방금 등록한 애플리케이션 클릭
2. **"앱 설정"** 탭
3. **"API 키"** 섹션에서 **"REST API 키"** 확인
4. 복사 후 `.env.local`에 저장

### 단계 4: 플랫폼 등록

1. 애플리케이션 설정 → **"플랫폼 설정"** 탭
2. **"Web 플랫폼 URL 등록"** 클릭
3. 로컬: `http://localhost:5173`
4. 배포: `https://username.github.io/shining-star`
5. **"저장"** 클릭

### 환경 변수

```env
VITE_KAKAO_MAP_API_KEY=abcd1234efgh5678...
```

### HTML에 스크립트 로드

`index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- 카카오맵 API 스크립트 -->
    <script
      type="text/javascript"
      src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&libraries=services,clusterer"
    ></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

또는 Vite 동적 로드:

```typescript
// src/utils/kakaoMap.ts
export const loadKakaoMap = async () => {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_API_KEY}&libraries=services,clusterer`
    script.async = true
    script.onload = () => resolve(true)
    document.head.appendChild(script)
  })
}
```

### 지도 컴포넌트 예시

`src/components/Map.tsx`:

```typescript
import { useEffect, useRef } from 'react'

interface MapProps {
  lat: number
  lng: number
  eventTitle: string
  address: string
}

export function Map({ lat, lng, eventTitle, address }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.kakao) return

    const container = mapContainer.current
    const options = {
      center: new window.kakao.maps.LatLng(lat, lng),
      level: 4,
    }

    const map = new window.kakao.maps.Map(container, options)

    // 마커 추가
    const marker = new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(lat, lng),
      map: map,
    })

    // 정보 윈도우
    const infoWindow = new window.kakao.maps.InfoWindow({
      content: `<div style="padding:10px;">${eventTitle}<br/>${address}</div>`,
    })
    infoWindow.open(map, marker)
  }, [lat, lng, eventTitle, address])

  return <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />
}
```

### 위도/경도 검색

카카오맵 주소 검색 API 사용:

```typescript
export const getCoordinates = async (address: string) => {
  const response = await fetch(
    `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(address)}`,
    {
      headers: {
        Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_MAP_API_KEY}`,
      },
    }
  )

  const data = await response.json()
  if (data.documents.length > 0) {
    const { x, y } = data.documents[0]
    return { lat: parseFloat(y), lng: parseFloat(x) }
  }

  return null
}
```

---

## 네이버맵 설정

### 개요

네이버맵은 길찾기 기능(T2-2)에서 데스크톱 사용자를 위해 사용됩니다.

**특징**: API 키 불필요 - URL 스킴만으로 작동합니다.

### 단계 1: URL 스킴 이해

네이버맵은 다음과 같은 URL 형식으로 웹에서 열 수 있습니다:

```
https://map.naver.com/?elng=127.1054&elat=37.3600
```

파라미터:

- `elng`: 경도 (longitude)
- `elat`: 위도 (latitude)

### 단계 2: 길찾기 기능 구현

`src/utils/directions.ts`에서 네이버맵 링크 생성:

```typescript
export const getDirectionsUrl = (
  lat: number,
  lng: number,
  address: string
): string => {
  const ua = navigator.userAgent.toLowerCase()

  // iOS (Apple Maps)
  if (ua.includes('iphone') || ua.includes('ipad')) {
    return `https://maps.apple.com/?daddr=${lat},${lng}`
  }

  // Android (Google Maps)
  if (ua.includes('android')) {
    return `https://maps.google.com/maps/dir//?destination=${lat},${lng}`
  }

  // Desktop (Naver Maps) - API 키 불필요
  return `https://map.naver.com/?elng=${lng}&elat=${lat}`
}
```

### 사용 예시

```typescript
// 사용자의 기기에 따라 자동으로 적절한 지도 앱 열림
const url = getDirectionsUrl(37.36, 127.1054, '서울 강남구 강남대로 00')
window.open(url, '_blank')
```

### 추가 파라미터 (선택사항)

더 자세한 정보를 전달하려면:

```typescript
// 목적지 이름 포함
https://map.naver.com/?elng=127.1054&elat=37.3600&title=돌잔치%20행사장

// 줌 레벨 추가
https://map.naver.com/?elng=127.1054&elat=37.3600&level=10
```

### 환경 변수

네이버맵은 API 키가 필요하지 않으므로 환경 변수 설정이 불필요합니다.

### 테스트

```typescript
// 브라우저 콘솔에서 테스트
const url = 'https://map.naver.com/?elng=127.1054&elat=37.3600'
window.open(url, '_blank')
```

---

## 환경 변수 템플릿

### `.env.local.example`

프로젝트 루트에 생성 (Template으로 사용, 커밋 가능):

```bash
# Kakao Maps (Phase 2: 지도 연동 - 필수)
VITE_KAKAO_MAP_API_KEY=your_kakao_map_api_key_here

# Naver Maps (Phase 2: 길찾기용 - 선택, API 키 불필요)
# 네이버맵은 URL 스킴만으로 작동하므로 환경 변수 설정 불필요

# 선택사항: 백엔드 API (T2-3부터 필요)
VITE_API_BASE_URL=http://localhost:3000
VITE_API_TIMEOUT=30000

# 개발 환경
VITE_DEBUG=true
VITE_LOG_LEVEL=debug
```

### `.env.local` (개발 - 커밋 금지)

로컬 개발 시 실제 값 입력:

```bash
# 카카오맵 API 키 (필수)
VITE_KAKAO_MAP_API_KEY=1234567890abcdef...

# 백엔드 API (선택사항)
VITE_API_BASE_URL=http://localhost:3000

# 개발 환경
VITE_DEBUG=true
VITE_LOG_LEVEL=debug
```

### 환경 변수 접근

`src/` 폴더에서:

```typescript
const kakaoKey = import.meta.env.VITE_KAKAO_MAP_API_KEY
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
```

---

## 각 파일별 사용 위치

### 카카오맵 설정

| 파일                      | Phase | 용도                    |
| ------------------------- | ----- | ----------------------- |
| `index.html`              | 2     | Kakao Maps API 스크립트 |
| `src/components/Map.tsx`  | 2     | 지도 컴포넌트           |
| `src/utils/directions.ts` | 2     | 길찾기 URL 생성         |
| `.env.local`              | 2     | API 키 저장             |

**설정 읽기 순서**:

1. `index.html`에 카카오맵 스크립트 로드
2. `src/components/Map.tsx`에서 `window.kakao` 사용
3. `.env.local`에서 API 키 로드

### 네이버맵 설정

| 파일                      | Phase | 용도                       |
| ------------------------- | ----- | -------------------------- |
| `src/utils/directions.ts` | 2     | 길찾기 URL 생성 (선택사항) |

**특징**: API 키 불필요 - `getDirectionsUrl()` 함수에 좌표와 주소만 전달하면 됩니다.

---

## 로컬 테스트

### 카카오맵 테스트

```typescript
// 브라우저 콘솔에서
window.kakao.maps.services
  .Geocoder()
  .addressSearch('서울 강남구 강남대로 00', (result, status) => {
    if (status === window.kakao.maps.services.Status.OK) {
      console.log(result[0].x, result[0].y) // 경도, 위도
    }
  })
```

### 환경 변수 확인

```bash
# Vite 문서: https://vitejs.dev/guide/env-and-mode.html

# 구성된 env 변수 확인
npm run dev # 콘솔 확인
```

---

## 배포 시 환경 변수

### GitHub Pages 배포 (vite.config.ts)

```typescript
export default defineConfig({
  base: '/shining-star/',
  // ... 기타 설정
})
```

**환경 변수 관리**:

1. **Public 키만 노출** (안전):
   - `VITE_KAKAO_MAP_API_KEY` — Public 키라서 노출 OK
   - 백엔드 API URL — 공개 가능

2. **Private 키는 별도 관리** (백엔드):
   - 데이터베이스 비밀번호 — 백엔드 환경 변수만
   - API 인증 토큰 — 백엔드에서 관리

### GitHub Secrets 설정 (CI/CD용)

1. Repository → **"Settings"** → **"Secrets and variables"** → **"Actions"**
2. **"New repository secret"** 클릭
3. 다음 환경 변수 추가:
   ```
   VITE_KAKAO_MAP_API_KEY
   VITE_API_BASE_URL (필요시)
   ```

### 배포 스크립트 (`.github/workflows/deploy.yml`)

```yaml
- name: Build
  run: npm run build
  env:
    VITE_KAKAO_MAP_API_KEY: ${{ secrets.VITE_KAKAO_MAP_API_KEY }}
    VITE_API_BASE_URL: ${{ secrets.VITE_API_BASE_URL }}
```

---

## 보안 체크리스트

- [ ] `.env.local` `.gitignore`에 추가됨
- [ ] `.env.local.example` 커밋됨 (템플릿용)
- [ ] API 키 노출되지 않음 (git log 확인)
- [ ] 프론트엔드: Public 키만 사용
- [ ] 백엔드: Private 키는 환경 변수에서만 로드
- [ ] GitHub Secrets 설정 완료
- [ ] 카카오맵 플랫폼 등록 완료
- [ ] 카카오맵 API 키 안전하게 보관

---

## 문제 해결

### 카카오맵 "APPKEY_EXPIRED"

```
원인: API 키 만료 또는 플랫폼 미등록
해결: 카카오 개발자 콘솔에서 키 확인, 플랫폼 재등록
```

### 환경 변수 로드 안 됨

```
원인: import.meta.env 문법 오류 또는 Vite 캐시
해결: npm run dev 재시작, .env.local 확인
```

---

**다음 단계**: Phase별 Task 시작 → `tasks.md` 참고
