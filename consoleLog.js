import { changeProperty } from './type_syntax/function.js'
import { duplicationFunc, protoObjectType, protoFunctionType } from './object_function/function.js'
import { sortFunc } from './research.js'

function consoleLog() {
    const array = ['a', 'b'];
    const obj = {
        a: 'A',
        b: 'B'
    }
    

    // const [t1, t2] = array;
    const {a, test2} = obj;
    console.log(a)
    console.log(test2)
}
export default consoleLog;
