// function(x) {
//     return x * x;
// };

// console.log(square(8));

// const squareArrow = (x) => {
//     return x * x;
// };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(5));

// const fullName = "Kyle Nate";

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Kyle Nate'));

const getFirstName2 = (fullName) => fullName.split(' ')[0];

console.log(getFirstName2('Rain de Castro'));