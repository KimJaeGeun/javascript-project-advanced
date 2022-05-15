function sortFunc(type, a, b) {
    switch(type) {
        // 문자열 내 숫자가 포함될 시에도 정렬 가능하게끔
        case "s": return (Number(a.match(/(\d+)/g)[0]) - Number((b.match(/(\d+)/g)[0])));
        case "n": return a - b;
    }
}

// const testArray = [
//     {
//         name: "test) - test092-j"
//     },
//     {
//         name: "test) - test031-k"
//     },
//     {
//         name: "test) - test052-b"
//     }
// ]
// ;
// console.log(testArray.sort((a, b) => sortFunc('s', a.name, b.name)))

export { sortFunc }