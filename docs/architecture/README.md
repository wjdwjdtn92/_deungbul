# 등불(Deungbul) 아키텍처

## 1. 아키텍처 개요

### 1.1 Feature-Sliced Design (FSD)

프로젝트는 FSD 아키텍처를 따르며, 다음과 같은 계층 구조를 가집니다:

```
src/
├── app/          # 앱 설정
├── views/        # 라우팅
├── widgets/      # 독립 컴포넌트
├── features/     # 상호작용
├── entities/     # 비즈니스 로직
└── shared/       # 공통 모듈
```

### 1.2 계층별 책임

- **app**: 전역 설정, 프로바이더, 스타일
- **views**: 페이지 레이아웃과 라우팅
- **widgets**: 독립적인 UI 블록
- **features**: 사용자 시나리오와 상호작용
- **entities**: 도메인 로직과 상태
- **shared**: 공통 유틸리티와 UI

## 2. 기술 스택

### 2.1 프론트엔드

- Next.js 15 (App Router)
- React 19 (Server Components)
- TypeScript
- TailwindCSS
- Shadcn UI

### 2.2 백엔드

- Supabase
  - PostgreSQL
  - Row Level Security
  - Realtime subscriptions
  - Edge Functions

### 2.3 지도

- Kakao Maps API
  - 커스텀 오버레이
  - 클러스터링
  - 경로 탐색

## 3. 모듈 구조

### 3.1 공통 모듈 구조

각 슬라이스는 다음 세그먼트로 구성:

- **ui/**: 컴포넌트
- **model/**: 비즈니스 로직
- **lib/**: 유틸리티

### 3.2 주요 모듈

1. **entities/session**

   - 사용자 인증
   - 세션 관리
   - 권한 제어

2. **entities/markers**

   - 시설물 데이터 모델
   - 마커 상태 관리
   - 위치 정보 처리

3. **entities/zones**

   - 안전 구역 데이터 모델
   - 구역 상태 관리
   - 폴리곤 처리

4. **features/routing**

   - 경로 탐색 알고리즘
   - 안전도 계산
   - 경로 최적화

5. **features/wiki**
   - 정보 편집 기능
   - 버전 관리
   - 변경 이력 추적

## 4. 데이터 흐름

### 4.1 상태 관리

- Server Components 우선
- 클라이언트 상태 최소화
- Supabase Realtime 활용

### 4.2 데이터 동기화

- Optimistic Updates
- 실시간 구독
- 캐시 전략

## 5. 보안

### 5.1 인증

- Supabase Auth
- JWT 토큰 관리
- 소셜 로그인

### 5.2 권한

- Row Level Security
- RBAC (Role Based Access Control)
- API 보안

## 6. 성능 최적화

### 6.1 렌더링

- Server Components 활용
- 동적 임포트
- 이미지 최적화

### 6.2 데이터

- 증분 정적 재생성 (ISR)
- 캐시 전략
- 지연 로딩

## 7. 배포

### 7.1 환경

- 개발 (Development)
- 스테이징 (Staging)
- 프로덕션 (Production)

### 7.2 CI/CD

- GitHub Actions
- 자동 배포
- 품질 검사
