import { changeProperty } from './type_syntax/function.js'
import { duplicationFunc, protoObjectType, protoFunctionType } from './object_function/function.js'

function consoleLog() {
const list = [{
    no: 1,
    name: 'tgbnhy',
    option: false,
    value: []
},
{
    no: 1,
    name: 'qwer',
    option: true,
    value: [1]
},
{
    no: 1,
    name: 'asdf',
    option: false,
    value: []
},
{
    no: 1,
    name: 'abc',
    option: false,
    value: [1,4,8]
},
{
    no: 1,
    name: 'zxcv',
    option: true,
    value: []
}]

const testFunc = { test: console.log("test")};
testFunc.__proto__ = protoObjectType;
console.log(testFunc.sortName(list));

const testFunc2 = function() { test: console.log("test")};
// testFunc2.__proto__ = protoFunctionType;
console.log(protoFunctionType().sortName(list))
}
export default consoleLog;
