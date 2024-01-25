let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let passportMarried2 = {...passportMarried, married: true, address: {...passportMarried.address}}

passportMarried2.married = {
    name: "Petr",
    surname: "Petrov",
    married: true,
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

console.log(passportMarried);
console.log(passportMarried2);