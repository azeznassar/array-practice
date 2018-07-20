//Higher Order Functions

const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//ForEach

// for(i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// companies.forEach(function(company) {
//   console.log(company);
// })

companies.forEach(company => console.log(company.name));



//filter 

//let adults = [];
// for(i = 0; i < ages.length; i++) {
//   if(ages[i] >= 18) adults.push(ages[i]);
// }

// const adults = ages.filter(function(age) {
//   if(age >= 18) {
//     return true;
//   }
// })

// const adults = ages.filter(age => { if(age >= 18) return true; });

const adults = ages.filter(age => age >= 18);

console.log(adults);

// financeCompanies = companies.filter(function(company) {
//   if(company.category === 'Finance') return true;
// });

const financeCompanies = companies.filter(company => company.category === 'Finance');
console.log(financeCompanies);

const startedInThe90s = companies.filter(company => (company.start >= 1990 && company.start <= 1999));
console.log(startedInThe90s);

const lasted10Years = companies.filter(company => (company.end - company.start >= 10));
console.log(lasted10Years);



//map 

// const companyNames = companies.map(function(company) {
//   return company.name;
// });

const companyNames = companies.map(company => company.name);
console.log(companyNames);

// const companyInfo = companies.map(function(company) {
//   return `${company.name}: ${company.category} [${company.start} - ${company.end}]`;
// });

const companyInfo = companies.map(company => `${company.name}: ${company.category} [${company.start} - ${company.end}]`);
console.log(companyInfo);

const agesSquare = ages.map(age => Math.sqrt(age));
const agesTimesTwo = ages.map(age => age * 2);

const agesSquaredTimesTwo = ages
                  .map(age => Math.sqrt(age))
                  .map(age => age * 2);    
console.log(agesSquaredTimesTwo);



//sort

// const sortedByStartDate = companies.sort(function(comp1, comp2) {
//   if(comp1.start > comp2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const sortedByStartDate = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedByStartDate);

const agesLowToHigh = ages.sort((a, b) => a - b);
const agesHighToLow = ages.sort((a, b) => b - a);
console.log(agesLowToHigh, agesHighToLow);



//reduce 

// let agesSum = 0;
// for (i = 0; i < ages.length; i++) {
//   agesSum += ages[i];
// }

// const agesSum = ages.reduce(function(total, age) {
//   return total + age;
// },0);

const agesSum = ages.reduce((total, age) => total + age, 0);
console.log(agesSum);

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears);



//Combined methods

const combined = ages
              .map(age => age * 2)
              .filter(age => age >= 30)
              .sort((a, b) => a - b)
              .reduce((a, b) => a + b, 0);
console.log(combined);