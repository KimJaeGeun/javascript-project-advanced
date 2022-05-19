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
- 해당 객체값을 복사하여 전개한 객체를 반환하기에 원본객체에 영향없음

- **활용**
1. 직관적인 추가
```
const plus = [6, 7, 8]
const arr = [1, 2, 3, ...plus, 4, 5];
//  [ 1, 2, 3, 6, 7, 8, 4, 5 ]
```

2. 배열조합
- 배열내 배열을 추가하는 경우 2차원배열이 되지만(push()) 전개연산자를 통해 배열내 요소만을 추가 가능하다.
```
const plus = [6, 7, 8]
const arr = [1, 2, 3, 4, 5];

arr.push(plus)
// [1, 2, 3, 4, 5, [6, 7, 8]]

arr.push(...plus)
// [1, 2, 3, 4, 5, 6, 7, 8]
```

3. 객체복사
- 전개연산자를 통한 객체 복사로 수정메서드 사용시 원본 객체의 변화 없이 사용가능
```
arr.push(plus)
const arr = [5, 4, 3, 2, 1];

arr.sort()
arr
// [1, 2, 3, 4, 5]
// [1, 2, 3, 4, 5]
...arr.sort()
arr
// [1, 2, 3, 4, 5]
// [5, 4, 3, 2, 1]
```

4. 함수내 미지정 복수 인자
- 직접 지정하지않은 상태에서 복수의 인자를 배열로 받을때 사용
```
function func(...value) {
    console.log(value)
}

func(1, 2, 3, 4, 5);
// [1, 2, 3, 4, 5]
```

## Map , Set
- 데이터를 수집하여 활용가능한 이터러블 객체
- Map은 중복이 허용되나, Set은 불가하다.
- TODO: 활용함수