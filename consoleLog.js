import { changeProperty } from './type_syntax/function.js'

function consoleLog() {
    const obj = {
        a: 'A',
        b: 'B',
        c: 'C',
        f: 'd'
    }
    testLabel: if (true) {
        break testLabel;
    }
    testLabel: for (let i = 0; i <obj.length; i++) {

    }
    console.log(this.testLabel)
}

export default consoleLog;
