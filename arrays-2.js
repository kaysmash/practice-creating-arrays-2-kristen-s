let helloArray = Array(7);
let helloArrayFilled = helloArray.fill("Hello");
console.log(helloArrayFilled); // Output: ["Hello", "Hello", "Hello", "Hello", "Hello", "Hello", "Hello"]

let helloArrayPartialFilled = helloArray.fill("Hey", 2, 5);
console.log(helloArrayPartialFilled); // Output: ["Hello", "Hello", "Hey", "Hey", "Hey", "Hello", "Hello"]

let numbersByTen = Array(5);
for (let i = 0; i < numbersByTen.length; i++) {
  numbersByTen[i] = i * 10;
}
console.log(numbersByTen); // Output: [0, 10, 20, 30, 40]