// 객체 프로퍼티 키명 변경 함수
// TODO: 함수 간소화 연군
function changeProperty(obj, a, b) {
    obj[b] = obj[a];
    delete obj[a]
    return obj;
}

export { changeProperty }

