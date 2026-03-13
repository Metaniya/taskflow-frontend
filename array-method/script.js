const list = [1, 2, 3, 4, 5];



// length returns the number of elents in the array 
const size = list.length;
console.log('Size of the list:', size);

// forEach returns each element in the array and performs the specified action on it
 list.forEach(num => console.log(num));

// map returns a new array with the results of calling a provided function on every element in the calling array
const squared = list.map(num => num * num);
console.log('Squared list:', squared);

// filter returns a new array with all elements that pass the test implemented by the provided function
const evenNumbers = list.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers);

// reduce executes a reducer function on each element of the array, resulting in a single output value
const sum = list.reduce((acc, num) => acc + num, 0);
console.log('Sum of the list:', sum);   