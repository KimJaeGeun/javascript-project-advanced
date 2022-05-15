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

## 클로저
- 함수내 프로퍼티가 외부인자를 참조하고 있는 상황(그러한 랙시컬 스코프 그자체)
```
function testClosure() {
    // 외부 인자
    const hoge = 1;
    function console() {
        // 외부 인자 참조
        return hoge++;
    }
}
// 새로이 할당한 함수객체 func1에는 console(), console()의 클로저 testClosure()내부가 있다.
// 클로저는 할당받는 공간이기에 새롭게 할당받은 다른 함수객체와 공간을 공유하지 않는다.
const func1 = testClosure();
const func2 = testClosure();

// 이경우 둘의 출력값이 같다.(같은 외부인자를 참조하는 것으로 보이나 다른 공간이다.)
console.log(func1)
console.log(func2)
```

## 고차함수
- 함수를 인자로 받거나 반환값으로 함수를 내보내는 것
```
// 인자가 함수
function testFunc(f) {
    return f(1)
}
testFunc(function(a) {return a + 1})
    - 해당 인자인 함수를 콜백함수라 한다.

// 반환값이 함수
function testFunc(x) {
    return function() {
        return x + kl 10;
    }
}
```

### 메모이제이션
- 계산한 값을 저장하는 기법
- 함수의 경우 인자로 받은 함수를 실행한 값을 따로 관리한뒤 그 값을 이용 하는 것(중첩, 재귀함수에서 사용)

## 함수의 매개변수
- 함수에서 지정한 인자외의 복수의 인자를 사용할 경우 설정
    - 매개변수의 경우 배열의 값으로 받는다
    ```
    function test(a, b, ...args) {
        console.log(a);
        console.log(b);
        console.log(args);
    }

    test(1, 2, 3, 4, 5 );
    // 1
    // 2
    // [3, 4, 5]
    ```

## 이터레이터 함수
- 반복가능한 객체가 되는 함수
    - 함수내 랙시컬스코프에 yield반환을 삽입, 해당 yield값이 반복시 해당되는 객체가 됨
    ```
    function* iter() {
        yield 0;
        yield 1;
        yield 2;
    }

    for(const item of iter) {
        console.log(item);
    }
    // 1
    // 2
    // 3
    ```
## object내 열거
- for in 을 사용하여 object내 key값을 열거
- Object.keys()를 이용하여 object내 key값을 배열로 반환(숨겨진 프로퍼티, symbol값은 나오지않는다.)
- Object.getOwnPropertyNames()는 Object.keys()와 같은 기능이나 숨겨진 프로퍼티나 symbol값도 반환

## JSON
- 객체의 직렬화
    - 객체로 환원화 가능한 문자열

- **내장객체**
1. JSON.stringify()
    - 객체를 JSON으로 형변환
        1. 열거 가능한 프로퍼티만을 직렬화
            - 숨겨진 프로퍼티, symbol등은 표기되지않음
        2. function, undefined, RegExp, Error, symbol은 직렬화 불가
        3. Date객체는 ISO 포맷의 문자열로 직렬화
            - JSON.parse의 경우 그대로 출력
        4. NaN, Infinity, -Infinity, null 는 직렬화 불가
2. JSON.parse()
    - JSON을 객체로 형변환


## ES6이후 추가 객체 기능
1. 계산된 프로퍼티명
```
const name = 'NAME';
const i = 1

const obj = {
    [name + i] : '?'
}

console.log(obj)
//  { NAME1: '?' }
```

2. 약식 표기
```
const name = 'NAME';

const obj = {
    name
}

console.log(obj)
//  { name: 'NAME' }
```

3. 메서드 약식표기
```
const name = 'kim';

const obj = {
    name
    sayKim() {
        console.log(this.name)
    }
}

obj.sayKim()
//  kim
```