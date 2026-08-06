# 카카오맵 설정 상세 가이드

Kakao Maps API를 통한 지도 연동 완벽 가이드입니다.

---

## 개요

### 카카오맵이란?

카카오에서 제공하는 지도 서비스입니다. 한국 지역 데이터가 풍부하고 모바일 최적화가 뛰어납니다.

```
카카오맵 서비스
├─ Map API (지도 표시) ← 우리가 사용
├─ Local Search (주소/위치 검색)
├─ Directions (길찾기)
└─ ... (기타 서비스)
```

### 필수 준비물

- 카카오 계정 (또는 신규 가입)
- 현재 프로젝트에 Node.js 설치됨

---

## 단계별 설정

### Step 1: 카카오 개발자 계정 생성

#### 1.1 카카오 계정 준비

카카오 계정이 없으면 [가입](https://accounts.kakao.com/login):

1. **"회원가입"** 클릭
2. 이메일 또는 전화번호로 가입
3. 인증 완료

#### 1.2 카카오 개발자 접속

1. [카카오 개발자](https://developers.kakao.com) 방문
2. **"로그인"** (카카오 계정으로)
3. 약관 동의 및 프로필 설정 완료

---

### Step 2: 애플리케이션 등록

#### 2.1 앱 관리 접속

1. 카카오 개발자 → 상단 메뉴 **"내 애플리케이션"**
2. 또는 대시보드에서 **"앱 만들기"** 또는 **"애플리케이션 추가하기"**

#### 2.2 앱 정보 입력

1. **앱 이름**: `shining-star-invitation`
2. **비즈니스 타입**:
   - 개인: **"개인"** 선택
   - 회사: **"기업"** 선택
3. **"저장"** 클릭

#### 2.3 앱 생성 완료

앱이 생성되면 **"앱 설정"** 페이지로 이동합니다.

---

### Step 3: REST API 키 발급

#### 3.1 API 키 확인

1. 카카오 개발자 → **"내 애플리케이션"** → 방금 생성한 앱 클릭
2. **"앱 설정"** 탭 → **"요약"** 섹션
3. **"REST API 키"** 확인

```
[앱 이름]
└─ 앱 키
  ├─ JavaScript 키
  ├─ REST API 키 ← 우리가 사용
  └─ Admin 키
```

#### 3.2 REST API 키 복사

**"REST API 키"**를 클릭하여 전체 선택 후 복사:

```
1234567890abcdef1234567890abcdef
```

`.env.local`에 저장:

```env
VITE_KAKAO_MAP_API_KEY=1234567890abcdef1234567890abcdef
```

---

### Step 4: 플랫폼 설정

#### 4.1 플랫폼 등록 페이지 접속

1. 카카오 개발자 → 해당 앱 → **"앱 설정"** → **"플랫폼 설정"**
2. 또는 왼쪽 메뉴 **"설정"** → **"플랫폼 설정"**

#### 4.2 웹 플랫폼 URL 등록

##### 로컬 개발용

1. **"Web 플랫폼 URL 등록"** 또는 **"Web 추가"** 클릭
2. **"사이트 URL"** 입력: `http://localhost:5173`
   - Vite 기본 포트: 5173
   - 다른 포트를 사용하면 해당 포트 입력
3. **"저장"** 클릭

##### 배포용 (GitHub Pages)

1. **"웹 플랫폼 URL"** 섹션에서 **"추가"** 클릭
2. URL 입력: `https://username.github.io/shining-star`
   - `username`: GitHub 사용자명
   - 저장소 이름이 `shining-star`일 경우
3. **"저장"** 클릭

#### 4.3 등록 완료

```
✅ 로컬: http://localhost:5173
✅ 배포: https://username.github.io/shining-star
```

---

### Step 5: HTML에 카카오맵 스크립트 로드

#### 5.1 index.html에 스크립트 태그 추가

`index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>돌잔치 초대장</title>

    <!-- 카카오맵 API 스크립트 -->
    <script
      type="text/javascript"
      src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_REST_API_KEY&libraries=services,clusterer"
    ></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

**주의**: `YOUR_REST_API_KEY`를 Step 3에서 복사한 REST API 키로 바꾸세요.

또는 환경 변수 활용:

`index.html` (Vite는 HTML에서 환경 변수를 지원하지 않음):

```html
<!-- ❌ 이렇게는 안 됨 -->
<script src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=%VITE_KAKAO_MAP_API_KEY%"></script>
```

대신 JavaScript에서 동적 로드:

```typescript
// src/utils/kakaoMap.ts
export const loadKakaoMap = async () => {
  return new Promise((resolve, reject) => {
    if (window.kakao) {
      resolve(window.kakao)
      return
    }

    const script = document.createElement('script')
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_API_KEY}&libraries=services,clusterer`
    script.async = true
    script.onload = () => {
      resolve(window.kakao)
    }
    script.onerror = () => {
      reject(new Error('Kakao Maps SDK 로드 실패'))
    }
    document.head.appendChild(script)
  })
}
```

---

### Step 6: 지도 컴포넌트 생성

#### 6.1 Map 컴포넌트 작성

`src/components/Map.tsx`:

```typescript
import { useEffect, useRef } from 'react'
import { loadKakaoMap } from '../utils/kakaoMap'

interface MapProps {
  lat: number
  lng: number
  eventTitle: string
  address: string
}

export function Map({ lat, lng, eventTitle, address }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initMap = async () => {
      try {
        // 카카오맵 SDK 로드
        const kakao = await loadKakaoMap()

        if (!mapContainer.current) return

        // 지도 생성
        const mapOptions = {
          center: new kakao.maps.LatLng(lat, lng),
          level: 3, // 줌 레벨 (1: 최대 축소, 14: 최대 확대)
        }
        const map = new kakao.maps.Map(mapContainer.current, mapOptions)

        // 마커 생성
        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(lat, lng),
          map: map,
        })

        // 정보 윈도우 (마커 클릭 시 표시)
        const infoWindow = new kakao.maps.InfoWindow({
          content: `
            <div style="padding: 12px; font-size: 14px; width: 220px;">
              <strong>${eventTitle}</strong><br/>
              <span style="color: #666;">${address}</span>
            </div>
          `,
          removable: true,
        })

        // 마커 클릭 시 정보 윈도우 표시
        kakao.maps.event.addListener(marker, 'click', () => {
          infoWindow.open(map, marker)
        })

        // 페이지 로드 시 정보 윈도우 자동 표시
        infoWindow.open(map, marker)
      } catch (error) {
        console.error('지도 로드 실패:', error)
      }
    }

    initMap()
  }, [lat, lng, eventTitle, address])

  return (
    <div
      ref={mapContainer}
      style={{
        width: '100%',
        height: '400px',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    />
  )
}
```

---

## 주소 검색 (좌표 변환)

### 주소로부터 좌표 얻기

행사 주소를 알고 있으면 자동으로 좌표를 검색할 수 있습니다.

#### 방법 1: Kakao Maps API 사용

`src/utils/directions.ts`:

```typescript
export const getCoordinates = async (address: string) => {
  try {
    const response = await fetch(
      `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(address)}`,
      {
        headers: {
          Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_MAP_API_KEY}`,
        },
      }
    )

    const data = await response.json()

    if (data.documents && data.documents.length > 0) {
      const { x, y } = data.documents[0]
      return {
        lat: parseFloat(y),
        lng: parseFloat(x),
        address: data.documents[0].address_name,
      }
    }

    return null
  } catch (error) {
    console.error('주소 검색 실패:', error)
    return null
  }
}
```

#### 방법 2: 온라인 도구 사용

1. [카카오 주소 검색](https://apis.map.kakao.com/web/sample/addr2coord/)
2. 주소 입력 후 검색
3. 나타나는 좌표 (x: 경도, y: 위도) 사용

---

## 길찾기 기능

### 플랫폼별 지도 앱 연동

길찾기 기능(T2-2)는 사용자의 기기에 따라 자동으로 적절한 지도 앱을 엽니다:

- **iOS**: Apple Maps (API 키 불필요)
- **Android**: Google Maps (API 키 불필요)
- **Desktop**: Naver Maps (API 키 불필요)

`src/utils/directions.ts`:

```typescript
export const getDirectionsUrl = (
  lat: number,
  lng: number,
  address: string
): string => {
  const ua = navigator.userAgent.toLowerCase()

  // iOS (Apple Maps) - 별도 설정 불필요
  if (ua.includes('iphone') || ua.includes('ipad')) {
    return `https://maps.apple.com/?daddr=${lat},${lng}`
  }

  // Android (Google Maps) - 별도 설정 불필요
  if (ua.includes('android')) {
    return `https://maps.google.com/maps/dir//?destination=${lat},${lng}`
  }

  // Desktop (Naver Maps) - 별도 설정 불필요, URL 스킴만 사용
  return `https://map.naver.com/?elng=${lng}&elat=${lat}`
}

