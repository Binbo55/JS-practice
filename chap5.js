// Exercise 1: Flattening
let arrays = [
    [1, 2, 3],
    [4, 5],
    [6]
];
let flatten = arrays.reduce(
    function(accumulator, currentValue) {
        return accumulator.concat(currentValue);
    }
)

console.log(flatten); // -> [1,2,3,4,5,6]

// Exercise 2: Your own loop
function loop(value, test, update, body) {
    for (let i = value; test(i); i = update(i)) {
        body(i)
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// Exercise 3: Everything
//my solution
let array = [1, 2, 3, 4, 5]
array.every(n => {
    return n < 3;
}); // -> false

array.some(n => {
        return n < 3
    }) // -> true

//google solution
function every(array, test) {
    for (let element of array) {
        if (test(element) === false) {
            return false;
        }
    }
    return true;
}

function every(array, test) {
    return every.some(test);
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true