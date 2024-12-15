## Installation Guideline

git clone https://github.com/sogong24/front.git

의존성을 설치합니다:
npm install
개발 서버를 실행합니다:
npm start
React-Icons 라이브러리를 설치합니다:
npm install react-icons

## Repository Structure 

api/
API 통신 로직 및 데이터 처리를 담당하는 디렉토리.

components/
재사용 가능한 UI 컴포넌트를 저장하는 디렉토리.

hooks/
React의 Custom Hooks를 정의하는 디렉토리.

pages/
페이지 단위의 컴포넌트를 저장하는 디렉토리.
예를 들어, 로그인 페이지, 마이페이지, 게시물 작성 페이지 등이 여기에 포함.


## Repository Branches

1. main
역할: 배포 준비가 된 안정적인 코드를 저장하는 기본 브랜치.
업데이트 주기: Pull Request를 통해서만 업데이트되며, 주요 기능이 완료된 후 병합.
2. mypage
작업자: and-to-endew
내용: 사용자 개인 페이지 개발 작업.
사용자 정보 표시 기능.
React 상태 관리 최적화 작업 포함.
3. temp-minbros
작업자: minbros
내용: 임시 브랜치로, 새로운 기능 또는 실험적인 코드를 테스트하기 위한 공간.
기존 코드와 병합 전 최종 점검용.
4. temp
작업자: yccs-26
내용: 기능 구현 전, 테스트와 디버깅 작업을 진행하기 위한 브랜치.
디버깅 로그 추가 및 API 요청 최적화 작업 포함.
5. post-create
작업자: chanwoo0218
내용: 게시물 작성 관련 기능 개발.
글쓰기 페이지 구현.
6. login
작업자: chanwoo0218
내용: 로그인 및 인증 관련 기능 개발.
