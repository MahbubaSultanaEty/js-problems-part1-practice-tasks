// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

// (cel* 1.8)+32
function toF(cel) {
    const faren = (cel * 1.8) + 32;
    console.log(faren +"°" + " Fahrenheit");
}
const cel = 20;
toF(cel)


// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

let target = 5;
function rep(repCount){
let count = 0;
for (let num of repCount) {
        if (num === target) {
            count++;
        }   
    }
 return count;
}
let numbers = [5, 6, 11, 12, 98, 5];
console.log(rep(numbers));

target = 25;
console.log(rep(numbers));


// Task-3:
// Write a function to count the number of vowels in a string.

function vCount(str) {
    let count = 0;
    for (let char of str) {
        if (char.toLowerCase().includes("a") || char.toLowerCase().includes("e") || char.toLowerCase().includes("i") || char.toLowerCase().includes("o") || char.toLowerCase().includes("u")) {
            count ++;
        }
    } console.log(count);
   }

vCount("Dil disco disco bole sari raat sajna");

// another method
function vowels(sentence) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of vowels) {
        if (sentence.includes(char));
        count++;
    } 
    return count;
}
let sent = "The quick brown fox jumps over the lazy dog";
console.log(vowels(sent));

// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function longest(str) {
    let arr = str.split(" ");
    let longest = "";
    for (let word of arr) {
        if (word.length > longest.length) {
            longest = word;
        }
    } console.log(longest)
}

let sentence = "The Java in JavaScript is a marketing ploy";
longest(sentence);

// Task-5:
// Generate a random number between 10 to 20.

let randomNum = Math.floor(Math.random() * 11) + 10;
console.log(randomNum);