Array.prototype.uniq = function() {
    let newArr = [];
    this.forEach(makeUniq);

    function makeUniq(el) {
        if (newArr.includes(el)) {
            return
        }
        newArr.push(el);
    }
    return newArr;
}

const myUniq = function(array) {
    let newArr = [];
    array.forEach(uniqueness);

    function uniqueness(el) {
        if (newArr.includes(el)) {
            return
        }
        newArr.push(el);
    }
    return newArr;
}