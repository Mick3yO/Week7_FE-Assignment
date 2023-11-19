/* 1.Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. */

let ages = [3, 9, 23, 64, 25, 8, 28, 93]
console.log("ages:", ages);


  /* a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed! */
let minusAge = ages [ages.length -1] - ages[0];
console.log("minusAge", minusAge);

  /*b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).*/
   ages.push(105);
   console.log("Ages after adding new value", ages);

   /* c. Use a loop to iterate through the array and calculate the average age.*/

   let sumOfAges = 0;
   for(let i = 0; i < ages.length; i++) {
    sumOfAges += ages[i];
   }
   let average = sumOfAges / ages.length;
   console.log("the average age is", average);

/*2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.*/
  let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
  let totalChars = 0;


     /* a. Use a loop to iterate through the array and calculate the average number of letters per name.*/
       for (let i = 0; i < names.length; i++) {
    totalChars += names[i].length
  }
  let averageName = totalChars / names.length;
  console.log("The average number of letters per name is", averageName);
     /* b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.*/
 let concatNames = "";
 for (let i = 0; i < names.length; i++){
concatNames = concatNames.concat(names[i] + " ");
console.log(i, "Concatenated Names", concatNames);
 }

// 3.How do you access the last element of any array? 
console.log("Las element of ages array", ages[ages.length -1]);

// 4.How do you access the first element of any array? 
console.log("The first element of the ages array", ages[0]);

/* 5.Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:
let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array */

let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
    console.log("Name lengths array", nameLengths);
}

// 6.Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let charsTotal = 0
for(let i = 0; i < nameLengths.length; i++){
charsTotal += nameLengths[i];
console.log("Total Charecters", charsTotal);

}

/* 7.Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.
 (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').*/
function concatWords(word, n) {
let concat = word.repeat(n)
console.log(concat);
}
concatWords("hello", 3);

// 8.Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function fullName(firstName, Lastname){
  let fullName = firstName + " " + Lastname;
  console.log(fullName);
}
fullName("Miguel", "Orozco")

// 9.Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let numbers1 = [100, 200, 300, 400];
let numbers2 = [1, 2, 3, 4];

function sumNumbersArray(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  console.log("Total:", total);

  if (total > 100) {
    console.log("Total:", total, true);
    return true;
  } else {
    console.log("Total:", total, false);
    return false;
  }
}

sumNumbersArray(numbers2);

// 10.Write a function that takes an array of numbers and returns the average of all the elements in the array.
function calculateNumbersAverage(array) {
  let total = 0;
    
  for (let i = 0; i < array.length; i++) {
    total += array[i];
    console.log("Calculate Funtion, toal:", total);
  }
  let average = total / array.length;
  console.log("Average of Numbers", average);
  return average;
}
calculateNumbersAverage(numbers1);

// 11.Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let numbers3 = [10, 20, 30, 40];
let numbers4 = [10, 10, 7, 8];

function compareAverages(array1, array2) {
  let total1 = 0;
  let total2 = 0;
for (const number of array1){
  total1 += number;
}
for (const number of array2){
  total2 += number;
}

let average1 = total1 / array1.length;
let average2 = total2 / array1.length;
console.log("averages", average1, average2);
if (average1 > average2) {
  console.log(true);
  return true;
} else if (average1 < average2) {
  console.log(false);
  return false;
} else {
  console.log("Numbers are equal")
}
}
compareAverages(numbers3, numbers4);

// 12.Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50 */
function willBuyDrink(isHotOutside, moneyInPocket) {
  // Check if it is hot outside and if moneyInPocket is greater than 10.50
  return isHotOutside && moneyInPocket > 10.50;
}

let hotDay = true;
let moneyAvailable = 50.00;

let result = willBuyDrink(hotDay, moneyAvailable);
console.log("Buy a Drink?",result); 
