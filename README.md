# CAMMOA

## ✨ 시작 가이드

### yarn (classic (ver.1))

```
$ git clone user1@github.com:https://github.com/CAMMOA/cammoa_frontend.git
$ cd cammoa_frontend
$ yarn install // 의존성 설치
$ yarn dev // 개발 환경 실행
```

### Package/Library 설치

```
- yarn add <pakage> //dependecies 설치
- yarn add -D <pakage>// devDependencies 설치
```

---

## 📌 브랜치 전략

### Git-Flow

- `main`: 배포용 브랜치
- `develop`: 개발 브랜치로 개발자들이 이 브랜치를 기준으로 각자 작업한 기능들을 Merge
- `feature`: 각자의 feature 브랜치에서 개발 후 개발 완료되면, PR 작성하여 develop브랜치에 Merge

### Branch Type

- feature/ - 새로운 기능 개발 시
- bugfix/ - 버그 수정 시
- hotfix/ - 긴급한 버그 수정 시 (보통 프로덕션 환경에서 발생)
- release/ - 릴리즈 준비 시
- chore/ - 빌드 및 기타 작업 자동화, 문서 작업 등 코드와 관련 없는 작업

### Branch Naming Rule

Branch 이름은 작업 목적과 연관된 이슈 번호를 포함하는 방식

```
<타입>/<이슈 번호>-<간단한 설명>

- feature/1234-add-user-login
- bugfix/5678-fix-login-error
- release/1.2.0
```

---

## 🚀 커밋 규칙

```
<타입>(<모듈>): <변경 내용 요약> (#이슈 번호)

/* feat 적용 예시*/
- feat(auth): add login functionality (#123)
```

- feat - 새로운 기능 추가
- fix - 버그 수정
- refactor - 코드 리팩토링 (기능 변경 없이 구조 개선)
- style - 코드 포맷팅, 세미콜론 누락 등 (비즈니스 로직에 영향이 없는 변경)
- test - 테스트 추가 또는 수정
- docs - 문서 추가 및 수정
- chore - 빌드 작업, 패키지 관리 등

---

## 🍃Linting & Formatting

- ESLint
- Prettier
- `husky(commitLint)`: 커밋할 때 자동으로 명령어를 실행하는 `git hook`

```
pre-commit: 커밋하기 전에 실행(코드 포맷팅, lint 검사)
commit-msg: 커밋 메시지를 작성한 후, 저장할 때 실행(커밋 메시지 규칙 검사)
```

---

### ➡️ Style Guide Usage

ThemeProvider의 prop으로 theme 객체 전달해 사용

```
/* typography 적용 예시 */

${({ theme }) => theme.Style.Title_1} // 별도의 프로퍼티 지정 없이 적용
```
