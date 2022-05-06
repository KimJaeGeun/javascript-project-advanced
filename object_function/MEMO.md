# 객체, 함수에 관련된 기록

## 자바스크립트내 객체의 종류
1. 네이티브 객체
    - 내장 생성자 객체
        - Object, String, Number, Boolean, Array, Date, Funtion, RegExp, Error, Symbole 등
    - 기타 객체
        - JSON, Math 등
2. 호스트객체
    - 브라우저 객체
        - Window, Navigator, History, Location 등
    - DOM객체
        - HTML요소 조작 객체
    - 기타 객체
        - XMLHttpRequest 등
3. 사용자 정의 객체
    - 코드의 실행 결과로 생성된 객체

## 배열
- 자바스크립트내에서 배열은 객체
- 인덱스를 문자열로 변환, 프로퍼티로서 사용
    ```
    const testArray = ['a', 'b', 'c']
    testArray['1'] = 'b'
    ```
- ES6부터 추가, TypedArray
    - 이후 기록

- [delete연산자]()