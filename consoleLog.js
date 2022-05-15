import { changeProperty } from './type_syntax/function.js'
import { duplicationFunc, protoObjectType, protoFunctionType } from './object_function/function.js'
import { sortFunc } from './research.js'

function consoleLog() {
    const name = 'kim';

    const obj = {
        name,
        sayKim() {
            console.log(this.name)
        }
    }

    obj.sayKim()
    //  kim
}
export default consoleLog;
