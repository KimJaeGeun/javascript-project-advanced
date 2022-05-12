function duplicationFunc(f) {
    const cache = [];

    function memorise(i) {
        return function() {
            cache.push({func: i});
            return cache
        }
    }

    console.log(memorise(f)());
}

// 사용되는 list가 정해져있는 데이터라 가정할때 프로토타입 함수를 작성하여 상속
// list = [{
//     no: 1,
//     name: 'abc',
//     option: false,
//     value: []
// }]
const protoObjectType = {
    sortName: (list) => list.sort((a, b) => a.name - b.name),
    valueFilterList: (list) => list.filter(item => item.value.length !== 0),
    optionFilterList: (list) => list.filter(item => item.option)
}

const protoFunctionType = function() {
    sortName: (list) => list.sort((a, b) => a.name - b.name);
    valueFilterList: (list) => list.filter(item => item.value.length !== 0);
    optionFilterList: (list) => list.filter(item => item.option);
}

export { duplicationFunc, protoObjectType, protoFunctionType }