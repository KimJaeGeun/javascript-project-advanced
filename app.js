import consoleLog from "./consoleLog.js";
import dropdown from './web_document/components/Dropdown.js'
import listRender from './web_document/components/List.js'


function app() {
    // consoleLog();
    new listRender();
    new dropdown();
}

export default new app(document.querySelector('#app'))