const names = ['david', 'eddie', 'alex', 'michael'];
const others = ['sammy', 'gary', 'amberlee', 'mark'];

const lost = [4, 8, 15, 16, 23, 42];
const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

const combine = lost.concat(fibonacci);
console.log(combine);

console.log(fibonacci.join('~'));
//push('3') adds onto the end of the array, pop() removes the last item of the array

console.log(lost.shift()); // removes the first item of the array, opposite of the pop
console.log(lost);

lost.unshift(1, 2, 3, 4); // adds onto the start of the array, opposite of the push
console.log(lost);   

console.log(names);
console.log(names.reverse());
console.log(names.sort());

console.log(others.indexOf('mark')); // first intance of the value 

console.log(combine);   
console.log(combine.lastIndexOf(1)); // last intance of the value

const filtered = combine.filter((x) => { if(x <= 15) return x; });
console.log(filtered);

names.forEach((name) => console.log(`hello ${name}`));

console.log(filtered.every((num) => num < 10));
console.log(filtered.every((num) => num < 16));

console.log(fibonacci.some((num) => num > 50));
console.log(fibonacci.some((num) => num > 100));