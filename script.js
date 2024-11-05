//Q1

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num ** 2);
// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

//Q2
// function getGrade(score) {
//     return score >= 90 ? 'A' :
//            score >= 80 ? 'B' :
//            score >= 70 ? 'C' :
//            score >= 60 ? 'D' : 'F';
// }

// console.log(getGrade(85)); // Output: 'B'

//Q3
// const car = {
//     company: 'Toyota',
//     model: 'Camry',
//     year: 2020
// };

// function changeYear(newYear) {
//     car.year = newYear;
// }

// changeYear(2022);

// // Destructuring model and year
// const { model, year } = car;
// console.log(`Model: ${model}, Year: ${year}`); // Output: Model: Camry, Year: 2022


//Q4
// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// const isPrime = (num) => {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// };

// const primeNumbers = numbers.filter(isPrime);
// console.log(primeNumbers); // Output: [2, 3, 5, 7]


//Q5
//map: Used for transforming each element in an array without modifying the original array.
// const numbers = [1, 2, 3, 4];
// const squaredNumbers = numbers.map(num => num ** 2);
// console.log(squaredNumbers); // Output: [1, 4, 9, 16]

//filter: Used for creating a new array that includes only elements that meet a specific condition.
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4, 6]

//reduce: Used for accumulating values, either to sum them up or to transform them into another form.
// const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple'];
// const fruitCounts = fruits.reduce((counts, fruit) => {
//     counts[fruit] = (counts[fruit] || 0) + 1;
//     return counts;
// }, {});
// console.log(fruitCounts); // Output: { apple: 3, banana: 2, orange: 2 }




//Q6
// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// fetchData();


//Q7
const person = {
    name: 'Pihu Dey',
    address: {
        city: 'Delhi',
        country: 'India'
    },
    contact: {
        phone: '123-456-7890'
    }
};

// Using optional chaining to access the phone number
const phoneNumber = person.contact?.phone;
console.log(phoneNumber); // Output: 123-456-7890

// If contact property is missing
const personWithoutContact = {
    name: 'Pihu Dey',
    address: {
        city: 'Mumbai',
        country: 'India'
    }
};

const phoneNumberMissing = personWithoutContact.contact?.phone;
console.log(phoneNumberMissing); // Output: undefined