// 사용 예시
const url = getDirectionsUrl(37.36, 127.1054, '서울 강남구...')
window.open(url, '_blank')
```

> **중요**: 이 함수는 API 키가 필요하지 않습니다. URL 스킴만으로 작동합니다.

---

## 로컬 테스트

### 테스트 1: 지도 표시 확인

1. `npm run dev` 실행
2. 브라우저에서 지도가 표시되는지 확인
3. 마커가 올바른 위치에 표시되는지 확인

### 테스트 2: 정보 윈도우 확인

1. 마커 클릭
2. 행사명과 주소가 표시되는지 확인

### 테스트 3: 길찾기 테스트

1. 길찾기 버튼 클릭
2. 기기별 지도 앱이 열리는지 확인:
   - iOS: Apple Maps
   - Android: Google Maps
   - Desktop: Naver Maps

### 테스트 4: 모바일 반응형 확인

1. DevTools → 모바일 에뮬레이션 (Ctrl+Shift+M)
2. 여러 기기 크기에서 지도가 올바르게 표시되는지 확인

---

## 자주 묻는 질문 (FAQ)

### Q1: 지도가 회색 화면으로 표시됩니다.

**원인**: API 키가 올바르지 않거나 플랫폼 설정이 없음

**해결**:

1. REST API 키가 정확히 입력되었는지 확인
2. 플랫폼에 현재 사이트 URL이 등록되어 있는지 확인
3. 페이지 새로고침 (F5)

### Q2: "자바스크립트 키 인증 실패" 에러

**원인**: 잘못된 API 키 또는 플랫폼 미등록

**확인**:

1. REST API 키를 사용하는지 확인 (JavaScript 키 아님)
2. 카카오 개발자 → 플랫폼 설정에서 현재 URL 확인
3. `index.html`에서 API 키 확인

### Q3: 스크린샷은 어디서?

**해결**:

1. [카카오 개발자](https://developers.kakao.com) 접속
2. 상단 **"문서"** → **"Maps API"** 가이드
3. "빠른 시작" 섹션에서 스크린샷 확인

### Q4: 마커 아이콘을 커스터마이징하고 싶습니다.

```typescript
const markerImage = new kakao.maps.MarkerImage(
  '/custom-marker.png',
  new kakao.maps.Size(32, 32),
  { offset: new kakao.maps.Point(16, 32) }
)

