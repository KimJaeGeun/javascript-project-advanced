const basicArray = ["kjg", "ceh", {from: "korea"}, 9];

// 수정 메서드
// 원본 배열을 수정하여 반환
function arryEditFunc() {
    // 배열 객체 복사(원본배열 가공을 위해)
    const copyArray1 = [...basicArray];

    // array.copyWithin(target, startIndex, endIndex)
    // array의 target위치(array의 length보다 큰, 커지는 경우 복사하지않는다)에 startIndex ~ endIndex-1 요소를 복사하여 수정삽입
    copyArray1.copyWithin(4, 0, 2);
    console.log(copyArray1);

    const tempArray = [];
    const tempArray2 = ["", "", "", "", "", "", "", ];
    // 빈배열에는 사용 불가
    tempArray.fill(9);
    // 인덱스 미지정시 모든 값을 해단 값으로 채운다
    tempArray2.fill(9);
    console.log(tempArray);
    console.log(tempArray2);

    const copyArray2 = [...basicArray];
    copyArray2.pop()
    console.log(copyArray2)

    copyArray2.push("plus")
    console.log(copyArray2)

    copyArray2.reverse();
    console.log(copyArray2)

    copyArray2.shift();
    console.log(copyArray2)

    copyArray2.splice(0, 2, "test", "test2");
    console.log(copyArray2)

    copyArray2.unshift("start");
    console.log(copyArray2)



}

// 접근자 메서드
// 원본 배열을 가공하여 새로운 배열을 반환
function arryAccessFunc() {
    // 해당 배열끝에 타겟 배열을 연결(요소만 연결되기에 하나의 배열을 반환)
    const concatArray = basicArray.concat(["abc", "qwer"]);
    console.log(concatArray)

    // 값이 존재한다면 일치한 값의 첫번째 인덱스 반환, 부재시 -1 반환
    const indexOfArray = basicArray.indexOf(2);
    console.log(indexOfArray)

    const joinArray = basicArray.join();
    console.log(joinArray);

    // 값이 존재한다면 일치한 값의 마지막 인덱스 반환, 부재시 -1 반환
    const lastIndexOfArray = basicArray.lastIndexOf("ceh");
    console.log(lastIndexOfArray);

    // 해당 인덱스 내의 요소를 잘라 새로운 배열을 반환
    const sliceArray = basicArray.slice(0, 2);
    console.log(sliceArray);

    console.log("원본 배열")
    console.log(basicArray)

}

// 반복 메서드
// 원본 배열을 순회하여 작업을 실행
function arryLoopFunc() {
    // iterable 객체 반환
    // 인덱스와 값으로 이루어져있음
    const  entriesArray = basicArray.entries();
    console.log(entriesArray.next().value)
    // 인덱스로 이루어져있음
    const  keysArray = basicArray.keys();
    console.log(keysArray.next().value)
    // 값으로 이루어져있음
    const  valuesArray = basicArray.values();
    console.log(valuesArray.next().value)

    // 배열내 모든 요소가 callback함수에 부합하는 지 체크
    const everyArray1 = basicArray.every(item => typeof item === "string");
    const tempArray = ["a", "b", "c"];
    const everyArray2 = tempArray.every(item => typeof item === "string");
    console.log(everyArray1)
    console.log(everyArray2)

    // 배열내 요소중 callback함수에 부합하는 요소만을 골라 새로운 배열로 반환
    const filterArray = basicArray.filter(item => typeof item === "string");
    console.log(filterArray);

    // 배열네 요소중 callback함수에 부합하는 첫번째 요소를 반환
    const findArray = basicArray.find(item => item === 9);
    console.log(findArray)

    // 배열네 요소중 callback함수에 부합하는 첫번째 요소의 인덱스를 반환
    const findIndexArray = basicArray.findIndex(item => item === 9);
    console.log(findIndexArray)

    // 배열내 요소만큼 순회하며 작업
    // 순회중지가 불가함
    // 반환값 없음
    basicArray.forEach(item => item);

    // 배열내 요소만큼 순회하며 작업
    // 순회중지가 불가함
    // 작업한 결과에 따른 새로운 배열값 반환
    const mapArray = basicArray.map(item =>  { if (typeof item === "string") {
        return item;
    }});
    console.log(mapArray)
}

export { arryEditFunc, arryAccessFunc, arryLoopFunc }
