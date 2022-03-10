// Exer1
function min(a, b) {
    var num = b;
    if (a < b) {
        num = a;
        return num;
    }
}

console.log(min(-122, 12)); // => -122


// Exer2 
function isEven(num) {
    if (num === 0) { return true } else if (num === 1) { return false } else if (num < 0) { return "none" } else return isEven(num - 2)
}
console.log(isEven(1)) // -> false


// Exer 3
function countBs(s) {
    var count = 0;
    for (var i = 0; i < s.length; i += 1) {
        if (s.charAt(i) === "B")
            count += 1;
    }
    return count;
}
console.log(countBs("BBBBBBBBC")); //-> 8

function countChar(s, c) {
    var count = 0;
    for (var i = 0; i < s.length; i += 1) {
        if (s.charAt(i) === c)
            count += 1;
    }
    return count;
}
console.log(countChar("duke ducc hieu", "u")); // -> 3