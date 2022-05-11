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

export { duplicationFunc }