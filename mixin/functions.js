import { isEmpty } from "../globalFunctions.js"

function basicMixin(target, source, property) {
    const checkNull = isEmpty(target) || isEmpty(source);
    const checkObj = typeof target === "object" && typeof source === "object"

    if (isEmpty(property)) {
        console.log("프로퍼티 부재");
    }

    if (checkNull || !checkObj) {
        console.log("객체 부재")
        return;
    }

    target[property] = source[property];

    return target;
}

function allMixin(target, source) {
    const checkNull = isEmpty(target) || isEmpty(source);
    const checkObj = typeof target === "object" && typeof source === "object"

    if (checkNull || !checkObj) {
        console.log("객체 부재")
        return;
    }

    return Object.assign(target, source);
}

export { basicMixin, allMixin }