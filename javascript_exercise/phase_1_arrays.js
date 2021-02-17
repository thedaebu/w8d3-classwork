Array.prototype.uniq = function() {
    let newArr = [];
    this.forEach(makeUniq);

    function makeUniq(el) {
        if (newArr.includes(el)) {
            return;
        }
        newArr.push(el);
    }
    return newArr;
};

const myUniq = function(array) {
    let newArr = [];
    array.forEach(uniqueness);

    function uniqueness(el) {
        if (newArr.includes(el)) {
            return;
        }
        newArr.push(el);
    }
    return newArr;
};

Array.prototype.twoSum = function() {
  // sum of two indicies that equal 0
  // indicies's positions should be unique
  // return an array of the positions as [pairs]

  let newArr = [];
  for (let i=0; i<(this.length -1); i++){
    for (let j = i+1; j < (this.length); j++) {
      if(this[j]+this[i] === 0){
        newArr.push([i,j]);
      }
    }
  }
  return newArr;
};

Array.prototype.transpose = function(){


  let newArr = [];
  for(i=0; i<this.length; i++){
    let row = [];
    for(j=0; j<this.length; j++){
      row.push([this[j][i]]);
    }
    newArr.push(row);
  }
return newArr;
};

console.log([1,-1,5,0,-5].twoSum());

a = [[1,2,3],[4,5,6],[7,8,9]].transpose();
console.log(a);

// 0, 0 | 0, 1 | 0, 2
// 1, 0 | 1, 1 | 1, 2
// 2, 0 | 2, 1 | 2, 2