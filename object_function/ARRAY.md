# 배열

## 배열내 내장객체(메서드)

1. 수정 메서드
    - 원본 배열을 즉시 수정
    - 예시)
        ```
        const array = [2, 4, 1, 3];
        array.sort();
        // [1, 2, 3, 4]
        ```
2. 접근자 메서드
    - 원본 배열을 복사한 후 가공하여 만들어진 새로운 배열을 반환
    - 예시)
    ```
    const array1 = [1, 2, 3];
    const array2 = [4, 5];
    array1.concat(array2);
    // [1, 2, 3, 4, 5]
    ```
3. 반복 메서드
    - 원본 배열 요소를 순회하며 작업
    - 예시)
    ```
    const array = [1, 2, 3];

    array.map(item => item + 1);
    // [2, 3, 4]
    ```

## 비구조화 할당
- 반복 가능한 객체의 요소를 할당하는 것
```
const array = ['a', 'b'];
const obj = {
    a: 'A',
    b: 'B'
}

const [t1, t2] = array;
console.log(t1) // 'a'
console.log(t1) // 'b'

const {a, test2} = obj;
console.log(a) // 'A'
console.log(test2) // undefined
```

## 전개 연산
- 전개연산자(spread operator) ... 를 사용
- 이터러블객체 앞에서 표시하여 배열, 함수의 인수목록으로 전개
    - TODO: 전개연산자의 활용법에 대하여
- 해당 객체값을 복사하여 전개한 객체를 반환하기에 원본객체에 영향없음
```

```