// Exercise 1
function range(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

function sum(start, end) {
    let total = 0;
    for (let i = start; i <= end; i++) {
        total += i;
    }
    return total;
}
console.log(range(1, 4)) // ->[1,2,3,4]
console.log(sum(1, 10)); // ->55

// Exercise 2

function reversedArray(array) {
    let reArr = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reArr.push(array[i]);
    }
    return reArr;
}

console.log(reversedArray(['ashe', 'oriana', 'zed'])); // -> ['zed', 'oriana', 'ashe']

function reversedArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length - 1 / 2); i++) {
        let localArr = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = localArr;
    }
    return array;
}
console.log(reversedArrayInPlace(['ashe', 'oriana', 'zed']));

// Exercise 3: A list
function arrayToList(array) {
    let result = {};
    if (Array.isArray(array)) {
        let currListItem = result;
        for (let item of array) {
            let newListItem = {
                value: item,
                rest: null
            };
            if (typeof currListItem.rest === 'undefined') {
                result = newListItem;
            } else {
                currListItem.rest = newListItem;
            }
            currListItem = newListItem;
        }
    }
    return result;
}
console.log(arrayToList([2, 4, 6]));

function listToArray(list) {
    let result = [];
    if (typeof list === 'undefined' || list.value === undefined || list.rest === undefined) {
        return result;
    } else {
        result.push(list.value);
        while (list.hasOwnProperty('rest') && list.rest !== null) {
            list = list.rest;
            if (list.hasOwnProperty('value')) {
                result.push(list.value);
            }
        }
    }
    return result;
}

function prepend(el, list) {
    return {
        value: el,
        rest: list
    };
}

function nth(list, number) {
    return listToArray(list)[number];
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(arrayToList([4, 3, 2, 1]));
// → {value: 4, rest: {value: 3, rest: {value: 2, rest: {value: 1, rest: null}}}}
console.log(listToArray({ value: 10, rest: { xxx: 20, yyy: null } }));
// → [10]
console.log(listToArray({ value: 10, rest: { value: 20, yyy: null } }));
// → [10, 20]
console.log(listToArray({ value: 10, rest: { xxx: 20, rest: null } }));
// → [10]
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20