const marker = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(lat, lng),
  image: markerImage,
  map: map,
})
```

---

## 보안 주의사항

### ⚠️ REST API 키 보호

```typescript
// ❌ 클라이언트에 하드코딩 금지
const apiKey = 'abc123xyz...'

// ✅ 환경 변수에서 로드
const apiKey = import.meta.env.VITE_KAKAO_MAP_API_KEY
```

### ✅ 환경 변수 관리

```bash
# .env.local (커밋 금지)
VITE_KAKAO_MAP_API_KEY=실제_키_값

# .env.local.example (커밋 필수)
VITE_KAKAO_MAP_API_KEY=your_kakao_map_api_key_here
```

---

## 체크리스트

설정 완료 확인:

- [ ] 카카오 개발자 계정 생성
- [ ] 애플리케이션 등록
- [ ] REST API 키 발급
- [ ] 로컬 플랫폼 URL 등록 (http://localhost:5173)
- [ ] 배포 플랫폼 URL 등록 (GitHub Pages URL)
- [ ] `.env.local`에 API 키 입력
- [ ] `index.html`에 카카오맵 스크립트 추가
- [ ] `src/components/Map.tsx` 생성
- [ ] `npm run dev`에서 지도 확인
- [ ] 마커와 정보 윈도우 확인
- [ ] 길찾기 기능 테스트
- [ ] 모바일 에뮬레이션에서 반응형 확인

---

## 다음 단계

- Phase 2-1 (T2-1: 카카오맵 연동) 완료!
- [T2-2: 길찾기 기능](../TASK_MANAGEMENT.md#t2-2-길찾기-기능-네이버카카오애플) 시작

---

**참고**: [전체 API 설정](../API_SETUP.md) | [환경 변수 가이드](./ENVIRONMENT_VARIABLES.md)
