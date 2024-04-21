// // // // // // // // // // // Assignment Question 11 // // // // // // // // // 

// Ek list of integers lein.
// Har integer ko check karein, agar woh 3 se divisible hai to us
// integer ko replace karein "Three", agar 5 se divisible hai to us integer ko replace 
// karein "Five", agar dono se divisible hai to us integer ko replace karein 
// "ThreeFive".
// Agar integer 3 ya 5 se divisible nahi hai to us integer ko unchanged rakhein.
// Output mei list ke modified elements ko print karein.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
        arr[i] = "ThreeFive";
    } else if (arr[i] % 3 === 0) {
        arr[i] = "Three";
    } else if (arr[i] % 5 === 0) {
        arr[i] = "Five";
    }
}
console.log(arr);

// By Using Fumction And Return;

function replaceNumbers(arr) {
    return arr.map((num) => {
        if (num % 3 === 0 && num % 5 === 0) {
            return "Three-Five";
        } else if (num % 3 === 0) {
            return "Three";
        } else if (num % 5 === 0) {
            return "Five";
        } else {
            return num;
        }
    })
}
const result = replaceNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result);

// // // // // // // // // // // Assignment Questions 12 // // // // // // // // // 


// Ek list of integers lein aur sirf even numbers ko 
// filter karke ek nayi list generate karein.

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = arr2.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Ek string input lein aur uska reverse print karein.

const str = "Javascript";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(reversed);

// For Simple Method Of Reversing is 

const str2 = "Javascript";
let reverse2 = str2.split("").reverse().join("");
console.log(reverse2);

// Function sy bhi dekh lo same hai

function reverse(str) {
    return str.split("").reverse().join("");
}
console.log(reverse("Javascript"));

// Ek integer input lein aur check karein ke woh prime hai ya nahi.

const num = 7;
if (num <= 1) {
    console.log("Not Prime Number");
} else if (num === 2) {
    console.log("Prime Number");
} else if (num % 2 === 0) {
    console.log("Not Prime Number");
} else {
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) {
            console.log("Not Prime Number");
            break;
        }
    }
    console.log("Prime Number");
}

// Function
function isPrime(num) {
    if (num <= 1) {
        return "Non Prime Number";
    };
    if (num === 2) {
        return "Prime Number";
    };
    if (num % 2 === 0) {
        return "Non Prime Number";
    };
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) {
            return "Non Prime Number";
        };
    }
    return "Prime Number";
}
console.log(isPrime(11)); // True
console.log(isPrime(12)); // False

// Ek list of integers lein aur uss list ka maximum element find karein.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = [0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(max);

// Second Way

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const max2 = Math.max(...numbers2);
console.log(max2); // 10

// Ek string input lein aur check karein ke woh palindrome hai ya nahi.

const isPalindrome = "racecar";
let isPalindromeCheck = ""
for (let i = isPalindrome.length - 1; i >= 0; i--) {
    isPalindromeCheck += isPalindrome[i];
}
if (isPalindrome === isPalindromeCheck) {
    console.log(true);
} else {
    console.log(false);
}

// Easiest Method

const str3 = "racecar";
const reversed3 = str.split('').reverse().join('');
if (str === reversed) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}

// Ek integer input lein aur Fibonacci series ka output generate karein,
// starting from 0 up to the specified number of terms.
// Ek string input lein aur uss mein vowels ki counting karein.

function countVowels(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}
const input = 'Hello, World!';
console.log(countVowels(input)); // Output: 3

