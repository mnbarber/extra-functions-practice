// 1.1. What is the difference between a parameter and an argument?
    // a parameter is the 'empty' slot in a function- a placeholder waiting for the input the function will receive, and an argument is the values input to the function when it is called and ran

// 1.2. Within a function, what is the difference between return and console.log?
    // using return in a function will give you the output of the function with the specified value, using console.log will give output in the form of a statement you specify

// 1. 3. What are the implications of the ability of a function to return a value?
    // you can use the function multiple times within the code to return the value again if needed


// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    return (num * num * num)
}

console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i = 0; i <vowels.length; i++) {
        if(letter === vowels[i]) return true;
    }
    return false;
}

console.log(isAVowel('a'));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
    let lengthArray = [];
    let lengthWord1 = word1.length;
    let lengthWord2 = word2.length;
    lengthArray.push(lengthWord1, lengthWord2);
    return lengthArray;
}

console.log(getTwoLengths("nuggets", "dictionary"));

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));

// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
    if(num === 2) return true;
    if(num <= 1) return false;

    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    } return true;
}

console.log(checkPrime(11));

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
    for(i = 0; i <= num; i++) {
        if(checkPrime(i) % 2 !== 0) {
            console.log(`${i} is a prime number.`);
        }
    }
}

console.log(printPrimes(100));

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
    let word = "";
    for(let i = 0; i < arr.length; i++) {
        if(word.length < arr[i].length) {
            word = arr[i];
        }
    } return word;
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
