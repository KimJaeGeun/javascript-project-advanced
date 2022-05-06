# 타입, 변수, 문법에 관련된 기록

## 호이스팅
- 끌어 올린다는 뜻으로 하위에서 선언한 변수, 함수등을 상위에서 끌어올려 사용 하는 것
- 호이스팅이 불가한 경우
    - 함수의 경우 표현식으로 선언한 함수
    - const, let으로 선언한 변수의 경우
    - 선언과 동시에 값을 대입한 변수의 경우

## 연산자

1. 논리 연산자의 값 반환
    - 각 논리연산의 값 도출 부분을 기준으로 값을 반환
    - 보다 복수인 경우도 이하와 같다.
        - a && b && c
        - a || b || c
    - && 연산자 : a && b일때 a,b가 모두 true여야만 반환값이 true
        1. true인 경우
            ```
            a && b
            b를 반환 : true의 경우 b의 값까지 true판단해야 하기때문에
            ```
        2. false인 경우
            ```
            a && b
            a를 반환 : false인 경우 b부분에서 판단이 되기에(false판단 이전까지만 판단)
            ```
    - || 연산자 : a || b일때 a 혹은 b가 true라면 반환이 true
        1. true인 경우
            ```
            a || b
            a를 반환
            ```
        2. false인 경우
            ```
            a && b
            b를 반환
            ```
2. delete
    - 객체의 프로퍼티, 배열의 요소 제거시 사용
    - 객체의 프로퍼티 삭제
        ```
        const obj = {
            a: 'A',
            b: 'B',
            c: 'C'
        }
        delete obj['b'];
        console.log(obj);
        // {a: 'A', c: 'C'}
        ```
    - 배열의 요소 제거시 사용
        ```
        const array = [1, 2, 3, 4, 5];
        delete array['2'];
        console.log(array)
        console.log(array['2'])
        console.log(array.length)
        // [1, 2, empty, 4, 5]
        // undefined
        // 5
        ```
        - 값이 삭제되었기에 해당 배열값은 undefined
        - 요소값만을 삭제하므로 인덱스는 남아있음(배열의 length에 영향X)
3. in
    - 객체 내 프로퍼티 포함 여부 확인하여 boolean값을 반환
    - 배열의 경우
        ```
        const array = [1, 2, 3, 4, 5];
        console.log(1 in array)
        // true
        console.log(6 in array)
        // false
        delete array['2'];
        console.log(2 in array)
        // false
        ```
        - 배열 내 인덱스 검사
        - 해당 인덱스 내 값을 검사
    - 객체의 경우
        ```
        const obj = {
            a: 'A',
            b: 'B',
            c: 'C',
            f: 'd'
        }
        console.log('a' in obj)
        // true
        console.log('d' in obj)
        // false
        ```
        - 값이 아닌 key값을 기준으로 검산
4. instanceof
    - TODO: 이후 기록
