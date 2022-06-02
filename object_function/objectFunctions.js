const basicObj = {
    name: 'kjg',
    age: 31,
    area: 'suwon',
    wife: {
        name: 'ceh',
        age: 28,
        area: 'suwon'
    }
}

function basicObjFunc() {
    // const 선언으로 참조 자체를 변경 할 수 없지만, 참조되는 내용의 수정은 가능

    // 원본 참조
    const obj = basicObj;

    // 원본 복사
    // 전개 연산자를 통한 객체복사
    const copyObj = {...basicObj};

    basicObj.status = 'happy';

    console.log(obj)
    console.log(copyObj)
}

function objFunc() {
    // 오브젝트내 내장 함수
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object
    const copyObj1 = {...basicObj};
    const copyObj2 = {
        contury: "korea"
    };

    const entriesObj = Object.entries(copyObj1);
    // [key, value]로 이루어진 2중 배열반환
    // [[key1, value1], [key2, value2], [key3, value3], [key4, value4]]
    // for in으로 객체내 키를 순회하였다면, Object.entries로 반환된 배열로 for of구문을 이용한 key, value순회가 가능
    console.log(entriesObj);

    // key, value로 이루어진 배열을 객체화
    // Object.entries()의 반환값의 이전값으로 반환
    const fromEntries = Object.fromEntries(entriesObj);
    console.log(fromEntries);

    const assignsObj = Object.assign(copyObj1, copyObj2);
    // 열거 가능한 객체의 복사
    // 반환 객체는 대상들의 객체를 서로 합쳐만들어진 객체를 반환
    console.log(assignsObj)

    // 객체는 참조형이기에 값을 비교할 수 없다.(같은 값이라도 같은 곳을 참조하지 않는 한 다르다.)
    // 객체의 비교의 경우 JSON.stringify등으로 변환후 비교
    const t1 = {a: "A"};
    const t2 = {a: "A"};

    console.log(t1 === t2)
    // 두 값을 비교하여 boolean값을 반환
    console.log( Object.is(t1, t2))

    // 객체내 key으로 이루어진 배열 반환
    console.log(Object.keys(copyObj1))

    // 객체내 value로 이루어진 배열 반환
    console.log(Object.values(copyObj1));


}

export { basicObjFunc, objFunc }