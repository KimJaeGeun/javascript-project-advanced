# javascript-project-advanced

## 목적
- [javascript기본공부](https://github.com/KimJaeGeun/javascript-project)의 심화편
- 심화내용이기에 선행 학습과 중복되는 내용은 기입하지않음

## 목차
1. 타입 & 기본 문법
2. 객체 & 함수
3. 브라우저내 프로그래밍
4. 웹문서
5. 이벤트처리
6. HTTP제어

## 다시 공부할 것
1. 객체 상속
    - prototype
2. mixin함수의 실용법에 대하여 - o
    - 단순히 프로퍼티를 더한다긴 보단 디폴트 공용함수를 작성하여 해당 함수를 공통적으로 사용가능하게끔, 전역으로 사용하게끔하는 하나의 기법
    - (vue) plugin함수
    - 객체의 프로퍼티를 더하는 작업은 Object.assigin()으로 가능
3. 유사배열 객체의 타입값 및 유사배열과 배열을 코드상 구분 하는 것에 대하여
4. map 객체의 활용
5. 아래의 의미
    ```
    const test = {a: 'A', obj: 'qwer'}
    const {obj = {}, a} = test || {}

    console.log(obj)
    ```
