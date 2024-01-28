const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];

function serto(array) {
    return array.map(subArray =>
        subArray.filter(number => number % 2 === 0)
    );
}

const result = serto(numbers);
console.log(result);