# 등불(Deungbul) - 안전한 귀가길 만들기 PRD

## 1. 제품 개요

### 1.1 비전

모두가 안전하게 귀가할 수 있는 세상을 만듭니다.

### 1.2 미션

- 커뮤니티 기반의 안전한 귀갓길 정보 공유 플랫폼 구축
- 실시간 위치 기반 안전 경로 추천
- 시민 참여형 안전 지도 제작

### 1.3 핵심 가치 제안

1. **안전한 경로 제공**: 가로등, CCTV, 경찰서 등 안전 시설물 정보 기반 경로 추천
2. **커뮤니티 기반 정보**: 사용자 참여형 위키 방식의 실시간 정보 업데이트
3. **전국 확장성**: 서울시 한정이 아닌 전국 단위 서비스 제공
4. **신뢰성**: 다수의 사용자 검증을 통한 정보 신뢰도 확보

## 2. 기능 요구사항

### 2.1 사용자 인증 (Phase 1)

- 이메일/소셜 로그인
- 사용자 프로필 관리
- 활동 이력 관리
- 신뢰도 점수 시스템

### 2.2 안전 시설물 관리 (Phase 1)

- 시설물 유형별 마커 표시
  - 가로등
  - CCTV
  - 경찰서/파출소
  - 안전벨
  - 편의점/24시간 상점
- 시설물 정보 등록/수정
- 시설물 상태 리포트
- 신규 시설물 제안

### 2.3 안전 구역 관리 (Phase 2)

- 안전/위험 구역 표시
- 구역 정보 등록/수정
- 실시간 위험 구역 신고
- 구역 상태 변경 이력

### 2.4 경로 탐색 (Phase 2)

- 안전 경로 추천
- 실시간 위치 기반 경로 제공
- 사용자 선호도 반영
- 커뮤니티 추천 경로

### 2.5 위키 기능 (Phase 3)

- 정보 편집 이력 관리
- 사용자 기여도 시스템
- 정보 검증 프로세스
- 버전 관리

## 3. 기술 스택

### 3.1 프론트엔드

- Next.js 15 (App Router)
- React 19 (Server Components)
- TypeScript
- TailwindCSS
- Shadcn UI

### 3.2 백엔드

- Supabase
  - 데이터베이스
  - 인증
  - 실시간 기능
- Edge Functions

### 3.3 지도

- Kakao Maps API
  - 지도 표시
  - 마커 관리
  - 경로 탐색

## 4. 데이터 모델

### 4.1 사용자 (users)

- id: UUID
- email: string
- name: string
- trustScore: number
- createdAt: timestamp
- updatedAt: timestamp

### 4.2 시설물 (markers)

- id: UUID
- type: enum
- position: point
- title: string
- description: string
- status: enum
- reportCount: number
- createdBy: UUID
- createdAt: timestamp
- updatedAt: timestamp

### 4.3 안전구역 (zones)

- id: UUID
- type: enum
- path: polygon
- title: string
- description: string
- status: enum
- reportCount: number
- createdBy: UUID
- createdAt: timestamp
- updatedAt: timestamp

### 4.4 경로 (routes)

- id: UUID
- path: linestring
- distance: number
- duration: number
- safetyScore: number
- markers: UUID[]
- zones: UUID[]
- createdBy: UUID
- createdAt: timestamp
- updatedAt: timestamp

## 5. 개발 단계

### Phase 1 (2개월)

- 사용자 인증 시스템
- 기본 지도 기능
- 시설물 마커 관리
- 기본 UI/UX

### Phase 2 (2개월)

- 안전 구역 관리
- 경로 탐색 알고리즘
- 실시간 위치 추적
- 신고 시스템

### Phase 3 (3개월)

- 위키 기능
- 버전 관리
- 사용자 기여도 시스템
- 통계 및 분석

### Phase 4 (3개월)

- 동행 서비스
- 실시간 채팅
- 신뢰도 시스템
- API 확장

## 6. 성공 지표 (KPI)

### 6.1 사용자 지표

- MAU (Monthly Active Users)
- DAU (Daily Active Users)
- 사용자 참여율
- 재방문율

### 6.2 서비스 지표

- 등록된 시설물 수
- 안전 구역 등록 수
- 경로 탐색 횟수
- 정보 정확도

### 6.3 안전 지표

- 시설물 커버리지
- 위험 구역 개선율
- 사용자 만족도
- 신고 처리율
