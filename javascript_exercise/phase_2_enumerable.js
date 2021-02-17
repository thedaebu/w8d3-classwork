Array.prototype.myEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i])
    }

};

Array.prototype.myReduce = function (callback, initialValue) {

    let newArr = this;

    if (initialValue === undefined) {
        initialValue = this[0];
        newArr.shift;
    }

    let acc = initialValue;

    newArr.myEach(function (ele) {
        acc = callback(acc, ele);
    })

    return acc;
};

let callback = function (el) {
    return el * 2;
};

Array.prototype.myMap = function (callback) {
    let newArr = [];

    this.myEach(function (ele) {
        newArr.push(callback(ele));
    })


    return newArr;
};



let callforward = function (el, ele) {
    return el * ele;
};
