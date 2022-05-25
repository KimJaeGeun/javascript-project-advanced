# 상속, 클래스과 관련 내용

## class
- es6이후에 추가된 생성자 정의문법
- class사용법
    1. class 선언문
        - 호이스팅이 불가
        - 동일 이름의 복수로 선언하는 경우 타입오류 발생
        - 생성자 단독으로 호출이 불가
        ```
        class test {
            constructor() {
                // 초기화 처리 코드
            }
            // prototype 메서드
            hogeFunc() {

            }
        }
        ```
    2. class 표현식
        - 호이스팅이 불가
        - 동일 이름의 class를 복수로 작성 가능(해당 변수에만 할당함으로)
        ```
        const hoge = class test {// 1.과 동일}
        ```

- class 확장
    - 선언한 class에 extends키워드를 더하여 다른 생성자를 상속
    ```
    class test extends hoge {
    }
    ```