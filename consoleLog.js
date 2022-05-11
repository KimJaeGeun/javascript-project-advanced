import { changeProperty } from './type_syntax/function.js'
import { duplicationFunc } from './object_function/function.js'

function consoleLog() {
    const x = 1;
    duplicationFunc((x)=> x*2);
}
export default consoleLog;
