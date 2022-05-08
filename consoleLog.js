import { changeProperty } from './type_syntax/function.js'

function consoleLog() {
    const a ='A';
    function testFunc1() {
        const b = 'B';
        function testFunc2() {
            const c = 'C';
            console.log(a + b + c)
            // consoleLog 스코프, testFunc1스코프, testFunc2 스코프
            // 상위계층에서 선언된 변수 사용
        }
        testFunc2()
    }
    testFunc1()
    console.log(a + b + c)
    // 하위계층에서 선언된 것을 호이스팅은 불가하다(const, let이니깐)
}

export default consoleLog;
