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

## 함수 정의법
1. 함수 선언식
```
function testFunc() {}
```
2. 리터럴 정의
```
const testFunc = function() {}
```
3. Function생성자 정의
```
const testFunc = new Function();
```
4. 화살표 함수
```
const testFunc = () => {}
```

## 중첩 함수
- 함수내 함수를 선언하는 것
- 클로저 개념이 사용되며(보다 높은 계층의 변수등을 사용 가능), 오로지 함수내에서 중첩되어 선언가능하다
    - 제어구문의 실행문내에서 선언 불가
```
function firstFunc() {
    function sencondFunc() {

    }
}
```

## 호출
- 함수는 호출해야만 작동하므로 선언으로 작동하지않는다.
- 즉시호출
    - 선언과 동시에 호출하는 것
    ```
    (function(){
        // 실행
    }())
    ```

## 함수 스코프에 관련 예제
- 유효범위 체인
```
function consoleLog() {
    const a ='A';
    function testFunc1() {
        const b = 'B';
        function testFunc2() {
            const c = 'C';
            console.log(a + b + c)
            // consoleLog 스코프, testFunc1스코프, testFunc2 스코프
            // 상위계층에서 선언된 변수 사용
        }
        testFunc2()
    }
    testFunc1()
    console.log(a + b + c)
    // 하위계층에서 선언된 것을 호이스팅은 불가하다(const, let이니깐)
}
```