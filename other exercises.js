//Azez Nassar, 2018 -- JavaScript 'Cardio' Challenges 

// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    // return str
    //     .split('')
    //     .reverse()
    //     .join('');
    ////////////////////////

    // let revString = '';
    // for(let i = str.length - 1; i >= 0; i--) {
    //     revString = revString + str[i];
    // }
    // return revString;
    /////////////////////////

    // let revString = '';
    // for(let i = 0; i <= str.length - 1; i++) {
    //     revString =  str[i] + revString;
    // }
    // return revString;
    /////////////////////////

    // let revString = '';
    // for(let char of str) {
    //     revString =  char + revString;
    // }
    // return revString;
    /////////////////////////

    // let revString = '';
    // str.split('').forEach(char => revString =  char + revString);
    // return revString;
    /////////////////////////

    return str.split('').reduce((revString, char)  => char + revString, '');
}


// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
    const revString = str.split('').reverse().join('');

    return revString === str;
}


// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('');

    return parseInt(revString) * Math.sign(int);
}


// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
    // const strArray = str.toLowerCase().split(' ');
    // for (let i = 0; i < strArray.length; i++) {
    //     strArray[i] = strArray[i].substring(0, 1).toUpperCase() + strArray[i].substring(1);
    // }
    // return strArray.join(' ');
    /////////////////////////////////////

    // return str
    //     .toLowerCase()
    //     .split(' ')
    //     .map(word => word[0].toUpperCase() + word.substr(1))
    //     .join(' ');
    //////////////////////////////////////

    return str.replace(/\b[a-z]/gi, char => char.toUpperCase());
}


// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach(char => {
        if(charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    });

    for (let char in charMap) {
        if (charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
            
        }
    }
    return maxChar;
}


// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
    for(let i = 1; i <= 100; i++) {
        if(i % 15 === 0) {
            console.log('FizzBuzz');
        } else if(i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

// CHALLENGE 7: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
}

// CHALLENGE 8: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {}

// CHALLENGE 9: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {}

// CHALLENGE 10: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {}

// CHALLENGE 11: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}


const output = fizzBuzz();
console.log(output);
