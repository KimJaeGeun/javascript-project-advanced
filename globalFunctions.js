function isEmpty(value) {
    if (typeof value === 'undefined' || typeof value === 'null' || value.length === 0) {
        return true;
    }
    return false;
}

export { isEmpty }