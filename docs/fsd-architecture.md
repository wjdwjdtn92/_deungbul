# Feature-Sliced Design (FSD) 아키텍처 가이드

## 레이어 구조

```
src/
├── app/         - Next.js App Router 설정
├── views/       - 페이지 컴포넌트
├── widgets/     - 독립적인 페이지 블록
├── features/    - 사용자 상호작용
├── entities/    - 비즈니스 엔티티
└── shared/      - 재사용 가능한 코드
```

## 레이어별 책임

### app/

- Next.js App Router 설정
- 기본 레이아웃
- 메타데이터
- 전역 에러 처리

### views/

- 페이지 컴포넌트
- 레이아웃
- widget 조합
- 페이지별 상태 관리

### widgets/

- 독립적인 페이지 블록
- 여러 feature 조합
- 구조:
  - ui/ - UI 컴포넌트
  - model/ - 위젯 상태 관리
  - lib/ - 위젯 유틸리티

### features/

- 사용자 상호작용
- 비즈니스 로직
- 구조:
  - api/ - API 호출
  - model/ - 상태 관리
  - ui/ - UI 컴포넌트

### entities/

- 비즈니스 엔티티
- 도메인 타입
- 기본 CRUD 작업

### shared/

- 재사용 가능한 코드
- 구조:
  - api/ - API 클라이언트
  - lib/ - 유틸리티
  - ui/ - UI 컴포넌트
  - types/ - 공통 타입

## 개발 원칙

1. 상향식 의존성

   - 상위 레이어는 하위 레이어만 참조 가능
   - 같은 레이어 간 참조 불가

2. 슬라이스 독립성

   - 각 슬라이스는 독립적으로 개발
   - 명시적 공개 API (index.ts)

3. 세그먼트 구조

   - ui/ - UI 컴포넌트
   - model/ - 비즈니스 로직
   - api/ - API 통신
   - lib/ - 유틸리티

4. 네이밍 규칙

   - 파일: kebab-case
   - 컴포넌트: PascalCase
   - 함수: camelCase

5. 타입 관리
   - 엔티티 타입은 entities/에 정의
   - 공통 타입은 shared/types/에 정의
   - 각 기능별 타입은 해당 feature/에 정의
