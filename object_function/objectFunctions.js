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


}

export { basicObjFunc }