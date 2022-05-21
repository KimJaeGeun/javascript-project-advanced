# 웹문서

## 웹문서의 구성

1. window
    - DOM문서를 담은 창을 의미
    - javascript내에서는 현재 작동중인 창을 의미하는 전역변수
    - 탭이 있는 브라우저의 경우 각각의 탭을 의미
2. document
    - 브라우저내 웹페이지를 의미
    - 페이지콘텐츠의 진입부분을 의미
    - DOM api를 사용

## 웹 브라우저에서의 자바스크립트의 실행 순서

1. 웹페이지를 열어 window객체 생성
2. window객체 내 프로퍼티로써 document 객체를 생성, DOM트리구조를 구축
    - css의 구문분석
3. HTML문서를 해석하며 document 객체요소, 텍스트 노드를 작성
4. HTML요소 내부의 script요소가 있을 시 코드 해석
    - script구문 해석 시 다음 HTML구문 해석은 일시 정지
5. HTML구문 해석 완료하여 DOM트리구조 구축을 완료하면  DOMcontentLoaded이벤트 발생
6. 외부리소스(이미지, 동영상 등)가 있을시 외부리소스을 로드
7. 모든 리소스 로드가 끝났을때 window객체내 load이벤트 발생
8. 이후 window내에서 일어나는 이벤트를 처리 가능

## window내 객체

1. location
    - window내 표시되는 웹문서의 url관리
    - 각 웹문서의 위치정보 및 관리를 담당
2. history
    - window내 표시된 웹문서의 열람 이력관리
3. navigator
    - window내 표시된 웹문서의 스크립트가 실행되는 웹브라우저의 정보 관리
4. screen
    - 웹문서가 표시되는 화면의 크기 및 색상등의 정보 관리
5. document
    - window내 표시되는 웹문서의 정보 관리
    -DOM트리의 참조 및 활용 가능
    
