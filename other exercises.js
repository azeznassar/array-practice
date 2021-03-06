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
// ex. longestWord('Hi there, my name is Azez') === 'there,'

function longestWord(sentence) {
  //returns an array if multiple words are the longest, otherwise return a string
  const wordArray = sentence.toLowerCase().match(/[a-z0-9]+/g);
  const sorted = wordArray.sort((a, b) => b.length - a.length);
  const longestWordArray = sorted.filter((word) => word.length === sorted[0].length);
  if(longestWordArray.length === 1) return longestWordArray[0] 
  else return longestWordArray;
}

// CHALLENGE 8: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(array, length) {
  // const chunkedArray = [];
  // let i = 0;
  // while(i < array.length) {
  //   chunkedArray.push(array.slice(i, i + length));
  //   i += length;
  // }
  // return chunkedArray;
  
  const chunkedArray = [];
  array.forEach((value) => { 
    const last = chunkedArray[chunkedArray.length - 1];
    if(!last || last.length === length) chunkedArray.push([value])
    else last.push(value);
  });
  return chunkedArray;
}

// CHALLENGE 9: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  // return arrays.reduce((a, b) => a.concat(b));
  
  // return [].concat.apply([], arrays);
  
  return [].concat(...arrays);
}

// CHALLENGE 10: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(a, b) {
  return format(a) === format(b);
}
function format(string) {
  return string.replace(/[^\w]/g, '')
               .toLowerCase()
               .split('')
               .sort()
               .join('');
}

// CHALLENGE 11: CHANGE LETTERS
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function moveLetters(string) {
  let newString = string.toLowerCase().replace(/[a-z]/gi, (letter) => (letter === 'z' || letter === 'Z' ? 'a' : String.fromCharCode(letter.charCodeAt() + 1)));
  newString = newString.replace(/a|e|i|o|u/gi, (vowel) => vowel.toUpperCase());
  return newString;
}

const output = moveLetters('hello there');
console.log(output);
